import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { personal_information, summary } = PORTFOLIO_DATA;

  return (
    <section id="home" className="flex flex-col gap-16 md:gap-32 py-12">
      {/* Hero Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-zinc-50 rounded-full blur-3xl -z-10"
        />
        
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <span className="w-8 h-px bg-black/10" />
            <span className="text-sm font-mono tracking-widest text-zinc-400 uppercase">Ad Operations Specialist</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-zinc-900"
          >
            {personal_information.name.split(' ')[0]} <br />
            <span className="text-zinc-200">{personal_information.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-light">
              {summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <button 
              onClick={() => onNavigate('experience')}
              className="px-8 py-4 bg-black text-white font-medium text-sm flex items-center gap-2 hover:bg-zinc-800 transition-colors group"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 border border-black/5 font-medium text-sm hover:bg-black/5 transition-colors text-zinc-900"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/5 pt-12"
      >
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Contact Channels</h3>
          <div className="flex flex-col gap-6">
            <a href={`mailto:${personal_information.email}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-zinc-500 group-hover:text-black transition-colors">{personal_information.email}</span>
            </a>
            <a href={`tel:${personal_information.phone}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-zinc-500 group-hover:text-black transition-colors">{personal_information.phone}</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Latest Focus</h3>
          <p className="text-zinc-500 leading-relaxed font-light">
            Currently working at Doceree Media Pvt Ltd as an Ad-Operations Executive, ensuring flawless campaign execution across the healthcare programmatic landscape.
          </p>
        </div>
      </motion.section>
    </section>
  );
}
