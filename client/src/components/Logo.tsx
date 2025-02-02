import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

export function Logo({ className, animate = true }: LogoProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      className={cn("w-[52px] h-[52px]", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
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

      <g transform="translate(26,26)" filter="url(#neonGlow)">
        {['0', '45', '90', '-45'].map((angle, i) => (
          <motion.ellipse
            key={i}
            cx="0"
            cy="0"
            rx="15.6"
            ry="5.2"
            transform={`rotate(${angle})`}
            stroke="#00ffff"
            strokeWidth="0.35"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          />
        ))}
      </g>
      
      <motion.circle
        cx="26"
        cy="26"
        r="2.6"
        fill="url(#nucleusGradient)"
        filter="url(#neonGlow)"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
