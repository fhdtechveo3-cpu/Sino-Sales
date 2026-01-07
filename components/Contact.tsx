import React from 'react';
import { Phone, Smartphone, Printer, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-red rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-white/80 text-lg mb-8">
              Whether you have a million dollar idea or need to scale your existing manufacturing, we're here to help you succeed.
            </p>
            
            <div className="space-y-6 mb-8">
                <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 opacity-80" />
                    <div>
                        <p className="text-xs uppercase opacity-70">China Office</p>
                        <p className="text-lg font-semibold">(86) 574.8730.5025</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Smartphone className="w-6 h-6 mr-4 opacity-80" />
                    <div>
                        <p className="text-xs uppercase opacity-70">U.S. Cell</p>
                        <p className="text-lg font-semibold">(1) 319.460.0736</p>
                    </div>
                </div>
                 <div className="flex items-center">
                    <Printer className="w-6 h-6 mr-4 opacity-80" />
                    <div>
                        <p className="text-xs uppercase opacity-70">Fax</p>
                        <p className="text-lg font-semibold">(86) 574.8730.5026</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 opacity-80" />
                    <div>
                        <p className="text-xs uppercase opacity-70">Email</p>
                        <p className="text-lg font-semibold">Sales@World-Trading.com</p>
                    </div>
                </div>
            </div>

            <ul className="space-y-4 pt-6 border-t border-white/20">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                <span>Free Initial Consultation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                <span>Competitive Quotations</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                <span>Expert Engineering Support</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Idea / Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;