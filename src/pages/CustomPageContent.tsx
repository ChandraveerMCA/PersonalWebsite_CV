import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { CustomPage } from '../types';

export default function CustomPageContent({ page }: { page: CustomPage }) {
  return (
    <div className="py-12 space-y-12">
      <header className="space-y-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900"
        >
          {page.title.split(' ')[0]} <span className="text-zinc-200">{page.title.split(' ').slice(1).join(' ')}</span>
        </motion.h2>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-zinc max-w-none"
      >
        <div className="text-zinc-500 leading-relaxed font-light space-y-6">
          <ReactMarkdown>{page.content}</ReactMarkdown>
        </div>
      </motion.div>
    </div>
  );
}
