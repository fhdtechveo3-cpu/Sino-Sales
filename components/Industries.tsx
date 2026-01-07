import React from 'react';
import { Cpu, Hammer, ShoppingBag, Heart, HardHat, Zap } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    { name: 'Consumer Electronics', icon: <Cpu className="w-8 h-8" />, desc: 'PCBs, Housings, Assembly' },
    { name: 'Industrial Equipment', icon: <Hammer className="w-8 h-8" />, desc: 'CNC, Heavy Metal Parts' },
    { name: 'Retail & Consumer', icon: <ShoppingBag className="w-8 h-8" />, desc: 'Plastics, Packaging' },
    { name: 'Medical Devices', icon: <Heart className="w-8 h-8" />, desc: 'ISO 13485 Standards' },
    { name: 'Construction', icon: <HardHat className="w-8 h-8" />, desc: 'Fixtures, Brackets' },
    { name: 'Energy Sector', icon: <Zap className="w-8 h-8" />, desc: 'Solar, Battery Housings' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold tracking-wide uppercase text-sm mb-2 block">Sectors We Serve</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">Industries of Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div key={idx} className="group p-8 border border-gray-100 rounded-3xl hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 bg-gray-50 hover:bg-white">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{ind.name}</h3>
              <p className="text-gray-500">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;