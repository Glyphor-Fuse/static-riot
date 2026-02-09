import React from 'react';
import StaticHeader from '@/components/StaticHeader';
import ZineHero from '@/components/ZineHero';
import GlitchCountdown from '@/components/GlitchCountdown';
import DropGrid from '@/components/DropGrid';
import ArchiveWall from '@/components/ArchiveWall';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <StaticHeader />
      
      {/* Editorial Content Flow */}
      <ZineHero />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <GlitchCountdown />
      </motion.div>

      <DropGrid />

      {/* Signature Texture Break */}
      <div className="h-64 bg-foreground relative overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 z-10">
          <h3 className="text-4xl md:text-6xl font-black italic text-background tracking-tighter uppercase leading-none">
            "We are the static in your perfect signal."
          </h3>
        </div>
      </div>

      <ArchiveWall />

      <footer className="py-12 border-t-2 border-foreground bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="font-display font-black text-2xl mb-4 tracking-widest italic">STATIC RIOT</div>
            <p className="font-mono text-xs opacity-60">© 2024 STATIC RIOT IND. ALL RIGHTS RESERVED. NO PART OF THIS TRANSMISSION MAY BE COPIED WITHOUT EXPRESS SIGNAL PERMISSION.</p>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs uppercase">
            <a href="#" className="hover:text-primary">Twitter / X</a>
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Discord</a>
          </div>
          <div className="bg-foreground text-background p-6">
            <h4 className="font-bold mb-4 uppercase text-sm">Join the frequency</h4>
            <div className="flex">
              <input type="text" placeholder="EMAIL@STATIC.COM" className="bg-transparent border-b border-background/30 flex-grow text-xs p-2 outline-none focus:border-primary transition-colors" />
              <button className="bg-primary text-white px-4 py-2 text-xs font-bold uppercase">Join</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;