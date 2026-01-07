import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How do you protect my Intellectual Property (IP)?", a: "We take IP protection very seriously. We sign strict NDAs with both our clients and our factory partners in China. Our contracts are legally binding in local jurisdictions to ensure full protection of your designs." },
    { q: "What is your minimum order quantity (MOQ)?", a: "MOQs vary by product type and material. However, because of our strong relationships with manufacturers, we can often negotiate lower MOQs than typical sourcing agents, especially for pilot runs." },
    { q: "Do you handle shipping and customs?", a: "Yes, we offer end-to-end logistics support. We can handle freight forwarding, customs clearance, and delivery to your warehouse or distribution center anywhere in the world." },
    { q: "How long does the prototyping process take?", a: "Typically, initial prototypes can be ready in 2-4 weeks depending on complexity. We use rapid prototyping techniques (3D printing, CNC) to speed up the engineering validation phase." }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Common queries about manufacturing in China with Sino Sales.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-brand-dark">{item.q}</span>
                {openIndex === idx ? <Minus className="text-brand-red" /> : <Plus className="text-gray-400" />}
              </button>
              <div className={`px-8 transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;