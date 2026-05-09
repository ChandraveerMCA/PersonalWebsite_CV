import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants';

export default function Experience() {
  const { professional_experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 space-y-24 border-t border-black/5 first:border-t-0">
      <header className="space-y-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900"
        >
          Work <span className="text-zinc-200">Experience</span>
        </motion.h2>
        <p className="text-zinc-400 max-w-xl font-light">
          A track record of managing high-stakes digital campaigns and programmatic operations for global agencies.
        </p>
      </header>

      <div className="space-y-32">
        {professional_experience.map((exp, index) => (
          <motion.div 
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 relative"
          >
            {/* Left side: Timeline/Meta */}
            <div className="md:col-span-4 space-y-2">
              <span className="text-sm font-mono text-zinc-300 uppercase tracking-widest">
                {exp.start_date} — {exp.end_date}
              </span>
              <h3 className="text-xl font-semibold text-zinc-900">{exp.company}</h3>
              <p className="text-sm text-zinc-400 uppercase tracking-tighter font-medium">{exp.location}</p>
            </div>

            {/* Right side: Content */}
            <div className="md:col-span-8 space-y-6">
              <h4 className="text-2xl font-medium tracking-tight text-zinc-800">
                {exp.designation}
              </h4>
              <ul className="space-y-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-zinc-200 group-hover:bg-black transition-colors flex-shrink-0" />
                    <p className="text-zinc-500 group-hover:text-zinc-800 transition-colors leading-relaxed font-light">
                      {resp}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -left-12 top-0 h-full w-[1px] bg-gradient-to-b from-zinc-100 to-transparent hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
