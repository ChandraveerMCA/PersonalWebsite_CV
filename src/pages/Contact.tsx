import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { personal_information } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-24 space-y-24 border-t border-black/5">
      <header className="space-y-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900"
        >
          Let's <span className="text-zinc-200">Connect</span>
        </motion.h2>
        <p className="text-zinc-400 max-w-xl font-light">
          Open for collaborations, opportunities, or just a chat about the future of digital advertising.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-lg border border-black/5 bg-zinc-50 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono text-zinc-300 uppercase tracking-widest">Email Address</p>
                <a href={`mailto:${personal_information.email}`} className="text-xl font-medium text-zinc-800 hover:text-black transition-colors">
                  {personal_information.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-lg border border-black/5 bg-zinc-50 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono text-zinc-300 uppercase tracking-widest">Phone Number</p>
                <a href={`tel:${personal_information.phone}`} className="text-xl font-medium text-zinc-800 hover:text-black transition-colors">
                  {personal_information.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-lg border border-black/5 bg-zinc-50 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono text-zinc-300 uppercase tracking-widest">Current Location</p>
                <p className="text-xl font-medium text-zinc-800">Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-zinc-50 border border-black/5 space-y-4">
            <h4 className="font-medium text-zinc-900">Availability</h4>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-zinc-500">Open to new opportunities</span>
            </div>
          </div>
        </div>

        {/* Form Placeholder */}
        <div className="lg:col-span-7">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Company</label>
                <input 
                  type="text" 
                  placeholder="Enterprise Inc."
                  className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-transparent border border-black/10 p-4 text-lg focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>
            <button className="px-10 py-5 bg-black text-white font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-zinc-800 transition-colors w-full md:w-auto justify-center">
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
