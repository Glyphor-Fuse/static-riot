import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const DROP_PRODUCTS = [
  { id: 1, name: 'ANOMALY HOODIE', price: '$185', img: '/images/product-1.png', stock: '8% LEFT' },
  { id: 2, name: 'XEROX TEE', price: '$65', img: '/images/product-2.png', stock: '24% LEFT' },
  { id: 3, name: 'SIGNAL PANTS', price: '$240', img: '/images/product-3.png', stock: 'LOW STOCK' },
  { id: 4, name: 'RIOT BEANIE', price: '$45', img: '/images/product-4.png', stock: 'FINAL FEW' },
];

const DropGrid = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter">Live Drop</h2>
            <p className="font-mono text-primary mt-2">ENCRYPTED TRANSACTION READY</p>
          </div>
          <div className="hidden md:block font-mono text-right opacity-50">
            TOTAL SUPPLY: 500 UNITS<br />
            LOCATION: UNDISCLOSED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-background/20">
          {DROP_PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ scale: 0.98 }}
              className="group border-r border-b border-background/20 p-6 flex flex-col"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase">
                  {product.stock}
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-black uppercase leading-none">{product.name}</h3>
                <span className="font-mono text-xl">{product.price}</span>
              </div>

              <button className="mt-auto w-full py-4 border-2 border-background font-black uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-background hover:text-foreground transition-all">
                <ShoppingCart className="w-5 h-5" />
                Quick Secure
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DropGrid;