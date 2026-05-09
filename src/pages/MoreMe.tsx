import { motion } from 'motion/react';

export default function MoreMe() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 uppercase">
          More <span className="text-zinc-200">Me</span>
        </h1>
        <p className="text-zinc-400 font-mono tracking-widest text-sm uppercase">upcoming details</p>
      </motion.div>
    </div>
  );
}
