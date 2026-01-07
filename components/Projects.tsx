import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Cable Core Hub",
    category: "Electronics",
    image: "https://world-trading.com/wp-content/uploads/gallery_img_01.jpg",
    link: "http://www.icoregear.com/"
  },
  {
    id: 2,
    title: "STACT",
    category: "Lifestyle",
    image: "https://world-trading.com/wp-content/uploads/STACT_1.jpg",
    link: "https://www.getstact.com/"
  },
  {
    id: 3,
    title: "Core Tilt Dock",
    category: "Accessories",
    image: "https://world-trading.com/wp-content/uploads/iCoreGear.jpg",
    link: "http://www.icoregear.com/"
  },
  {
    id: 4,
    title: "Metal Laundry Cart",
    category: "Industrial",
    image: "https://world-trading.com/wp-content/uploads/Laundry_cart.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "Core Fitness Roller",
    category: "Fitness",
    image: "https://world-trading.com/wp-content/uploads/motr-teaser-01@1x.jpg",
    link: "https://www.pilates.com/"
  },
  {
    id: 6,
    title: "Joist Fixing System",
    category: "Construction",
    image: "https://world-trading.com/wp-content/uploads/Wood-Joist-Fixing-System.jpg",
    link: "https://klevaklip.com.au/"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-red font-semibold tracking-wide uppercase text-sm mb-2 block">Our Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Projects We've Done</h2>
          </div>
          <button className="hidden md:block px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-white/5 shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-brand-red text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                <h3 className="font-serif text-2xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 text-white">{project.title}</h3>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold hover:text-brand-red transition-colors transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-150 text-white"
                >
                  Check It Out <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              {/* Static text for mobile/always visible if preferred, or rely on hover for desktop. 
                  Let's add a small label at bottom for mobile clarity if needed, but the hover effect is clean. */}
              <div className="p-4 bg-brand-dark border-t border-white/10 md:hidden">
                 <h3 className="font-serif text-lg font-bold text-white">{project.title}</h3>
                 <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;