import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide2Problem() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-gray-950" style={{ height: '100dvh', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1584614207146-a64524f5806a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXN5JTIwc3VwZXJtYXJrZXQlMjBxdWV1ZSUyMHN0cmVzcyUyMHBlb3BsZSUyMHdhaXRpbmd8ZW58MXx8fHwxNzczOTM0NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Supermarket queue"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/70 to-gray-950" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-sm mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 border border-red-500/30 rounded-full mb-6"
        >
          <span className="text-red-400 text-[10px] font-semibold uppercase tracking-widest">⚠ The Problem</span>
        </motion.div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <div className="text-[90px] font-black text-red-400 leading-none tracking-tighter">At least 140</div>
          <div className="text-white/70 text-lg font-medium -mt-2">hours lost per year</div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/50 text-sm mb-8"
        >
          That's <span className="text-white font-semibold">4 grocery trips/week</span> × 35 min each = nearly <span className="text-red-400 font-semibold">6 full days</span> every year.
        </motion.p>

        {/* Pain points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full space-y-3"
        >
          {[
            { icon: '🚗', text: 'Traffic & parking nightmares' },
            { icon: '🛒', text: 'Time spent finding your groceries' },
            { icon: '🧍', text: 'Endless checkout queues' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-white/80 text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 text-white/40 text-xs"
        >
          Swipe up to see what you could do instead ↓
        </motion.p>
      </div>
    </div>
  );
}
