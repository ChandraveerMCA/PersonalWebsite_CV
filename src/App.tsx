/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import MoreMe from './pages/MoreMe';
import CustomPageContent from './pages/CustomPageContent';
import { PORTFOLIO_DATA } from './constants';
import { PortfolioData } from './types';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('portfolio_data');
    return saved ? JSON.parse(saved) : PORTFOLIO_DATA;
  });
  const [activePage, setActivePage] = useState('home');

  // Scroll to top only when entering separate pages
  useEffect(() => {
    if (activePage === 'admin' || activePage === 'more-me') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activePage]);

  const handleSave = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem('portfolio_data', JSON.stringify(newData));
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-zinc-900 selection:text-white">
      <Navigation 
        activePage={activePage} 
        setActivePage={setActivePage} 
        customPages={data.custom_pages || []} 
      />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <AnimatePresence mode="wait">
          {activePage === 'admin' ? (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Admin 
                data={data} 
                onSave={handleSave} 
                onLogout={() => setActivePage('home')} 
              />
            </motion.div>
          ) : activePage === 'more-me' ? (
            <motion.div
              key="more-me"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MoreMe />
            </motion.div>
          ) : (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-0"
            >
              <Home onNavigate={setActivePage} />
              <Experience />
              <Skills />
              <Projects />
              {data.custom_pages?.map(page => (
                <section key={page.id} id={page.id} className="border-t border-black/5">
                  <CustomPageContent page={page} />
                </section>
              ))}
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-zinc-400 text-sm font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} {data.personal_information.name}
          </p>
          <p className="text-zinc-300 text-[10px] font-mono tracking-widest uppercase cursor-pointer hover:text-black transition-colors" onClick={() => setActivePage('admin')}>
            Admin Access Portal
          </p>
        </div>
        <div className="flex gap-8">
          {['LinkedIn', 'Github', 'Resume'].map(link => (
            <a key={link} href="#" className="text-xs font-mono text-zinc-400 hover:text-black transition-colors uppercase tracking-widest">
              {link}
            </a>
          ))}
        </div>
      </footer>

      {/* Ornamentation */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-zinc-50 rounded-full blur-[80px] -z-10 pointer-events-none" />
    </div>
  );
}

