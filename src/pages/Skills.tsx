import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 space-y-24 border-t border-black/5">
      <header className="space-y-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900"
        >
          Tech <span className="text-zinc-200">Stack</span>
        </motion.h2>
        <p className="text-zinc-400 max-w-xl font-light">
          Core competencies and technical platforms that drive my campaign success and operational efficiency.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-8 border border-black/[0.05] bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-black/[0.03] transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-[0.03] font-mono text-4xl font-bold italic select-none text-black">
              {(index + 1).toString().padStart(2, '0')}
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium group-hover:text-black transition-colors text-zinc-700">{skill}</h3>
              <div className="w-8 h-px bg-zinc-200 group-hover:w-full group-hover:bg-black transition-all duration-500" />
              <p className="text-xs font-mono text-zinc-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Expert Proficiency</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tools Section */}
      <section className="pt-24 space-y-12">
        <h3 className="text-sm font-mono text-zinc-300 uppercase tracking-widest text-center">Platforms & ecosystem</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-10 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <span className="text-2xl font-bold tracking-tighter text-zinc-900">CM360</span>
          <span className="text-2xl font-bold tracking-tighter text-zinc-900">GOOGLE ADX</span>
          <span className="text-2xl font-bold tracking-tighter text-zinc-900">VDX DSP</span>
          <span className="text-2xl font-bold tracking-tighter text-zinc-900">PUBMATIC</span>
          <span className="text-2xl font-bold tracking-tighter text-zinc-900">DV360</span>
          <span className="text-2xl font-bold tracking-tighter text-zinc-900">FLASHTALKING</span>
        </div>
      </section>
    </section>
  );
}
