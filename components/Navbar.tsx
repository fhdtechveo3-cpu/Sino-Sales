import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: ViewState }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Projects', value: 'projects' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <>
      {/* Dark gradient overlay for top visibility when transparent */}
      {!scrolled && (
        <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent z-40 pointer-events-none transition-opacity duration-500"></div>
      )}

      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 py-3 shadow-lg shadow-black/5' 
          : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Logo Section */}
            <div 
              className="flex items-center cursor-pointer z-50 relative group flex-shrink-0" 
              onClick={() => setView('home')}
            >
              <img 
                src="https://world-trading.com/wp-content/uploads/Sino-Logo-400px-e1566444848296.png" 
                alt="Sino Sales & Support" 
                className={`transition-all duration-500 object-contain ${scrolled ? 'h-10 brightness-100' : 'h-14 brightness-0 invert drop-shadow-md'}`}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-gray-100/80 border border-gray-200' : 'bg-white/10 border border-white/10 backdrop-blur-md'}`}>
                {navLinks.map((link) => (
                  <button
                    key={link.value}
                    onClick={() => setView(link.value)}
                    className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                      ${currentView === link.value 
                        ? 'text-white bg-brand-dark shadow-md' 
                        : scrolled 
                          ? 'text-gray-600 hover:text-brand-dark hover:bg-white' 
                          : 'text-gray-100 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-6">
               <div className={`flex space-x-4 transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-white/90'}`}>
                 <a href="https://www.facebook.com/SinoSales/" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-transform hover:-translate-y-1"><Facebook size={20} /></a>
                 <a href="https://www.linkedin.com/company/sino-sales-and-support-ltd.-/" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-transform hover:-translate-y-1"><Linkedin size={20} /></a>
              </div>

              <button 
                onClick={() => setView('contact')}
                className="relative overflow-hidden group bg-gradient-to-r from-brand-red to-rose-600 text-white pl-6 pr-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-red/30 transition-all hover:shadow-brand-red/50 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span className="relative z-10">Request Quote</span>
                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform relative z-10">
                  <ArrowRight size={14} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
               <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-[60] flex flex-col animate-in slide-in-from-right-5 fade-in duration-300">
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
               <img 
                src="https://world-trading.com/wp-content/uploads/Sino-Logo-400px-e1566444848296.png" 
                alt="Sino Sales" 
                className="h-10"
              />
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => {
                    setView(link.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-4 rounded-2xl text-xl font-bold transition-all
                    ${currentView === link.value 
                      ? 'bg-brand-red/5 text-brand-red pl-6' 
                      : 'text-gray-800 hover:bg-gray-50'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="p-6 bg-gray-50 space-y-6">
              <div className="flex justify-center space-x-8 text-gray-400">
                <a href="https://www.facebook.com/SinoSales/" className="hover:text-brand-red"><Facebook size={24} /></a>
                <a href="https://www.linkedin.com/company/sino-sales-and-support-ltd.-/" className="hover:text-brand-red"><Linkedin size={24} /></a>
                <a href="https://www.youtube.com/user/SinoSalesNingboChina" className="hover:text-brand-red"><Youtube size={24} /></a>
              </div>
              <button 
                onClick={() => {
                  setView('contact');
                  setIsOpen(false);
                }}
                className="w-full bg-brand-red text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brand-red/20"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;