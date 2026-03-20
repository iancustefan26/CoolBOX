import { motion } from 'motion/react';
import { Brain, ShoppingCart, Calendar, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SmartFeatures() {
  return (
    <section className="h-screen flex items-center py-20 bg-white overflow-y-auto">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Smart Shopping</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Funcții Inteligente
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tehnologie AI pentru o experiență de cumpărături complet automatizată
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border-2 border-violet-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Rețete Inteligente
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Alegi o rețetă (ex: Carbonara) și aplicația comandă automat toate ingredientele necesare. 
                    Totul ajunge la lockerul tău, gata să gătești!
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-violet-200">
                    <p className="text-sm text-gray-600 mb-2">📝 Exemplu:</p>
                    <p className="text-sm font-medium text-gray-800">
                      "Carbonara" → 🥓 bacon + 🥚 ouă + 🧀 parmezan + 🍝 paste
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border-2 border-emerald-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Abonament Personalizat
                  </h3>
                  <p className="text-gray-700">
                    Definește produsele recurente pe care le cumperi mereu (lapte, pâine, ouă) și primește-le 
                    automat în locker la intervalul stabilit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Frigider Inteligent cu AI
                  </h3>
                  <p className="text-gray-700">
                    Sistemul învață preferințele tale, monitorizează ce lipsește și recomandă produse pentru 
                    o nutriție sănătoasă. Comenzile se fac automat!
                  </p>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719464521902-4dc9595b182d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwcGhvbmUlMjBhcHB8ZW58MXx8fHwxNzczODQ4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Smart phone app technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Aplicație Intuitivă</h3>
                <p className="text-violet-100">Control total din palmă cu AI integrat</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-12 border-2 border-emerald-200"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Producători Locali</h3>
              <p className="text-lg text-gray-600">Susținem economia locală</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg mb-4">
            Creăm o rețea de retailing pentru producători locali - de la ferme de ouă din Bârlad la 
            legume proaspete din gospodării. Produse fresh, livrate direct în lockerul tău.
          </p>
          <div className="bg-white rounded-xl p-6 border border-emerald-300">
            <p className="text-emerald-700 font-semibold">
              🌱 Standarde de calitate inspirate din Japonia pentru produse proaspete premium
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}