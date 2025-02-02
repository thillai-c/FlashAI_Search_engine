import { motion } from 'framer-motion';

export function Logo({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      className={className}
    >
      <defs>
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="nucleusGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#002f2f" stopOpacity="1" />
        </radialGradient>
      </defs>

      <g transform="translate(36,36)" filter="url(#neonGlow)">
        {[0, 45, 90, -45].map((angle, index) => (
          <motion.ellipse
            key={index}
            cx="0"
            cy="0"
            rx="22"
            ry="7"
            transform={`rotate(${angle})`}
            stroke="#00ffff"
            strokeWidth="0.6"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: index * 0.3 }}
          />
        ))}
      </g>

      <motion.circle
        cx="36"
        cy="36"
        r="4"
        fill="url(#nucleusGradient)"
        filter="url(#neonGlow)"
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
