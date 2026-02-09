import React from 'react';
import { Menu, Search, User } from 'lucide-react';

const StaticHeader = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-foreground">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Menu className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
          <div className="hidden md:flex gap-6 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Drops</a>
            <a href="#" className="hover:text-primary transition-colors">Lookbook</a>
            <a href="#" className="hover:text-primary transition-colors">Archive</a>
          </div>
        </div>

        <div className="font-display font-black text-2xl tracking-[0.2em] italic">
          STATIC<span className="text-primary">RIOT</span>
        </div>

        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-primary" />
          <div className="relative cursor-pointer group">
            <User className="w-5 h-5 group-hover:text-primary" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
      {/* Visual Ticker */}
      <div className="bg-foreground text-background text-[9px] font-mono py-1 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          SYSTEM_ONLINE // CONNECTING TO SERVER... DROP #004 ACTIVE // LIMITED STOCK // NO REFUNDS // WORLDWIDE SHIPPING // 
          SYSTEM_ONLINE // CONNECTING TO SERVER... DROP #004 ACTIVE // LIMITED STOCK // NO REFUNDS // WORLDWIDE SHIPPING //
        </div>
      </div>
    </nav>
  );
};

export default StaticHeader;