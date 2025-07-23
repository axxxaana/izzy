import React from 'react';
import { motion } from 'framer-motion';

const COLORS = {
  strategy: '#4F8CFF', // playful blue
  voice: '#4FD1C5',    // playful teal
  visibility: '#FFB86B', // playful orange
  branding: '#FF5CA7', // playful pink
};

const CIRCLE_RADIUS = 60;
const CENTER_RADIUS = 44;
const ORBIT_RADIUS = 110;
const SVG_SIZE = 340;
const CENTER = SVG_SIZE / 2;

const LABELS = [
  { key: 'voice', label: 'Voice', color: COLORS.voice, desc: 'Tone & communication' },
  { key: 'strategy', label: 'Strategy', color: COLORS.strategy, desc: 'Core positioning & messaging' },
  { key: 'visibility', label: 'Visibility', color: COLORS.visibility, desc: 'Channels & reach' },
];
const ANGLES = [210, 90, 330];

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

// Wavy connector path (for playfulness)
function wavyPath(from: {x:number, y:number}, to: {x:number, y:number}, waveHeight = 18, waves = 2) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx*dx + dy*dy);
  const angle = Math.atan2(dy, dx);
  let path = `M${from.x},${from.y}`;
  for (let i = 1; i <= waves * 2; i++) {
    const t = i / (waves * 2);
    const x = from.x + dx * t;
    const y = from.y + dy * t + Math.sin(t * Math.PI * waves) * waveHeight * (i % 2 === 0 ? 1 : -1);
    path += ` L${x},${y}`;
  }
  path += ` L${to.x},${to.y}`;
  return path;
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.7, y: 30 },
  visible: (i: number) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: 0.2 + i * 0.18, duration: 0.7, type: 'spring', bounce: 0.5 } }),
};

export const BrandingSystemVisual: React.FC = () => {
  const positions = ANGLES.map(angle => polarToCartesian(CENTER, CENTER, ORBIT_RADIUS, angle));

  return (
    <div className="w-full flex flex-col items-center justify-center py-16" style={{ background: '#fff' }}>
      <div className="mb-8 text-center">
        <h2 style={{ fontFamily: 'Montserrat, Helvetica', fontWeight: 800, fontSize: 34, color: '#18181B', letterSpacing: -1, marginBottom: 8, borderRadius: 12 }}>Branding as a System</h2>
        <p style={{ fontFamily: 'Inter, Helvetica', fontSize: 18, color: '#444', maxWidth: 420, margin: '0 auto', borderRadius: 8 }}>
          Branding is the playful result of <span style={{ color: COLORS.strategy, fontWeight: 700 }}>Strategy</span>, <span style={{ color: COLORS.voice, fontWeight: 700 }}>Voice</span>, and <span style={{ color: COLORS.visibility, fontWeight: 700 }}>Visibility</span> — all deeply connected.
        </p>
      </div>
      <div style={{ width: SVG_SIZE, height: SVG_SIZE, position: 'relative', margin: '0 auto' }}>
        {/* SVG wavy connectors */}
        <svg width={SVG_SIZE} height={SVG_SIZE} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          {positions.map((pos, i) => (
            <motion.path
              key={i}
              d={wavyPath(pos, { x: CENTER, y: CENTER }, 18, 2)}
              stroke={LABELS[i].color}
              strokeWidth={4}
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.4 + i * 0.18, ease: 'easeInOut' }}
              style={{ filter: `drop-shadow(0 0 4px ${LABELS[i].color}33)` }}
            />
          ))}
        </svg>
        {/* Pillar Circles */}
        {positions.map((pos, i) => (
          <motion.div
            key={LABELS[i].key}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.13, zIndex: 10 }}
            style={{
              position: 'absolute',
              left: pos.x - CIRCLE_RADIUS,
              top: pos.y - CIRCLE_RADIUS,
              width: CIRCLE_RADIUS * 2,
              height: CIRCLE_RADIUS * 2,
              borderRadius: '50%',
              background: LABELS[i].color,
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Montserrat, Helvetica',
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: 0.5,
              cursor: 'pointer',
              zIndex: 2,
              boxShadow: `0 2px 16px 0 ${LABELS[i].color}22`,
              transition: 'box-shadow 0.2s',
              outline: 'none',
            }}
          >
            <span style={{ fontWeight: 800, fontSize: 20, borderRadius: 8, marginBottom: 2 }}>{LABELS[i].label}</span>
            <span style={{ fontWeight: 500, fontSize: 13, opacity: 0.85, borderRadius: 6, textAlign: 'center', lineHeight: 1.2 }}>{LABELS[i].desc}</span>
          </motion.div>
        ))}
        {/* Center Branding Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: [1, 1.12, 1], boxShadow: [
            '0 0 0 0 #FF5CA733',
            '0 0 24px 8px #FF5CA744',
            '0 0 0 0 #FF5CA733',
          ] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: CENTER - CENTER_RADIUS,
            top: CENTER - CENTER_RADIUS,
            width: CENTER_RADIUS * 2,
            height: CENTER_RADIUS * 2,
            borderRadius: '50%',
            background: COLORS.branding,
            border: `4px solid #fff`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
            fontFamily: 'Montserrat, Helvetica',
            fontWeight: 900,
            fontSize: 19,
            color: '#fff',
            letterSpacing: 1,
            textTransform: 'uppercase',
            boxSizing: 'border-box',
            textAlign: 'center',
            userSelect: 'none',
            outline: 'none',
            boxShadow: '0 2px 16px 0 #FF5CA722',
          }}
        >
          Branding
        </motion.div>
      </div>
    </div>
  );
};