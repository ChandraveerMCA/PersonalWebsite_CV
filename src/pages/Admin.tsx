import { useState } from 'react';
import { motion } from 'motion/react';
import { Save, LogOut, Plus, Trash2, Lock } from 'lucide-react';
import { PortfolioData, CustomPage } from '../types';

interface AdminProps {
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onLogout: () => void;
}

export default function Admin({ data, onSave, onLogout }: AdminProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [editData, setEditData] = useState<PortfolioData>(JSON.parse(JSON.stringify(data)));
  const [activeTab, setActiveTab] = useState<'info' | 'experience' | 'pages'>('info');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple default password
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-12 border border-black/5 bg-zinc-50 w-full max-w-md space-y-8"
        >
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-zinc-900">Admin Access</h1>
            <p className="text-zinc-500 text-sm">Enter password to manage portfolio</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password (admin123)"
              className="w-full bg-white border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors"
            />
            <button className="w-full bg-black text-white py-3 font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors">
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const saveChanges = () => {
    onSave(editData);
    alert('Changes saved successfully!');
  };

  const addCustomPage = () => {
    const newPage: CustomPage = {
      id: `page-${Date.now()}`,
      title: 'New Page',
      content: '# New Page Content\n\nEdit this content...'
    };
    setEditData({
      ...editData,
      custom_pages: [...(editData.custom_pages || []), newPage]
    });
  };

  const removeCustomPage = (id: string) => {
    setEditData({
      ...editData,
      custom_pages: editData.custom_pages?.filter(p => p.id !== id) || []
    });
  };

  return (
    <div className="py-12 space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-black/5 pb-8">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Admin <span className="text-zinc-200">Panel</span></h1>
          <p className="text-zinc-500 font-light">Manage your portfolio content and dynamic pages.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={saveChanges}
            className="flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors leading-none"
          >
            <Save size={16} />
            Save Changes
          </button>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-6 py-3 border border-black/5 text-zinc-600 text-sm font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors leading-none"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Navigation */}
        <aside className="lg:col-span-3 flex flex-col gap-2">
          {(['info', 'experience', 'pages'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left px-6 py-4 font-mono text-xs uppercase tracking-widest transition-all ${
                activeTab === tab 
                  ? 'bg-black text-white translate-x-2' 
                  : 'text-zinc-400 hover:text-black hover:bg-zinc-50'
              }`}
            >
              {tab.replace('_', ' ')}
            </button>
          ))}
        </aside>

        {/* Editor */}
        <main className="lg:col-span-9 bg-zinc-50 border border-black/[0.05] p-8 space-y-8">
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    value={editData.personal_information.name}
                    onChange={(e) => setEditData({
                      ...editData, 
                      personal_information: { ...editData.personal_information, name: e.target.value } 
                    })}
                    className="w-full bg-white border border-black/5 p-3 focus:outline-none focus:border-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    value={editData.personal_information.email}
                    onChange={(e) => setEditData({
                      ...editData, 
                      personal_information: { ...editData.personal_information, email: e.target.value } 
                    })}
                    className="w-full bg-white border border-black/5 p-3 focus:outline-none focus:border-black"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Summary</label>
                <textarea 
                  rows={6}
                  value={editData.summary}
                  onChange={(e) => setEditData({ ...editData, summary: e.target.value })}
                  className="w-full bg-white border border-black/5 p-3 focus:outline-none focus:border-black resize-none"
                />
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-12">
              {editData.professional_experience.map((exp, i) => (
                <div key={i} className="p-6 border border-black/5 bg-white space-y-4 group">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-zinc-900">Experience #{i+1}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) => {
                        const newExp = [...editData.professional_experience];
                        newExp[i].company = e.target.value;
                        setEditData({ ...editData, professional_experience: newExp });
                      }}
                      className="w-full border border-black/5 p-2 text-sm"
                    />
                    <input 
                      placeholder="Designation"
                      value={exp.designation}
                      onChange={(e) => {
                        const newExp = [...editData.professional_experience];
                        newExp[i].designation = e.target.value;
                        setEditData({ ...editData, professional_experience: newExp });
                      }}
                      className="w-full border border-black/5 p-2 text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Custom Pages</h2>
                <button 
                  onClick={addCustomPage}
                  className="flex items-center gap-2 px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  <Plus size={14} /> Add Page
                </button>
              </div>

              <div className="space-y-6">
                {editData.custom_pages?.map((page, i) => (
                  <div key={page.id} className="p-6 border border-black/5 bg-white space-y-4">
                    <div className="flex justify-between items-center">
                      <input 
                        value={page.title}
                        onChange={(e) => {
                          const newPages = [...(editData.custom_pages || [])];
                          newPages[i].title = e.target.value;
                          setEditData({ ...editData, custom_pages: newPages });
                        }}
                        className="font-bold text-lg focus:outline-none border-b border-transparent focus:border-black/10"
                      />
                      <button 
                        onClick={() => removeCustomPage(page.id)}
                        className="text-zinc-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <textarea 
                      rows={10}
                      value={page.content}
                      onChange={(e) => {
                        const newPages = [...(editData.custom_pages || [])];
                        newPages[i].content = e.target.value;
                        setEditData({ ...editData, custom_pages: newPages });
                      }}
                      placeholder="Enter Markdown content..."
                      className="w-full bg-zinc-50 border border-black/5 p-4 font-mono text-sm focus:outline-none focus:border-black resize-none"
                    />
                  </div>
                ))}

                {(!editData.custom_pages || editData.custom_pages.length === 0) && (
                  <div className="py-20 text-center border border-dashed border-black/10 rounded-xl">
                    <p className="text-zinc-300 italic">No custom pages yet.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
