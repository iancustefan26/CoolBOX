import { motion } from 'motion/react';
import { Rocket, Lightbulb, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Vision() {
  return (
    <section className="h-screen flex items-center py-20 bg-gradient-to-br from-emerald-900 via-cyan-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Viziune</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            De la Idee la Revoluție
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Transformăm modul în care oamenii fac cumpărături alimentare în România
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757332051150-a5b3c4510af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NzM4NDgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh vegetables healthy food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-400 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Focus pe Idee</h3>
                  <p className="text-emerald-100">
                    În această etapă, ne concentrăm pe validarea conceptului și pitch-ul ideii, nu pe implementarea tehnică completă.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-cyan-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mentorat & Dezvoltare</h3>
                  <p className="text-emerald-100">
                    După prezentare și feedback de la mentori, vom îmbunătăți și dezvolta conceptul în direcția optimă.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-violet-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Impact pe Termen Lung</h3>
                  <p className="text-emerald-100">
                    Viziunea: o rețea națională de lockere CoolBOX care economisește milioane de ore pentru români.
                  </p>
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
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-white/30">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-emerald-900" />
            </div>
            <h3 className="text-4xl font-bold mb-4">Suntem Gata Să Începem</h3>
            <p className="text-xl text-emerald-100 mb-6">
              CoolBOX reprezintă viitorul cumpărăturilor alimentare în România - eficient, fresh și fără stres.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="bg-white/20 px-6 py-3 rounded-full">
                🎯 Problemă Reală
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                💡 Soluție Inovatoare
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                📈 Piață Mare
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                🚀 Scalabil
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}