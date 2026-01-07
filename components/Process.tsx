import React from 'react';
import { Lightbulb, PenTool, Hammer, Ship, PackageCheck } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Concept",
      desc: "We help refine your million dollar idea."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Engineering",
      desc: "CAD designs and material selection."
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Prototyping",
      desc: "Working samples to test form and function."
    },
    {
      icon: <PackageCheck className="w-6 h-6" />,
      title: "Manufacturing",
      desc: "Mass production with strict QC."
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Fulfillment",
      desc: "Packaging and shipping globally."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold tracking-wide uppercase text-sm mb-2 block">How It Works</span>
          <h2 className="font-serif text-4xl font-bold text-brand-dark">From Concept to Delivery</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-2 border-brand-red rounded-full flex items-center justify-center text-brand-red mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-snug max-w-[150px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;