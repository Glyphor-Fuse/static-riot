import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const ZineHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 bg-primary text-primary-foreground font-mono text-xs mb-6 self-start"
          >
            ISSUE #004: SYSTEM COLLAPSE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[120px] font-black font-display leading-[0.85] tracking-tighter uppercase mb-8"
          >
            STATIC<br />
            <span className="text-primary italic">RIOT</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md text-lg md:text-xl font-medium leading-tight mb-10 border-l-4 border-foreground pl-6"
          >
            High-velocity streetwear for the digitally disenfranchised. No restocks. No apologies. Just the noise.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest flex items-center gap-2 overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">Enter Drop Grid</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-primary translate-y-full transition-transform group-hover:translate-y-0" />
            </button>
            <button className="px-8 py-4 border-2 border-foreground font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
              Read Lookbook
            </button>
          </motion.div>
        </div>

        {/* Right Side: Distorted Imagery */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          >
            <img 
              src="/images/hero-streetwear.png" 
              alt="Model in static riot gear" 
              className="w-full h-full object-cover border-4 border-foreground"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary flex items-center justify-center p-4 rotate-12">
              <Zap className="text-white w-12 h-12" />
            </div>
            <div className="absolute bottom-4 left-4 bg-background px-4 py-2 border-2 border-foreground font-mono text-sm">
              LATENCY: 4.2ms
            </div>
          </motion.div>
          {/* Decorative Xerox Elements */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-foreground/20 -z-10 bg-dotted-spacing-4 bg-dotted-foreground/10" />
        </div>
      </div>

      {/* Background Static Grain */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
    </section>
  );
};

export default ZineHero;