import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import Industries from './components/Industries';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Process from './components/Process';
import AiSuite from './components/AiSuite';
import FAQ from './components/FAQ';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>('home');

  const renderView = () => {
    switch(currentView) {
      case 'about':
        return (
          <div className="pt-20">
            <div className="bg-brand-dark py-24 px-8 text-center text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Us</h1>
                <p className="text-gray-400 text-lg">Global Manufacturing Experts Since 2001</p>
              </div>
            </div>
            <Stats />
            <About />
            <Process />
            <Features />
          </div>
        );
      case 'services':
        return (
          <div className="pt-20">
            <div className="bg-brand-dark py-24 px-8 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
                <p className="text-gray-400 text-lg">End-to-End Product Development</p>
              </div>
            </div>
            <Industries />
            <Features />
            <Process />
            <AiSuite />
          </div>
        );
      case 'projects':
        return (
           <div className="pt-20">
             <div className="bg-brand-dark py-24 px-8 text-center text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our Work</h1>
                <p className="text-gray-400 text-lg">Innovative Products Manufactured for Our Clients</p>
              </div>
            </div>
            <Projects />
          </div>
        );
      case 'contact':
        return (
           <div className="pt-20">
            <div className="bg-brand-dark py-24 px-8 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f14d7045c573?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-400 text-lg">Let's discuss your next big idea.</p>
              </div>
            </div>
            <Contact />
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero setView={setView} />
            <Stats />
            <Features />
            <About />
            <Industries />
            <Process />
            <AiSuite />
            <Projects />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-red selection:text-white">
      <Navbar currentView={currentView} setView={setView} />
      
      <main className="animate-in fade-in duration-500">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export default App;