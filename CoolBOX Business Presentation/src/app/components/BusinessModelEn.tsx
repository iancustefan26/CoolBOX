import { motion } from 'motion/react';
import { Users, Store, TrendingUp, Target } from 'lucide-react';

export function BusinessModelEn() {
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
            <span className="text-sm font-medium">Business Model</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Customer Segments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dual-sided platform: connecting consumers with local retailers
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
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Busy People</h4>
              <p className="text-gray-600 mb-6">
                Urban consumers who value time and seek efficiency in daily life.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">Professionals with busy schedules</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">Families with young children</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">People avoiding crowds</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">Health-conscious consumers</span>
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
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Local Retailers</h4>
              <p className="text-gray-600 mb-6">
                Local stores and producers wanting to expand reach without major investments.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-gray-700">Automated online exposure</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-gray-700">Sales process automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-gray-700">Access to new customers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-gray-700">No infrastructure costs</span>
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
              <h3 className="text-3xl font-bold text-gray-900">Strategic Partnerships</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-violet-200">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">In Discussion:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Glovo - delivery platform
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Mega Image - food retail
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Emag - logistics & technology
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Carrefour - premium retail
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-600">•</span> Palas - strategic location
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-violet-200">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Placement Strategy:</h4>
                <p className="text-gray-700 mb-3">
                  Initially: 3-5 major strategic stores with high traffic
                </p>
                <p className="text-gray-700">
                  Expansion: Locker network in residential areas, transport hubs and business centers
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
