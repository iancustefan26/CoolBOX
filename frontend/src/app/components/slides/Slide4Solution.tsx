import { motion } from 'motion/react';
import lockersImg from '@/assets/lockers.jpg';
import lockersPortraitImg from '@/assets/lockers-portrait.jpg';

const zones = [
  { icon: '🌾', label: 'Ambient', desc: 'Dry & pantry items', bg: 'bg-amber-500/10 border-amber-500/30', textColor: 'text-amber-600' },
  { icon: '❄️', label: 'Refrigerated', desc: '0–8°C · Fresh produce', bg: 'bg-emerald-500/10 border-emerald-500/30', textColor: 'text-emerald-600' },
  { icon: '🧊', label: 'Frozen', desc: '-18°C · Frozen goods', bg: 'bg-cyan-500/10 border-cyan-500/30', textColor: 'text-cyan-600' },
];

const steps = [
  { num: '1', icon: '📱', label: 'Order in-app', desc: 'Choose your basket online' },
  { num: '2', icon: '🔔', label: 'Get notified', desc: 'Ready at your nearest locker' },
  { num: '3', icon: '🚀', label: 'Pick up in 1 min', desc: 'No queue. No waiting. Grab & Go.' },
];

export function Slide4Solution() {
  return (
    <div className="relative w-full flex flex-col overflow-hidden" style={{ height: '100dvh', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>

      {/* Landscape image for desktop, portrait crop for mobile — both object-cover, no black bars */}
      <img
        src={lockersImg}
        alt="CoolBox smart lockers"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src={lockersPortraitImg}
        alt="CoolBox smart lockers"
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />

      {/* Content split: top + bottom with gap for image visibility */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 pt-8 pb-6">

        {/* TOP — title & zones */}
        <div className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-600 text-white text-[10px] font-semibold uppercase tracking-widest rounded-full mb-3"
          >
            📦 The Solution
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-black leading-tight text-center text-white mb-2"
            style={{ fontSize: '28px' }}
          >
            Smart Lockers with{' '}
            <span style={{ color: '#34d399' }}>Fresh</span>
            {' '}&amp;{' '}
            <span style={{ color: '#67e8f9' }}>Refrigerated</span>
            {' '}Pickup
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-xs text-center mb-4"
          >
            3 temperature zones · Placed near you · Open 24/7
          </motion.p>

          {/* Temperature zones */}
          <div className="grid grid-cols-3 gap-2 max-w-sm w-full">
            {zones.map((zone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2.5 text-center"
              >
                <div className="text-xl mb-0.5">{zone.icon}</div>
                <p className="text-[11px] font-bold leading-tight text-white">{zone.label}</p>
                <p className="text-white/60 text-[9px] mt-0.5 leading-tight">{zone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM — How It Works & steps */}
        <div className="flex flex-col items-center">
          {/* Divider */}
          <div className="flex items-center gap-3 mb-3 max-w-sm w-full">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/50 text-[10px] uppercase tracking-widest">How It Works</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Steps */}
          <div className="space-y-2 max-w-sm w-full">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2.5"
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #059669, #0891b2)' }}>
                  <span className="text-white text-[11px] font-black">{step.num}</span>
                </div>
                <span className="text-lg">{step.icon}</span>
                <div>
                  <p className="text-white text-sm font-bold leading-tight">{step.label}</p>
                  <p className="text-white/60 text-[10px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="mt-3 px-3 py-2.5 bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl text-center max-w-sm w-full"
          >
            <p className="text-emerald-300 text-xs font-semibold">
              🌿 <span className="text-emerald-200">Fresh</span> products guaranteed at perfect temperature until pickup
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
