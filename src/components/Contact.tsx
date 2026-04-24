import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative z-10 w-full mt-12 border-t-2 border-black">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="brutalist-block p-12 !shadow-[8px_8px_0px_0px_#111] mb-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/10 rounded-full blur-[40px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#10b981]/10 rounded-full blur-[40px] pointer-events-none" />

            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 relative z-10">
              聯絡我 / CONTACT
            </h2>
            <p className="text-sm text-gray-500 mb-12 font-sans max-w-xl mx-auto leading-relaxed relative z-10">
              對於航運產業或任何合作機會充滿熱情。隨時歡迎透過電子郵件與我聯繫，讓我們一起創造更多可能性！
            </p>

            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-4 bg-black text-white px-8 py-5 text-sm font-mono tracking-widest font-bold brutalist-block !shadow-[4px_4px_0px_0px_#3b82f6] hover:!shadow-[8px_8px_0px_0px_#3b82f6] transition-all border-black hover:bg-black relative z-10 w-full md:w-auto"
            >
              <Mail size={18} />
              {PERSONAL_INFO.email}
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#3b82f6]"></div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Education: NKUST 高科大</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-[#10b981]"></div>
                 <span className="text-[10px] font-bold uppercase tracking-tighter">Location: Taiwan</span>
              </div>
            </div>
            
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} {PERSONAL_INFO.name} . Portfolio Grid System . All rights reserved
            </div>

            <div className="flex gap-4">
              {PERSONAL_INFO.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 border border-black bg-white flex items-center justify-center text-black hover:text-white hover:bg-[#3b82f6] transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
