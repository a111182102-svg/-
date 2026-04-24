import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATIONS } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 w-full mb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block brutalist-block px-8 py-4 mb-8 !border-black max-w-full">
               <h2 className="text-3xl md:text-4xl font-bold underline-thick-emerald uppercase">
                 學歷背景 / EDUCATION
               </h2>
            </div>
            
            <div className="space-y-8 mt-4">
              {EDUCATIONS.map((img, idx) => (
                <div key={idx} className="brutalist-block p-8 !shadow-[8px_8px_0px_0px_#10b981]">
                  <div className="tag-label !bg-[#10b981] mb-4">{img.date}</div>
                  <h3 className="text-2xl font-bold mb-2">{img.school}</h3>
                  <div className="text-gray-600 font-sans">{img.department} · {img.degree}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tourism Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block brutalist-block px-8 py-4 mb-8 !border-black max-w-full">
               <h2 className="text-3xl md:text-4xl font-bold underline-thick-blue uppercase truncate">
                 旅遊經驗 / EXPERIENCE
               </h2>
            </div>
            
            <div className="space-y-8 mt-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-black">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  {/* Timeline icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-black bg-[#3b82f6] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] brutalist-block p-6">
                    <div className="font-mono text-xs text-white bg-black px-2 py-1 inline-block mb-3">{exp.date}</div>
                    <h3 className="text-lg font-bold mb-4">{exp.title}</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 font-sans">
                      {exp.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
