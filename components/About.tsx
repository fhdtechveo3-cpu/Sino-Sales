import React from 'react';
import { Factory, Users, Rocket, Phone, Printer, MapPin, Smartphone, Youtube } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          <div className="w-full lg:w-1/2 sticky top-28">
            {/* Video Section */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-gray-900 border-4 border-white mb-8">
               {/* Embed Iframe */}
               <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/hE021aQ1VXg?modestbranding=1&rel=0&showinfo=0" 
                title="Sino Sales Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full z-10"
              ></iframe>
              {/* Fallback Overlay in case iframe fails or for aesthetic until load */}
              <div className="absolute inset-0 z-0 bg-black flex items-center justify-center pointer-events-none">
                 <div className="text-white text-center">
                    <p className="mb-2">Loading Video...</p>
                 </div>
              </div>
            </div>
            {/* Fallback Link */}
            <div className="text-center mb-8 lg:hidden">
                <a href="https://youtu.be/hE021aQ1VXg" target="_blank" rel="noreferrer" className="text-brand-red font-semibold hover:underline flex items-center justify-center">
                    <Youtube className="w-4 h-4 mr-2" /> Watch directly on YouTube
                </a>
            </div>

            {/* Contact Card Sidebar */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-20 rounded-bl-full"></div>
                <h3 className="font-serif text-2xl font-bold mb-6 relative z-10">Get In Touch</h3>
                <div className="space-y-4 relative z-10">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                            <Phone size={18} className="text-brand-red" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase">Office Phone</p>
                            <p className="font-medium tracking-wide">(86) 574.8730.5025</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                            <Smartphone size={18} className="text-brand-red" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase">U.S. Cell</p>
                            <p className="font-medium tracking-wide">(1) 319.460.0736</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                            <Printer size={18} className="text-brand-red" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase">Fax</p>
                            <p className="font-medium tracking-wide">(86) 574.8730.5026</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                            <MapPin size={18} className="text-brand-red" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase">Headquarters</p>
                            <p className="font-medium text-sm leading-relaxed text-gray-300">
                                Suite 2506, 25/F, Nanyuan Hotel,<br/> 2 Lingqiao Road, Haishu District,<br/> Ningbo, China
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-brand-red font-semibold tracking-wide uppercase text-sm mb-2 block">Who We Are</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight">
              Global Manufacturing &<br/>Product Development
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
              <p className="mb-6">
                Sino Sales & Support is a globally recognized Product Manufacturing Services company located in the United States & China. Our 20+ years of experience in product development and supply chain management allows us to utilize the best manufacturers for your exact needs. With hundreds of developed manufacturer relationships we are able to provide our clients with the most professional and reliable factories to produce anything made of metal, plastics, fabrics, foam, silicon and more.
              </p>
              <p className="mb-6">
                Currently, we represent over 40 companies annually from small/medium enterprises to multinationals conglomerates. At Sino Sales, we assist our clients from start to finish in product development, tooling/molding, mass manufacturing, sourcing, quality assurance, packaging, and fulfillment.
              </p>
              <p>
                In our 20 years of operation we have helped thousands of start-ups/entrepreneurs scale to the next level by providing high quality products at competitive prices. Additionally, we consistently work with Kickstarter and IndieGoGo campaigns to ensure their products are developed and launched successfully. With a team of project managers, engineers, and quality assurance agents on the ground in both United States and China we are the first choice for buyers, inventors, and wholesalers demanding world class manufacturing services in China.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-brand-red/10 p-2 rounded-lg mr-4 mt-1">
                  <Factory className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Comprehensive Manufacturing</h4>
                  <p className="text-sm text-gray-600">Metal, plastics, fabrics, foam, silicon and more.</p>
                </div>
              </div>
              <div className="flex items-start">
                 <div className="bg-brand-red/10 p-2 rounded-lg mr-4 mt-1">
                  <Rocket className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Kickstarter & IndieGoGo Experts</h4>
                  <p className="text-sm text-gray-600">Ensuring successful launches for crowdfunding campaigns.</p>
                </div>
              </div>
               <div className="flex items-start">
                 <div className="bg-brand-red/10 p-2 rounded-lg mr-4 mt-1">
                  <Users className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Boots on the Ground</h4>
                  <p className="text-sm text-gray-600">Teams in both US and China for seamless communication.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;