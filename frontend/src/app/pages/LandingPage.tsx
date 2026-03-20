import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  type: 'b2c' | 'b2b' | '';
  message: string;
};

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  city: '',
  type: '',
  message: '',
};

export default function LandingPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.type) newErrors.type = 'Please select a type';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-cyan-950 flex flex-col" style={{ minHeight: '100dvh' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-10 pb-5 flex-shrink-0">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>
        <div className="text-center">
          <span className="text-white font-black text-xl">Cool</span>
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-black text-xl">BOX</span>
        </div>
        <div className="w-16" />
      </div>

      <div className="flex-1 flex flex-col items-center px-5 pb-10 max-w-md mx-auto w-full">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              {/* Title */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-400/20 border border-emerald-400/30 rounded-full mb-4">
                  <span className="text-emerald-300 text-[10px] font-semibold uppercase tracking-widest">🚀 Early Access</span>
                </div>
                <h1 className="text-white text-2xl font-black mb-2">Get Early Access</h1>
                <p className="text-white/50 text-sm">
                  Join the waitlist and be among the first to experience CoolBOX.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 font-medium uppercase tracking-wide">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-400/60' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all text-sm`}
                  />
                  {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 font-medium uppercase tracking-wide">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-400/60' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all text-sm`}
                  />
                  {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 font-medium uppercase tracking-wide">Phone (optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+40 7XX XXX XXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all text-sm"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 font-medium uppercase tracking-wide">City *</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                    placeholder="Your city"
                    className={`w-full bg-white/5 border ${errors.city ? 'border-red-400/60' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all text-sm`}
                  />
                  {errors.city && <p className="text-red-400 text-[10px] mt-1">{errors.city}</p>}
                </div>

                {/* Type */}
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 font-medium uppercase tracking-wide">I am a... *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'b2c', label: '👤 Consumer', desc: 'I want fresh groceries' },
                      { value: 'b2b', label: '🏪 Business', desc: 'I want to partner' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('type', opt.value)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          form.type === opt.value
                            ? 'border-emerald-400 bg-emerald-400/10 shadow-lg shadow-emerald-500/10'
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <p className="text-white text-sm font-semibold">{opt.label}</p>
                        <p className="text-white/40 text-[10px] mt-0.5">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                  {errors.type && <p className="text-red-400 text-[10px] mt-1">{errors.type}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 font-medium uppercase tracking-wide">Message (optional)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us more about your needs..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 disabled:opacity-70 transition-all text-base mt-2"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Submitting...
                    </span>
                  ) : (
                    '🚀 Join the Waitlist'
                  )}
                </motion.button>

                <p className="text-white/20 text-[10px] text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mb-6 shadow-2xl shadow-emerald-500/30"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-white text-2xl font-black mb-3">You're on the list! 🎉</h2>
              <p className="text-white/50 text-sm mb-8 max-w-xs">
                We'll reach out soon with early access details. Get ready to reclaim your time!
              </p>
              <div className="flex gap-4 justify-center mb-8">
                {[
                  { value: '140h', label: 'Saved / year' },
                  { value: '0', label: 'Queues' },
                  { value: '∞', label: 'Fresh food' },
                ].map((stat) => (
                  <div key={stat.value} className="text-center">
                    <p className="text-emerald-400 font-black text-2xl leading-none">{stat.value}</p>
                    <p className="text-white/30 text-[10px] mt-1 uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to presentation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
