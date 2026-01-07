import React from 'react';
import { Mail, Phone, MapPin, Printer, Smartphone, Facebook, Linkedin, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-white/5 font-sans">
      {/* Top Banner */}
      <div className="bg-brand-red py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="font-medium text-sm md:text-base">Ready to scale your production? Let's talk about your project.</p>
          <a href="mailto:Sales@World-Trading.com" className="mt-2 md:mt-0 font-bold bg-white text-brand-red px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors">
            Contact Sales
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <img 
              src="https://world-trading.com/wp-content/uploads/Sino-Logo-400px-e1566444848296.png" 
              alt="Sino Sales" 
              className="h-12 brightness-0 invert" 
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging the gap between Western innovation and Chinese manufacturing excellence since 2001. We provide end-to-end product development solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/SinoSales/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red flex items-center justify-center transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/sino-sales-and-support-ltd.-/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red flex items-center justify-center transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/user/SinoSalesNingboChina" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red flex items-center justify-center transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Our Expertise</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Product Development', 'Sourcing & Procurement', 'Quality Assurance', 'Supply Chain Management', 'Mold Making', 'Kickstarter Launch'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-red transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-brand-red mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Detailed */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                <div>
                  <h5 className="text-white font-medium text-sm mb-1">Headquarters</h5>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Suite 2506, 25/F, Nanyuan Hotel,<br />
                    2 Lingqiao Road, Haishu District,<br />
                    Ningbo 315010, China
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                 <Phone className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                 <p className="text-gray-400 text-sm">(86) 574.8730.5025</p>
              </div>
              <div className="flex items-center">
                 <Smartphone className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                 <p className="text-gray-400 text-sm">US: (1) 319.460.0736</p>
              </div>
              <div className="flex items-center">
                 <Printer className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                 <p className="text-gray-400 text-sm">Fax: (86) 574.8730.5026</p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Stay Ahead</h4>
            <p className="text-gray-400 text-xs mb-4">
              Get the latest insights on manufacturing trends and supply chain updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2001 – 2026 – Sino Sales & Support Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;