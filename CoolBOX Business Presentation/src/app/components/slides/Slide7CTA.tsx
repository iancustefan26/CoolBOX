import { motion } from 'motion/react';
import coolboxLogo from '@/assets/57f1a5e740a32fb01ef864398b1504d76ad880ac.png';

export function Slide8CTA() {
  const handleFormRedirect = () => {
    window.location.href = '/coolbox/form';
  };

  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a2540 0%, #0d3d2f 40%, #0a4a3a 70%, #0a3352 100%)' }}>
      {/* Background animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${200 + i * 120}px`,
              height: `${200 + i * 120}px`,
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              border: '1px solid rgba(0, 208, 132, 0.1)',
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'rgba(0, 208, 132, 0.18)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'rgba(0, 170, 255, 0.15)' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-sm mx-auto">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#00d084' }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#00d084' }}>
            Help Us Shape the Future
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-5"
        >
          <img
            src={coolboxLogo}
            alt="CoolBOX"
            className="w-24 h-24 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Polite ask */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white font-bold mb-2"
          style={{ fontSize: '20px' }}
        >
          Could you spare 1 minute?
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-4 max-w-xs"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: '1.65' }}
        >
          We'd love to hear your honest opinion about CoolBOX. Your feedback helps us understand what real people think and shapes how we build the product.
        </motion.p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex gap-5 justify-center mb-6 px-4 py-3 rounded-2xl w-full"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {[
            { icon: '📊', label: 'Statistics', desc: 'See community results' },
            { icon: '⏱️', label: '~1 minute', desc: 'Quick & easy' },
            { icon: '💬', label: 'Your voice', desc: 'Shapes our product' },
          ].map((item) => (
            <div key={item.label} className="text-center flex-1">
              <div className="text-xl mb-0.5">{item.icon}</div>
              <p className="font-bold text-[11px]" style={{ color: '#00d084' }}>{item.label}</p>
              <p className="text-[9px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleFormRedirect}
          className="w-full py-4 text-white font-black rounded-2xl shadow-xl mb-3 text-base"
          style={{
            background: 'linear-gradient(135deg, #00d084, #00aaff)',
            boxShadow: '0 8px 32px rgba(0, 208, 132, 0.35)',
          }}
        >
          📋 Fill in the 1-Minute Form
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
          className="text-[11px]"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          Takes only 60 seconds · No registration required · Anonymous
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="mt-3 text-[11px]"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          Thank you for being part of our journey 🙏
        </motion.p>
      </div>
    </div>
  );
}
