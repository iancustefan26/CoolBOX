import { motion } from 'motion/react';
import { Users, Store, TrendingUp, Target } from 'lucide-react';

export function BusinessModel() {
  return (
    <section className="h-screen flex items-center py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-y-auto">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Model de Business</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Segmente de Clienți
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Platformă dual-sided: conectăm consumatorii cu retailerii locali
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-xl h-full border-t-4 border-emerald-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">B2C</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Persoane Ocupate</h4>
              <p className="text-gray-600 mb-6">
                Consumatori urbani care valorizează timpul și caută eficiență în viața de zi cu zi.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">Profesioniști cu program încărcat</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">Familii cu copii mici</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">Persoane care evită aglomerația</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">Consumatori health-conscious</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-xl h-full border-t-4 border-cyan-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">B2B</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Retaileri Locali</h4>
              <p className="text-gray-600 mb-6">
                Magazine locale și producători care doresc să își extindă acoperirea fără investiții mari.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-gray-700">Expunere online automată</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-gray-700">Automatizare proces de vânzare</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-gray-700">Acces la clienți noi</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-gray-700">Fără costuri de infrastructură</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-10 shadow-xl border-2 border-violet-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Parteneriate Strategice</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-violet-200">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">În Discuție:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Glovo - platformă de livrare
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Mega Image - retail alimentar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Emag - logistică și tehnologie
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Carrefour - retail premium
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Palas - amplasare strategică
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-violet-200">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Strategie de Amplasare:</h4>
                <p className="text-gray-700 mb-3">
                  Inițial: 3-5 magazine mari strategice cu trafic ridicat
                </p>
                <p className="text-gray-700">
                  Expansiune: Rețea de lockere în zone rezidențiale, hub-uri de transport și centre de afaceri
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}