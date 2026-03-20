import { motion } from 'motion/react';
import { Brain, Thermometer, Shield, Zap, TrendingUp, Bell } from 'lucide-react';

export function AIFeaturesEn() {
  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'AI learns your preferences and optimizes orders automatically',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
    },
    {
      icon: Thermometer,
      title: 'AI Temperature Control',
      description: 'Intelligent monitoring and automatic temperature adjustment',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Shield,
      title: 'Freshness Prediction',
      description: 'AI predicts and ensures maximum product freshness',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: TrendingUp,
      title: 'Inventory Optimization',
      description: 'Smart stock management based on demand patterns',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Bell,
      title: 'Predictive Notifications',
      description: 'AI estimates when you\'ll need products and notifies you',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Zap,
      title: 'Smart Routing',
      description: 'Automatically selects the optimal locker on your route',
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
            <span className="text-sm font-medium">AI Technology</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            AI-Enhanced Lockers
          </h2>
          <p className="text-xl text-violet-200 max-w-2xl mx-auto">
            Advanced artificial intelligence for a fully automated shopping experience
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
                <h3 className="text-3xl font-bold mb-2">Advanced Neural System</h3>
                <p className="text-lg text-violet-200">Machine Learning & Deep Learning for continuous optimization</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-3">🎯 Advanced Personalization</h4>
                <p className="text-violet-200 text-sm">
                  AI analyzes shopping behavior and creates a personalized profile for each user
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-3">⚡ Energy Efficiency</h4>
                <p className="text-violet-200 text-sm">
                  AI system optimizes energy consumption based on usage patterns and weather conditions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
