import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const activities = [
  { icon: '✈️', title: 'Travel a city in Europe', time: '140h = 1 long weekend trip' },
  { icon: '🎬', title: 'Watch 46 movies', time: '140h = one full cinema marathon' },
  { icon: '😴', title: '17 entire sleep nights', time: '140h = deep, restful recovery' },
  { icon: '🏃', title: 'Train for a marathon', time: '140h = 3.5 months of running' },
  { icon: '📚', title: 'Read 28 books', time: '140h = 1 book every 5 hours' },
  { icon: '👨‍👩‍👧', title: 'Quality family time', time: '140h = priceless moments' },
];

export function Slide3Reclaim() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-emerald-950" style={{ height: '100dvh', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760127996294-a6c31b163b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBmYW1pbHklMjBvdXRkb29yJTIwYWN0aXZpdGllcyUyMGxlaXN1cmUlMjB0aW1lfGVufDF8fHx8MTc3MzkzNDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Leisure activities"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 to-emerald-950" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-sm mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-400/20 border border-emerald-400/30 rounded-full mb-4"
        >
          <span className="text-emerald-300 text-[10px] font-semibold uppercase tracking-widest">💡 Reclaim Your Time</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-2xl font-black mb-1"
        >
          What Could You Do With
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5"
        >
          <span className="text-[52px] font-black text-emerald-400 leading-none">140 hours</span>
          <span className="text-white text-2xl font-black"> ?</span>
        </motion.div>

        {/* Activity list */}
        <div className="w-full space-y-2">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-3 bg-white/5 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-left"
            >
              <span className="text-xl flex-shrink-0">{activity.icon}</span>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">{activity.title}</p>
                <p className="text-emerald-400/70 text-[10px] mt-0.5">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-emerald-300 text-sm font-semibold"
        >
          CoolBOX gives you these hours back. ↓
        </motion.p>
      </div>
    </div>
  );
}
