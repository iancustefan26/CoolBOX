import { motion } from 'motion/react';

const b2cPoints = [
  { icon: '👩‍💼', text: 'Busy professionals' },
  { icon: '👨‍👩‍👧', text: 'Families saving time' },
  { icon: '🏃', text: 'Health-conscious people' },
  { icon: '📱', text: 'Digital-native consumers' },
];

const b2bPoints = [
  { icon: '🏪', text: 'Local retailers' },
  { icon: '🛒', text: 'Big supermarkets' },
  { icon: '🌾', text: 'Organic producers' },
  { icon: '🏢', text: 'Office building owners' },
];

export function Slide6Business() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800" style={{ height: '100dvh', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 flex flex-col items-center px-5 w-full max-w-sm mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-4"
        >
          <span className="text-white/80 text-[10px] font-semibold uppercase tracking-widest">📊 Business Model</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-2xl font-black text-center mb-1"
        >
          Who We Serve
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/40 text-xs text-center mb-6"
        >
          Dual-sided platform connecting consumers with retailers
        </motion.p>

        {/* B2C Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-5 mb-3"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-sm">B2C</span>
            </div>
            <div>
              <p className="text-white font-bold text-base">Consumers</p>
              <p className="text-emerald-400/70 text-[10px]">Fresh food at your fingertips</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {b2cPoints.map((p, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1.5">
                <span className="text-base">{p.icon}</span>
                <span className="text-white/70 text-[10px] leading-tight">{p.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* B2B Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-sm">B2B</span>
            </div>
            <div>
              <p className="text-white font-bold text-base">Partners</p>
              <p className="text-cyan-400/70 text-[10px]">Grow your reach, zero infrastructure cost</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {b2bPoints.map((p, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1.5">
                <span className="text-base">{p.icon}</span>
                <span className="text-white/70 text-[10px] leading-tight">{p.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
