import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10 w-full mb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block brutalist-block px-8 py-4 mb-4 !border-black">
             <h2 className="text-3xl md:text-4xl font-bold underline-thick-blue uppercase">
               核心技能 / SKILLS
             </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Languages */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="brutalist-block p-8">
            <h3 className="text-xl font-bold mb-6 font-mono text-[#3b82f6]">LANGUAGE</h3>
            <div className="grid grid-cols-2 gap-6">
              {SKILLS.languages.map((lang, i) => (
                <motion.div key={i} variants={itemVariants} className="p-4 border-2 border-gray-100 bg-gray-50">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-lg">{lang.name}</span>
                    <span className="tag-label uppercase !bg-[#10b981]">{lang.level}</span>
                  </div>
                  {lang.cert && <div className="text-sm text-gray-500 font-mono mt-2">{lang.cert}</div>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="brutalist-block p-8 !shadow-[8px_8px_0px_0px_#10b981]">
            <h3 className="text-xl font-bold mb-6 font-mono text-[#10b981]">PROFESSIONAL</h3>
            <div className="space-y-6">
              {SKILLS.professional.map((prof, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <h4 className="font-bold text-md mb-2">{prof.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {prof.items.map((item, j) => (
                      <span key={j} className="text-xs bg-black text-white px-3 py-1 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software Skills */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="brutalist-block p-8 md:col-span-2">
             <h3 className="text-xl font-bold mb-6 font-mono text-[#3b82f6]">SOFTWARE</h3>
             <div className="grid md:grid-cols-2 gap-8">
               {SKILLS.software.map((sw, i) => (
                 <motion.div key={i} variants={itemVariants}>
                   <h4 className="font-bold text-md mb-3 border-l-4 border-black pl-3">{sw.category}</h4>
                   <ul className="list-disc list-inside space-y-2 text-gray-700 font-mono text-sm leading-relaxed">
                     {sw.items.map((item, j) => (
                       <li key={j}>{item}</li>
                     ))}
                   </ul>
                 </motion.div>
               ))}
             </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="brutalist-block p-8 md:col-span-2 bg-black text-white !shadow-[8px_8px_0px_0px_#10b981]">
            <h3 className="text-xl font-bold mb-6 font-mono text-[#10b981]">CERTIFICATIONS</h3>
            <div className="flex flex-wrap gap-4">
              {SKILLS.certificates.map((cert, i) => (
                <motion.div key={i} variants={itemVariants} className="border-2 border-white px-6 py-2 font-mono text-sm bg-white/10">
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
