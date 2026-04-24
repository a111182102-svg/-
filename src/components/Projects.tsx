import { motion } from 'motion/react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden z-10 w-full mb-8">
      {/* Background Decor */}
      <div className="absolute top-[30%] -right-16 w-32 h-32 border-[20px] border-[#10b981] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[10%] -left-32 w-64 h-16 bg-[#3b82f6] opacity-10 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest inline-block border-2 border-black bg-white px-8 py-4 shadow-[8px_8px_0px_0px_#3b82f6]">
            專案作品 / PROJECTS
          </h2>
        </motion.div>

        <div className="space-y-24">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Project Image Area */}
              <div className="lg:col-span-5 relative group">
                <div className="brutalist-block overflow-hidden relative p-2 bg-white">
                  <div className="absolute inset-0 bg-[#3b82f6]/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out border-2 border-black"
                  />
                  {/* Fake play button overlay as seen in screenshot */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content Area */}
              <div className="lg:col-span-7 brutalist-block-emerald flex flex-col h-full bg-white">
                <div className="bg-black text-white p-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold tracking-widest font-mono uppercase">{project.title}</h3>
                </div>
                
                <div className="p-8">
                  <div className="flex gap-3 mb-6 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag-label opacity-80 border border-black text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm font-sans whitespace-pre-line leading-relaxed text-gray-700">
                    {project.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
