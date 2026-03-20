import os
from datetime import datetime, timezone
from flask import Flask, render_template, request, jsonify, send_file, send_from_directory
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from io import BytesIO
from google.cloud import firestore

# Support deployment at subpath via environment variable
SUBPATH = os.getenv('APP_SUBPATH', '').strip('/')
if SUBPATH:
    SUBPATH = '/' + SUBPATH

# Path to the built presentation files
PRESENTATION_DIR = os.path.join(os.path.dirname(__file__), 'presentation')

app = Flask(__name__, static_folder='assets', static_url_path=f'{SUBPATH}/assets')

# Firestore client (auto-authenticated on Cloud Run via service account)
db = firestore.Client()
COLLECTION = 'responses'

# All known options per question (order matters for chart display)
ALL_OPTIONS = {
    'supermarket_time': [
        "That's a lot, I can't stand it anymore",
        "I accept it, but I'm open to becoming more efficient",
        "It is what it is...",
    ],
    'delivery_failure': ['Yes', 'No'],
    'cool_locker': ['Yes', 'No'],
    'meal_prep': ['Yes', 'Maybe', 'No'],
    'shopping_recs': ['Yes', 'No'],
    'would_pay': ['Yes', 'No'],
    'gender': ['Male', 'Female', 'Prefer not to say'],
    'age_range': ['18-25 years', '25-35 years', '36-50 years', '50+ years'],
}

TEXT_FIELDS = [
    'delivery_failure', 'supermarket_time', 'cool_locker', 'failed_find',
    'auto_availability', 'meal_prep', 'shopping_recs', 'would_pay',
    'gender', 'age_range', 'email', 'name',
]


def _count_by_field(responses, field):
    """Count occurrences of each value in a field, respecting ALL_OPTIONS order."""
    counts = {}
    for r in responses:
        val = r.get(field, '')
        if val:
            counts[val] = counts.get(val, 0) + 1
    options = ALL_OPTIONS.get(field)
    if options:
        return [{'label': opt, 'count': counts.get(opt, 0)} for opt in options]
    return [{'label': k, 'count': v} for k, v in counts.items()]


# ──── Presentation routes ────

@app.route('/coolbox/assets/<path:filename>')
def presentation_assets(filename):
    return send_from_directory(os.path.join(PRESENTATION_DIR, 'assets'), filename)


@app.route('/coolbox/')
def presentation_index():
    return send_from_directory(PRESENTATION_DIR, 'index.html')


@app.route('/coolbox/landingpage')
def presentation_landingpage():
    return send_from_directory(PRESENTATION_DIR, 'index.html')


# ──── Form routes ────

@app.route(f'{SUBPATH}/' if SUBPATH else '/')
def index():
    return render_template('form.html', subpath=SUBPATH)


@app.route(f'{SUBPATH}/dashboard' if SUBPATH else '/dashboard')
def dashboard():
    return render_template('dashboard.html', subpath=SUBPATH)


@app.route(f'{SUBPATH}/api/submit' if SUBPATH else '/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No data provided'}), 400

    doc = {
        'delivery_failure': data.get('delivery_failure', ''),
        'supermarket_time': data.get('supermarket_time', ''),
        'cool_locker': data.get('cool_locker', ''),
        'failed_find': data.get('failed_find', ''),
        'auto_availability': data.get('auto_availability', ''),
        'meal_prep': data.get('meal_prep', ''),
        'shopping_recs': data.get('shopping_recs', ''),
        'hygiene_importance': data.get('hygiene_importance'),
        'would_pay': data.get('would_pay', ''),
        'gender': data.get('gender', ''),
        'age_range': data.get('age_range', ''),
        'email': data.get('email', '').strip(),
        'name': data.get('name', '').strip(),
        'submitted_at': datetime.now(timezone.utc),
    }
    db.collection(COLLECTION).add(doc)
    return jsonify({'success': True, 'message': 'Response saved!'})


