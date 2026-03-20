import { motion } from 'motion/react';
import cofounder1 from '@/assets/60caa1e94f482ea949eead37298dcbe2bd415296.png';
import cofounder2 from '@/assets/e9f76eacae295261413b0017506eba0a781ec97a.png';
import coolboxLogo from '@/assets/57f1a5e740a32fb01ef864398b1504d76ad880ac.png';

export function Slide1Hero() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ height: '100dvh', paddingBottom: 'env(safe-area-inset-bottom, 0px)', background: 'linear-gradient(135deg, #0a2540 0%, #0d3d2f 40%, #0a4a3a 70%, #0a3352 100%)' }}>
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'rgba(0, 200, 100, 0.15)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'rgba(0, 150, 255, 0.12)' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(0, 220, 120, 0.06)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Co-founder photos in top corners */}
      <div className="absolute top-6 left-0 right-0 flex justify-between px-5 z-10">
        {/* Left: Scoban Alin-Gabriel — using cofounder2 image (names were inverted) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 shadow-lg"
            style={{ borderColor: '#00d084', boxShadow: '0 4px 20px rgba(0,208,132,0.3)' }}>
            <img
              src={cofounder2}
              alt="Scoban Alin-Gabriel"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-center">
            <p className="text-white text-[10px] font-semibold leading-tight">Scoban Alin-Gabriel</p>
            <p className="text-[10px] leading-tight" style={{ color: '#00d084' }}>Co-Founder</p>
          </div>
        </motion.div>

        {/* Right: Iancu Stefan-Teodor — using cofounder1 image (names were inverted) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 shadow-lg"
            style={{ borderColor: '#00aaff', boxShadow: '0 4px 20px rgba(0,170,255,0.3)' }}>
            <img
              src={cofounder1}
              alt="Iancu Stefan-Teodor"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-center">
            <p className="text-white text-[10px] font-semibold leading-tight">Iancu Stefan-Teodor</p>
            <p className="text-[10px] leading-tight" style={{ color: '#00aaff' }}>Co-Founder</p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#00d084' }}>
            ✦ The New Era of Grocery Shopping
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-4"
        >
          <img
            src={coolboxLogo}
            alt="CoolBOX"
            className="w-28 h-28 object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-white font-black mb-1"
          style={{ fontSize: '26px', letterSpacing: '-0.02em' }}
        >
          Grab &amp; Go
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mb-6"
          style={{ color: '#00d084', fontSize: '18px', fontWeight: 700 }}
        >
          Fresh Groceries
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mb-7 max-w-xs"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: '1.6' }}
        >
          AI-empowered smart lockers for fresh groceries — order online, pick up instantly.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex gap-3 mb-8"
        >
          {[
            { icon: '⚡', label: 'Fast', color: '#fbbf24' },
            { icon: '🌿', label: 'Fresh', color: '#00d084' },
            { icon: '✨', label: 'Effortless', color: '#a78bfa' },
            { icon: '🤖', label: 'AI', color: '#00aaff' },
          ].map((b) => (
            <div key={b.label}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="text-lg">{b.icon}</span>
              <span className="text-[10px] font-medium" style={{ color: b.color }}>{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Swipe hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.3)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
          <span className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>Swipe up</span>
        </motion.div>
      </div>
    </div>
  );
}
