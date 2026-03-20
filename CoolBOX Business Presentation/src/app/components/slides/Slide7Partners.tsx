import { motion } from 'motion/react';
import fiiLogo from '@/assets/logo-fii-150x150 (1).png';
import optimismLogo from '@/assets/logo Optimism oriz vector_oriz white.png';
import eggImg from '@/assets/egg.png';

export function Slide7Partners() {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ height: '100dvh', background: 'linear-gradient(135deg, #0a2540 0%, #0d3d2f 40%, #0a4a3a 70%, #0a3352 100%)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'rgba(0, 208, 132, 0.12)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'rgba(0, 170, 255, 0.1)' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-5 w-full max-w-sm mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#00d084' }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#00d084' }}>
            🤝 Our Partners
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white text-2xl font-black text-center mb-1"
        >
          Who Believes in Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-xs text-center mb-5"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Backed by innovators, trusted by industry leaders
        </motion.p>

        {/* Partner cards: FII & Optimism */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full flex gap-3 mb-3"
        >
          {/* FII Iași */}
          <div
            className="flex-1 flex flex-col items-center justify-center rounded-2xl p-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <img src={fiiLogo} alt="FII Iași" className="w-16 h-16 object-contain mb-2 rounded-xl" />
            <p className="text-white font-bold text-sm text-center">Facultatea de Informatică Iași</p>
            <p className="text-[9px] text-center mt-0.5 leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Support & website hosting
            </p>
          </div>

          {/* Optimism — Andi Mironescu */}
          <div
            className="flex-1 flex flex-col items-center justify-center rounded-2xl p-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <img src={optimismLogo} alt="Optimism" className="h-14 object-contain mb-2" />
            <p className="text-white font-bold text-sm text-center">Optimism</p>
            <p className="text-[9px] text-center mt-0.5 leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Logo design by{' '}
              <span className="font-semibold" style={{ color: '#00d084' }}>Andi Mironescu</span>
            </p>
          </div>
        </motion.div>

        {/* Mystery success story card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="w-full rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,208,132,0.15), rgba(0,170,255,0.1))',
            border: '1px solid rgba(0,208,132,0.25)',
          }}
        >
          {/* Subtle glow inside the card */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none"
            style={{ background: 'rgba(0,208,132,0.1)' }} />

          <div className="flex items-start gap-4">
            {/* Egg image with mystery overlay */}
            <div className="relative flex-shrink-0">
              <img src={eggImg} alt="" className="w-16 h-16 object-cover rounded-xl" />
              <div className="absolute inset-0 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(1px)' }}>
                <span className="text-2xl">🔒</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(0,208,132,0.2)', color: '#00d084' }}>
                  🥚 First Success Story
                </span>
              </div>
              <p className="text-white font-bold text-sm leading-snug mb-1">
                A Major Egg Producer
              </p>
              <p className="text-[10px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                One of Moldova's <span style={{ color: '#00d084' }} className="font-semibold">largest egg producers</span> is
                already eager to partner with CoolBOX. Identity under NDA — full reveal coming soon.
              </p>
            </div>
          </div>

          {/* Teaser footer */}
          <motion.div
            className="mt-3 pt-3 flex items-center justify-center gap-2"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Stay tuned for the big reveal ✨
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-5 text-[11px] text-center"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Building trust, one partnership at a time
        </motion.p>
      </div>
    </div>
  );
}
