import { motion } from 'motion/react';
import { Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Problem() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Problema</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Timp Pierdut Ireversibil
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oamenii pierd în medie <span className="font-bold text-red-600">140 de ore pe an</span> la cumpărături alimentare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646806950396-5dbe86c336cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBzdHJlc3MlMjBzdXBlcm1hcmtldHxlbnwxfHx8fDE3NzM4NDgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Grocery shopping stress"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    140 ore / an pierdute
                  </h3>
                  <p className="text-gray-700">
                    Calculat la 4 vizite pe săptămână, fiecare persoană pierde aproape 6 zile întregi pe an doar pentru cumpărături alimentare.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Trafic & Cozi Interminabile
                  </h3>
                  <p className="text-gray-700">
                    Timp petrecut în trafic, căutare parcare, așteptare la coadă și navigare prin magazin.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Stres Constant
                  </h3>
                  <p className="text-gray-700">
                    Planificare dificilă, timp luat din weekend sau după muncă, energie consumată inutil.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 px-8 py-6 rounded-2xl">
            <p className="text-3xl font-bold text-gray-900">
              Și dacă ai putea să îți recapeți aceste 140 de ore?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}