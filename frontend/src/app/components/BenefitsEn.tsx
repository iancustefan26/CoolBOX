import { motion } from 'motion/react';
import { Clock, Heart, Sparkles, Users, Dumbbell, Plane } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BenefitsEn() {
  const timeSavings = [
    {
      icon: Clock,
      value: '140 hours',
      description: 'saved per year',
      color: 'text-emerald-600',
    },
    {
      icon: Dumbbell,
      value: '100 gym visits',
      description: 'in the time saved',
      color: 'text-violet-600',
    },
    {
      icon: Plane,
      value: '6 long weekends',
      description: 'gained back',
      color: 'text-cyan-600',
    },
    {
      icon: Users,
      value: '100 outings',
      description: 'with family in the park',
      color: 'text-amber-600',
    },
  ];

  return (
    <section className="h-screen flex items-center py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 overflow-y-auto">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-full mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Benefits</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            What Do You Gain With CoolBOX?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Precious time for the things that truly matter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {timeSavings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
              </div>
              <div className={`text-4xl font-bold mb-2 ${item.color}`}>
                {item.value}
              </div>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766818436606-5cfed3aa1191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGZyZWUlMjB0aW1lfGVufDF8fHx8MTc3Mzg0ODIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy family free time"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-500">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    FRESH Products
                  </h3>
                  <p className="text-gray-700">
                    Fresh food from local producers and retailers, maintained at optimal temperature.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-violet-500">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    FAST Solution
                  </h3>
                  <p className="text-gray-700">
                    Pick up groceries in seconds, exactly when it suits you, no queues or traffic.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-cyan-500">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    EFFORTLESS
                  </h3>
                  <p className="text-gray-700">
                    Eliminate the stress of planning, traffic and queues. More time for what you love.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
