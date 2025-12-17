import React from 'react';
import { TECH_STACK } from '../constants';
import { 
  Code2, Database, Cloud, Globe, Cpu, Server, 
  Terminal, Layers, Lock, Coffee, FileJson 
} from 'lucide-react';

const AuthorityStrip: React.FC = () => {
  // Duplicate the array to create a seamless loop
  const infiniteStack = [...TECH_STACK, ...TECH_STACK];

  const getIcon = (name: string, category: string) => {
    // Specific icon mapping
    if (name.includes('Java')) return <Coffee className="w-4 h-4 mr-2 text-red-400" />;
    if (name.includes('Docker')) return <BoxIcon className="w-4 h-4 mr-2 text-blue-400" />;
    if (name.includes('Mongo')) return <Database className="w-4 h-4 mr-2 text-green-500" />;
    if (name.includes('Gemini')) return <Cpu className="w-4 h-4 mr-2 text-purple-400" />;
    if (name.includes('Socket')) return <Globe className="w-4 h-4 mr-2 text-white" />;
    
    // Category fallback
    switch(category) {
        case 'Frontend': return <Globe className="w-4 h-4 mr-2 text-indigo-400" />;
        case 'Backend': return <Server className="w-4 h-4 mr-2 text-emerald-400" />;
        case 'DevOps': return <Cloud className="w-4 h-4 mr-2 text-sky-400" />;
        case 'AI': return <Cpu className="w-4 h-4 mr-2 text-purple-400" />;
        case 'Languages': return <Code2 className="w-4 h-4 mr-2 text-yellow-400" />;
        default: return <Code2 className="w-4 h-4 mr-2" />;
    }
  }

  return (
    <div className="w-full bg-surface border-y border-white/5 py-6 overflow-hidden relative z-10">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      
      <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {infiniteStack.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center mx-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-white/20 transition-colors"
          >
            {getIcon(tech.name, tech.category)}
            <span className="text-sm font-medium tracking-wider text-secondary group-hover:text-white uppercase">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple Box icon helper for Docker since lucide 'Box' might be generic
const BoxIcon = ({className}: {className: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
)

export default AuthorityStrip;