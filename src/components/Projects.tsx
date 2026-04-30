import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { OkinawaSlideshow } from './OkinawaSlideshow';

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
          {PROJECTS.map((project: any, idx) => {
            if (project.type === 'itinerary') {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full border-2 border-black bg-white shadow-[8px_8px_0px_0px_#10b981] flex flex-col overflow-hidden"
                >
                  <div className="bg-black text-white p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
                    <h3 className="text-lg font-bold tracking-widest font-mono uppercase">FEATURED PROJECT: {project.title}</h3>
                    {project.budget && <span className="text-xs font-mono">{project.budget}</span>}
                  </div>
                  
                  {/* Okinawa Slideshow from PPT */}
                  <div className="w-full">
                    <OkinawaSlideshow />
                  </div>

                  {/* Original Grid Details */}
                  <div className="grid grid-cols-2 md:grid-cols-5 h-full">
                    {project.itinerary?.map((dayPlan: any, i: number) => (
                      <div key={i} className={`p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 transition-colors flex flex-col ${i === 4 ? 'bg-gray-50' : 'hover:bg-[#fdfdfd]'}`}>
                        <span className="block text-3xl font-black mb-2 opacity-20">{dayPlan.day}</span>
                        <h4 className={`font-bold text-sm mb-4 ${dayPlan.color || 'text-[#3b82f6]'}`}>{dayPlan.title}</h4>
                        <ul className="text-[10px] space-y-2 text-gray-600 font-sans mb-4 flex-1">
                          {dayPlan.items.map((item: string, j: number) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                        {dayPlan.video && (
                          <div className="mt-auto border-2 border-black relative bg-[#111] aspect-[4/3] overflow-hidden group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <video 
                              src={dayPlan.video} 
                              className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-300"
                              autoPlay 
                              muted 
                              loop 
                              playsInline 
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            }

            return (
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
                      {project.tags.map((tag: string) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
