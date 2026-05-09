import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CustomPage } from '../types';

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
  customPages: CustomPage[];
}

const baseNavItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'more-me', label: 'More me' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activePage, setActivePage, customPages }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [...baseNavItems, ...customPages.map(p => ({ id: p.id, label: p.title }))];

  const handleNavClick = (id: string) => {
    const wasExternalPage = activePage === 'admin' || activePage === 'more-me';
    setActivePage(id);
    setIsOpen(false);
    
    if (id === 'admin' || id === 'more-me') return;

    // Use a small timeout to allow App.tsx to switch back to portfolio if we were on a separate page
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: wasExternalPage ? 'instant' : 'smooth'
        });
      }
    }, wasExternalPage ? 350 : 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono text-sm tracking-widest font-medium text-zinc-900 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          CP.AD_OPS
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm tracking-tight transition-colors hover:text-black font-medium whitespace-nowrap ${
                activePage === item.id ? 'text-black' : 'text-zinc-400'
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="h-px bg-black mt-1"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-600 hover:text-black transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-50 border-b border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-medium transition-colors ${
                    activePage === item.id ? 'text-black' : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
