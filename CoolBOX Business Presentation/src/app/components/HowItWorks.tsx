import { motion } from 'motion/react';
import { Smartphone, ShoppingBag, MapPin, Check } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      title: 'Comandă Online',
      description: 'Selectează produsele dorite din aplicație - fresh, congelate sau ambient',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: MapPin,
      title: 'Alege Lockerul',
      description: 'Selectează lockerul cel mai convenabil pentru tine - în drum spre casă sau birou',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: ShoppingBag,
      title: 'Livrare Automată',
      description: 'Comanda ta este livrată și stocată la temperatura corectă în locker',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Check,
      title: 'Ridică Rapid',
      description: 'Primești notificare și ridici în doar câteva secunde, când îți convine',
      color: 'from-amber-500 to-orange-500',
    },
  ];

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full mb-6">
            <span className="text-sm font-medium">Cum Funcționează</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Simplu, Rapid, Eficient
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Doar 4 pași între tine și economisirea a 140 de ore pe an
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-center gap-8">
                {/* Step number and line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-200 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-bold text-gray-300">0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-100 to-cyan-100 px-12 py-8 rounded-3xl">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              🚀 Durată medie: Sub 2 minute de la notificare la ridicare!
            </p>
            <p className="text-lg text-gray-600">
              Comparat cu 2-3 ore pentru o vizită clasică la supermarket
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}