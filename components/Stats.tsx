import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2 font-serif">20+</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Years Experience</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2 font-serif">40+</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Annual Clients</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2 font-serif">100s</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Factory Partners</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2 font-serif">$10M+</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Value Created</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;