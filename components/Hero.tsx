import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/30 backdrop-blur-sm mb-6 animate-in slide-in-from-bottom-5 fade-in duration-700">
            <span className="text-brand-red font-semibold tracking-wide text-xs uppercase">Since 2001</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            Have A Million <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Dollar Idea?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-200">
            Make your idea a reality with Sino Sales & Support. We are a premier product development and manufacturing service company bridging the gap between Western innovation and Chinese manufacturing excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-300">
            <button 
              onClick={() => setView('contact')}
              className="px-8 py-4 bg-brand-red text-white rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-red/50 flex items-center justify-center group"
            >
              Get A Quote
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setView('projects')}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/80 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;