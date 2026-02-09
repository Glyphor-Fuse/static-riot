import React from 'react';

const ArchiveWall = () => {
  const archives = [
    { title: 'GLITCH 001', date: 'DEC 23', img: '/images/archive-1.png' },
    { title: 'RIOT CORE', date: 'NOV 23', img: '/images/archive-2.png' },
    { title: 'STATIC WAVE', date: 'OCT 23', img: '/images/archive-3.png' },
    { title: 'VOICE BOX', date: 'SEP 23', img: '/images/archive-4.png' },
  ];

  return (
    <section className="py-24 border-t-4 border-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black font-display uppercase mb-12 flex items-center gap-4">
          <span className="w-8 h-8 bg-primary block" />
          The Archive
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {archives.map((item, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group border border-foreground/10">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover filter grayscale sepia(20%) opacity-40 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-transparent transition-colors flex flex-col items-center justify-center text-center p-4">
                <span className="font-mono text-[10px] uppercase mb-1 opacity-70">{item.date}</span>
                <span className="font-display font-black uppercase tracking-widest text-lg">{item.title}</span>
                <div className="mt-4 px-3 py-1 border border-primary text-primary font-mono text-[10px] font-bold">SOLD OUT</div>
              </div>
              {/* Scanline effect on cards */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchiveWall;