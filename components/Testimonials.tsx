import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jamie Kasza",
    role: "Founder of Stact",
    content: "Ever since our kickstarter launch in 2012 I’ve been working with Randy and his team and they’ve done a fantastic job of producing our product. It’s been several production runs each year, and couldn’t be more pleased."
  },
  {
    id: 2,
    name: "Mark Boufford",
    role: "Senior Brand Manager, Rust-Oleum Corp",
    content: "World Sino Sales & Support, Ltd were a great help to Rust-Oleum as we undertook our first-ever Asian Sourcing initiatives. The end result was a strong contribution to Rust-Oleum’s bottom line."
  },
  {
    id: 3,
    name: "Patrick Lehoux",
    role: "Founder of Bottle Cutting Inc.",
    content: "I’ve done three kickstarters and Randy has done all the products for them. If there are manufacturing problems, he deals with them so you don’t have to. I can definitely say my business wouldn’t be where it is today without them."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold tracking-wide uppercase text-sm mb-2 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">What Our Partners Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-3xl relative border border-gray-100 hover:shadow-xl transition-all duration-300">
              <Quote className="w-10 h-10 text-brand-red/20 mb-6" />
              <p className="text-gray-600 mb-8 italic leading-relaxed">"{t.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex-shrink-0 bg-cover bg-center" style={{backgroundImage: `url(https://i.pravatar.cc/150?u=${t.id})`}}></div>
                <div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                  <p className="text-xs text-brand-red font-medium uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;