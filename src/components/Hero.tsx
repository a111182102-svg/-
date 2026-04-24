import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="floating-shape-blue top-[-50px] right-[-50px]" />
      <div className="floating-shape-emerald bottom-[10%] left-[-30px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <div className="accent-border-blue mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight font-serif tracking-tighter">
              哈囉，我是 <br />
              <span className="text-black">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-sm tracking-[0.4em] uppercase text-gray-500 font-mono">Digital Experience Designer & Planner</p>
          </div>
          
          <div className="flex flex-wrap gap-4 font-mono text-xs text-gray-500 mb-8">
            <span className="tag-label">ID: {PERSONAL_INFO.studentId}</span>
            <span className="border-2 border-gray-300 px-3 py-1 bg-white">{PERSONAL_INFO.zodiac}</span>
            <span className="border-2 border-gray-300 px-3 py-1 bg-white">{PERSONAL_INFO.bloodType}</span>
            <span className="border-2 border-gray-300 px-3 py-1 bg-white">{PERSONAL_INFO.birthdate}</span>
          </div>

          <div className="flex items-center gap-4">
            {PERSONAL_INFO.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className="w-12 h-12 brutalist-block flex items-center justify-center text-[#111] hover:text-white hover:bg-[#3b82f6]"
                target="_blank"
                rel="noreferrer"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 brutalist-block bg-white overflow-hidden rounded-full border-[12px] border-[#3b82f6] !shadow-[16px_16px_0px_0px_#111]">
               <img 
                 src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
                 alt="Portrait abstract" 
                 className="w-full h-full object-cover mix-blend-luminosity opacity-80"
               />
            </div>
            
            {/* Decor elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-[#10b981] border-2 border-black rotate-12" />
            <div className="absolute bottom-12 right-2 w-20 h-20 bg-black text-white flex items-center justify-center font-bold font-mono border-2 border-[#10b981]">
              HI!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
