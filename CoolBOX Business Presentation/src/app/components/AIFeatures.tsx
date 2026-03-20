import { motion } from 'motion/react';
import { Brain, Thermometer, Shield, Zap, TrendingUp, Bell } from 'lucide-react';

export function AIFeatures() {
  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Învățare Automată',
      description: 'AI învață preferințele tale și optimizează comenzile automat',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
    },
    {
      icon: Thermometer,
      title: 'Control Temperatura AI',
      description: 'Monitorizare inteligentă și ajustare automată a temperaturii',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Shield,
      title: 'Predicție Prospeție',
      description: 'AI prezice și asigură prospețimea maximă a produselor',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: TrendingUp,
      title: 'Optimizare Inventar',
      description: 'Gestionare inteligentă a stocurilor bazată pe cerere',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Bell,
      title: 'Notificări Predictive',
      description: 'AI estimează când vei avea nevoie de produse și te anunță',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Zap,
      title: 'Rutare Inteligentă',
      description: 'Selectează automat lockerul optimal pe traseul tău',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 via-violet-900 to-purple-900 text-white overflow-y-auto">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Tehnologie AI</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            AI-Enhanced Lockers
          </h2>
          <p className="text-xl text-violet-200 max-w-2xl mx-auto">
            Inteligență artificială avansată pentru o experiență de cumpărături complet automatizată
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-6`}>
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                <p className="text-violet-200">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-10 border-2 border-emerald-400/30">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-gray-900" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Sistem Neural Avansat</h3>
                <p className="text-lg text-violet-200">Machine Learning & Deep Learning pentru optimizare continuă</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-3">🎯 Personalizare Avansată</h4>
                <p className="text-violet-200 text-sm">
                  AI analizează comportamentul de cumpărare și creează un profil personalizat pentru fiecare utilizator
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-3">⚡ Eficiență Energetică</h4>
                <p className="text-violet-200 text-sm">
                  Sistemul AI optimizează consumul energetic bazat pe pattern-uri de utilizare și condițiile meteo
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
