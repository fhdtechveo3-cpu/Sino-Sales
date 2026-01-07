import React from 'react';
import { Globe, DollarSign, ShieldCheck, TrendingUp, Mic2, HeartHandshake } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multilingual Mastery",
      description: "Fluent communication in English and Chinese. We bridge the cultural and linguistic gap so nothing is lost in translation.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "Direct factory relationships allow us to beat Western manufacturing costs without compromising quality or ethics.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Ironclad Quality",
      description: "Our staff enforces strict QC standards. We don't just ship products; we ship perfection.",
      color: "from-purple-500 to-violet-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Shared Success",
      description: "If you don't make money, we don't make money. We align our goals directly with your market success.",
      color: "from-orange-500 to-amber-400"
    },
    {
        icon: <Mic2 className="w-8 h-8" />,
        title: "Communication",
        description: "Native English speakers available 24/7. No waiting for time zones to align to get critical answers.",
        color: "from-pink-500 to-rose-400"
    },
    {
        icon: <HeartHandshake className="w-8 h-8" />,
        title: "Long-term Partnership",
        description: "We aren't a vendor; we are your remote supply chain partner committed to your growth.",
        color: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-3 block">The Sino Advantage</span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight">
            Why Work With <br/> Sino Sales & Support?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We bridge the gap between your vision and the factory floor with a modern, tech-enabled approach to global manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-[100px] transition-all duration-500 group-hover:scale-150`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                {feature.icon}
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-red transition-colors">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {feature.description}
              </p>
              
              <div className="mt-6 w-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;