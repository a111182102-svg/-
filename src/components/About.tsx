import { motion } from 'motion/react';
import { INTRO_TEXT } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 w-full mb-8">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="brutalist-block p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 underline-thick-emerald">
              關於我 / ABOUT
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 font-sans">
              {INTRO_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
