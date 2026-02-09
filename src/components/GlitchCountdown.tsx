import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlitchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, mins: 42, secs: 18 });
  const [distort, setDistort] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        return prev;
      });
      // Randomly trigger 'glitch' intensity
      setDistort(Math.random() > 0.8 ? Math.random() * 5 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-12 border-y-4 border-foreground overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
          filter: `contrast(${100 + distort * 10}%)`
        }}
      />
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-primary">Next Transmission / Secure Connection</span>
        <div className="flex gap-4 md:gap-12 items-baseline">
          {Object.entries(timeLeft).map(([label, value], i) => (
            <div key={label} className="flex flex-col items-center">
              <motion.span 
                animate={{ 
                  x: [0, distort, -distort, 0],
                  skew: [0, distort * 2, -distort * 2, 0]
                }}
                className="text-6xl md:text-9xl font-black font-display leading-none tracking-tighter"
              >
                {value.toString().padStart(2, '0')}
              </motion.span>
              <span className="text-[10px] font-mono uppercase mt-2 opacity-50">{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Glitch Overlay Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="h-[2px] w-full bg-primary/20 absolute top-1/4 animate-scanline" />
        <div className="h-[1px] w-full bg-primary/10 absolute top-3/4 animate-scanline [animation-delay:2s]" />
      </div>
    </div>
  );
};

export default GlitchCountdown;