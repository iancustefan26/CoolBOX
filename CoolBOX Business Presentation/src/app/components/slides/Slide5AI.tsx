import { motion } from 'motion/react';
import coolboxLogo from '@/assets/57f1a5e740a32fb01ef864398b1504d76ad880ac.png';

const basketItems = [
  { name: 'Salmon Fillet', sub: '250g each', price: '65.99', qty: '×4', promo: true },
  { name: 'Potatoes', sub: '1 kg bag', price: '7.99', qty: '×1', promo: false },
  { name: 'Broccoli', sub: '1 head each', price: '10.99', qty: '×4', promo: true },
  { name: 'Olive Oil', sub: '250ml bottle', price: '5.99', qty: '×1', promo: false },
  { name: 'Fresh Dill', sub: '1 bunch', price: '1.99', qty: '×1', promo: false },
  { name: 'Garlic Powder', sub: '1 jar', price: '2.99', qty: '×1', promo: false },
];

function ChatMockup() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden text-left"
      style={{
        background: '#161a17',
        border: '1px solid rgba(255,255,255,0.08)',
        fontSize: '11px',
        maxHeight: '100%',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <img src={coolboxLogo} alt="CoolBox" className="w-7 h-7 rounded-lg object-cover" style={{ boxShadow: '0 0 10px rgba(0,220,120,0.3)' }} />
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-[11px] leading-tight">Fresh <span className="font-normal" style={{ color: '#7a8c80' }}>— AI Agent</span></p>
          <p className="flex items-center gap-1 text-[9px] leading-tight" style={{ color: '#3ddc84' }}>
            <span className="w-1 h-1 rounded-full inline-block" style={{ background: '#3ddc84', boxShadow: '0 0 4px #3ddc84' }} />
            Online · Responds instantly
          </p>
        </div>
      </div>

      {/* Chat body */}
      <div className="px-2.5 py-2 flex flex-col gap-1.5" style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(61,220,132,0.035) 0%, transparent 55%)' }}>

        {/* User message */}
        <div className="flex justify-end">
          <div
            className="px-2.5 py-1.5 rounded-xl text-white text-[10px] leading-snug"
            style={{
              background: '#1e3828',
              border: '1px solid rgba(61,220,132,0.18)',
              borderBottomRightRadius: '4px',
              maxWidth: '82%',
            }}
          >
            Tonight at <strong style={{ color: '#3ddc84' }}>7:00 PM</strong> I want to cook salmon with potatoes for me, my husband and our 2 kids.
            <span className="ml-1 text-[8px]" style={{ color: '#3ddc84', opacity: 0.8 }}>✓✓</span>
          </div>
        </div>

        {/* Bot message */}
        <div className="flex gap-1.5 items-end">
          <img src={coolboxLogo} alt="" className="w-5 h-5 rounded-md object-cover flex-shrink-0" />
          <div className="flex flex-col gap-1 max-w-[88%]">
            <div
              className="px-2.5 py-1.5 rounded-xl text-white text-[10px] leading-snug"
              style={{
                background: '#1c211e',
                border: '1px solid rgba(255,255,255,0.07)',
                borderBottomLeftRadius: '4px',
              }}
            >
              Here are your fresh ingredients at the best price. Shall I place the order to your nearest locker?
            </div>

            {/* Basket card */}
            <div className="rounded-xl overflow-hidden" style={{ background: '#1c211e', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center justify-between px-2.5 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="text-white font-semibold text-[10px] flex items-center gap-1">
                  🛒 Your Basket
                </span>
                <span className="text-[8px] px-1.5 py-0.5 rounded-full" style={{ color: '#7a8c80', background: '#161a17', border: '1px solid rgba(255,255,255,0.07)' }}>
                  6 items
                </span>
              </div>

              <div className="px-1">
                {basketItems.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-1.5 px-1.5 py-1">
                      <div className="w-3 h-3 rounded flex items-center justify-center flex-shrink-0" style={{ border: '1px solid #3ddc84', background: 'rgba(61,220,132,0.1)' }}>
                        <svg width="6" height="5" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3 5.5L8 1" stroke="#3ddc84" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-[9px] font-medium leading-tight">{item.name}</p>
                        <p className="text-[8px] leading-tight" style={{ color: '#7a8c80' }}>{item.sub}</p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <span className="text-[8px]" style={{ color: '#7a8c80' }}>{item.qty}</span>
                        {item.promo && (
                          <span className="text-[6px] font-bold px-1 py-px rounded" style={{ background: '#3ddc84', color: '#0d1a10' }}>PROMO</span>
                        )}
                        <span className="text-white text-[9px] font-semibold" style={{ fontFamily: 'monospace' }}>{item.price}</span>
                      </div>
                    </div>
                    {i < basketItems.length - 1 && <div className="mx-1.5" style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />}
                  </div>
                ))}
              </div>

              <div className="px-2.5 py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[8px] font-semibold uppercase tracking-wider" style={{ color: '#7a8c80' }}>Total</span>
                  <span className="text-white font-bold text-[13px]" style={{ fontFamily: 'monospace' }}>
                    95.94 <span className="text-[9px] font-normal" style={{ color: '#7a8c80' }}>LEI</span>
                  </span>
                </div>
                <div
                  className="w-full text-center py-1.5 rounded-lg text-[10px] font-bold"
                  style={{ background: '#3ddc84', color: '#0d1a10', boxShadow: '0 4px 12px rgba(61,220,132,0.22)' }}
                >
                  Confirm Order →
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User confirm */}
        <div className="flex justify-end">
          <div
            className="px-2.5 py-1.5 rounded-xl text-white text-[10px] leading-snug"
            style={{
              background: '#1e3828',
              border: '1px solid rgba(61,220,132,0.18)',
              borderBottomRightRadius: '4px',
            }}
          >
            Yes, I confirm.
            <span className="ml-1 text-[8px]" style={{ color: '#3ddc84', opacity: 0.8 }}>✓✓</span>
          </div>
        </div>

        {/* Bot confirmation */}
        <div className="flex gap-1.5 items-end">
          <img src={coolboxLogo} alt="" className="w-5 h-5 rounded-md object-cover flex-shrink-0" />
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[10px] font-medium"
            style={{
              background: 'rgba(61,220,132,0.1)',
              border: '1px solid rgba(61,220,132,0.22)',
              color: '#3ddc84',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Order confirmed · Ready at <strong className="ml-0.5">19:00</strong> 🎉
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-1.5 px-2.5 py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: '#161a17' }}>
        <div className="flex-1 rounded-full px-3 py-1.5 text-[10px]" style={{ background: '#1c211e', border: '1px solid rgba(255,255,255,0.07)', color: '#7a8c80' }}>
          Message Fresh…
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#3ddc84', boxShadow: '0 0 8px rgba(61,220,132,0.22)' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0d1a10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Slide5AI() {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden bg-gray-950" style={{ height: '100dvh', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-sm mx-auto pt-10 pb-4 flex-1 min-h-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/20 border border-violet-400/30 rounded-full mb-2"
        >
          <span className="text-violet-300 text-[10px] font-semibold uppercase tracking-widest">🧠 AI SmartShopping</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white text-xl font-black mb-0.5"
        >
          Meet <span style={{ color: '#3ddc84' }}>Fresh</span> — Our AI Agent
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-white/40 text-[10px] mb-3"
        >
          Tell it what you want to cook — it handles the rest
        </motion.p>

        {/* Chat mockup — fills remaining space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full flex-1 min-h-0 overflow-hidden rounded-2xl"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(61,220,132,0.06)' }}
        >
          <ChatMockup />
        </motion.div>

        {/* Feature pills row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 mt-3 flex-shrink-0"
        >
          {[
            { icon: '🍝', label: 'Recipe AI' },
            { icon: '🥗', label: 'Diet Planner' },
            { icon: '🤖', label: 'Auto-Shop' },
          ].map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[9px] font-medium text-white/70"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span>{f.icon}</span>
              {f.label}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