@app.route(f'{SUBPATH}/api/stats' if SUBPATH else '/api/stats')
def stats():
    responses = [doc.to_dict() for doc in db.collection(COLLECTION).stream()]
    total = len(responses)

    delivery_failure = _count_by_field(responses, 'delivery_failure')
    supermarket_time = _count_by_field(responses, 'supermarket_time')
    cool_locker = _count_by_field(responses, 'cool_locker')
    failed_find = _count_by_field(responses, 'failed_find')
    auto_availability = _count_by_field(responses, 'auto_availability')
    meal_prep = _count_by_field(responses, 'meal_prep')
    shopping_recs = _count_by_field(responses, 'shopping_recs')
    would_pay = _count_by_field(responses, 'would_pay')
    gender = _count_by_field(responses, 'gender')
    age_range = _count_by_field(responses, 'age_range')

    # Hygiene importance (numeric)
    hygiene_values = [r['hygiene_importance'] for r in responses
                      if r.get('hygiene_importance') is not None]
    if hygiene_values:
        hygiene_avg = round(sum(hygiene_values) / len(hygiene_values), 1)
        hygiene_dist_map = {}
        for v in hygiene_values:
            hygiene_dist_map[v] = hygiene_dist_map.get(v, 0) + 1
        hygiene_dist = [{'label': str(k), 'count': v}
                        for k, v in sorted(hygiene_dist_map.items())]
    else:
        hygiene_avg = 0
        hygiene_dist = []

    # Recent responses
    sorted_responses = sorted(
        responses,
        key=lambda r: r.get('submitted_at') or datetime.min.replace(tzinfo=timezone.utc),
        reverse=True,
    )
    recent = [
        {
            'name': r.get('name') or 'Anonymous',
            'email': r.get('email') or 'N/A',
            'date': r['submitted_at'].isoformat() if r.get('submitted_at') else '',
        }
        for r in sorted_responses[:10]
    ]

    # Answered counts
    answered = {}
    for field in TEXT_FIELDS:
        answered[field] = sum(1 for r in responses if r.get(field, ''))
    answered['hygiene_importance'] = len(hygiene_values)

    return jsonify({
        'total_responses': total,
        'answered': answered,
        'delivery_failure': delivery_failure,
        'supermarket_time': supermarket_time,
        'cool_locker': cool_locker,
        'failed_find': failed_find,
        'auto_availability': auto_availability,
        'meal_prep': meal_prep,
        'shopping_recs': shopping_recs,
        'hygiene_avg': hygiene_avg,
        'hygiene_dist': hygiene_dist,
        'would_pay': would_pay,
        'gender': gender,
        'age_range': age_range,
        'recent': recent,
    })


@app.route(f'{SUBPATH}/api/export' if SUBPATH else '/api/export')
def export_excel():
    responses = [doc.to_dict() for doc in db.collection(COLLECTION).stream()]
    responses.sort(
        key=lambda r: r.get('submitted_at') or datetime.min.replace(tzinfo=timezone.utc),
        reverse=True,
    )

    wb = Workbook()
    ws = wb.active
    ws.title = "Form Responses"

    headers = [
        'Time in Supermarkets', 'Delivery Failure?', 'Cool Locker Pickup?',
        'Meal Prep Delivery?', 'Shopping Recommendations?', 'Would Pay?',
        'Gender', 'Age Range', 'Email', 'Name', 'Submitted At'
    ]

    header_font = Font(bold=True, color="FFFFFF", size=11)
    header_fill = PatternFill(start_color="009000", end_color="009000", fill_type="solid")
    header_alignment = Alignment(horizontal="center", vertical="center")
    thin_border = Border(
        left=Side(style='thin'), right=Side(style='thin'),
        top=Side(style='thin'), bottom=Side(style='thin'),
    )

    for col, header in enumerate(headers, 1):
        cell = ws.cell(row=1, column=col, value=header)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = header_alignment
        cell.border = thin_border

    for row_idx, r in enumerate(responses, 2):
        submitted = r.get('submitted_at')
        values = [
            r.get('supermarket_time', ''), r.get('delivery_failure', ''),
            r.get('cool_locker', ''), r.get('meal_prep', ''),
            r.get('shopping_recs', ''), r.get('would_pay', ''),
            r.get('gender', ''), r.get('age_range', ''),
            r.get('email', ''), r.get('name', ''),
            submitted.isoformat() if submitted else '',
        ]
        for col_idx, value in enumerate(values, 1):
            cell = ws.cell(row=row_idx, column=col_idx, value=value)
            cell.border = thin_border

    for col in range(1, len(headers) + 1):
        max_length = len(str(ws.cell(row=1, column=col).value))
        for row in range(2, len(responses) + 2):
            cell_val = ws.cell(row=row, column=col).value
            if cell_val:
                max_length = max(max_length, len(str(cell_val)))
        ws.column_dimensions[ws.cell(row=1, column=col).column_letter].width = min(max_length + 4, 50)

    if len(responses) > 0:
        last_col_letter = ws.cell(row=1, column=len(headers)).column_letter
        ws.auto_filter.ref = f"A1:{last_col_letter}{len(responses) + 1}"

    output = BytesIO()
    wb.save(output)
    output.seek(0)

    return send_file(
        output,
        as_attachment=True,
        download_name=f'fresh_groceries_responses_{datetime.now().strftime("%Y%m%d_%H%M%S")}.xlsx',
        mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    )


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
