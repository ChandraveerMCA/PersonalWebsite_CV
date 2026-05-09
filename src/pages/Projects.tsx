import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  // Placeholder projects for user to edit
  const placeholders = [
    {
      title: "Ad Fraud Detection Engine",
      description: "A conceptual framework for identifying IVT (Inalid Traffic) in programmatic buying using historical log analysis.",
      tech: ["Python", "Pandas", "Sklearn"],
      link: "#"
    },
    {
      title: "Dynamic Creative Optimizer",
      description: "A script-based solution for swapping creative assets based on real-time weather and location triggers.",
      tech: ["JavaScript", "Google Scripts", "OpenWeatherMap API"],
      link: "#"
    },
    {
      title: "Campaign Dashboard V2",
      description: "Internal performance monitoring tool for cross-platform campaign health checks and pacing alerts.",
      tech: ["React", "D3.js", "CM360 API"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 space-y-24 border-t border-black/5">
      <header className="space-y-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900"
        >
          Featured <span className="text-zinc-200">Projects</span>
        </motion.h2>
        <p className="text-zinc-400 max-w-xl font-light">
          A collection of experiments and tools developed to push the boundaries of digital advertising.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholders.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block p-8 border border-black/[0.05] bg-zinc-50/30 hover:bg-white hover:shadow-2xl hover:shadow-black/[0.04] transition-all duration-500 overflow-hidden relative"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 border border-black/10 flex items-center justify-center -ml-1 group-hover:bg-black group-hover:text-white transition-all">
                  <Github className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-black transition-colors" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold group-hover:text-black transition-colors text-zinc-800">{project.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-zinc-100 border border-black/[0.05] group-hover:border-black/10 transition-colors text-zinc-500 group-hover:text-black">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Visual Flair */}
            <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-zinc-100 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
        
        {/* Empty State / Add Suggestion */}
        <div className="p-8 border border-dashed border-black/10 flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border border-dashed border-black/20 flex items-center justify-center">
            <span className="text-2xl text-zinc-200">+</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-300 uppercase tracking-widest">New Project</p>
            <p className="text-xs text-zinc-200 font-light italic">Edit src/pages/Projects.tsx to add more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
