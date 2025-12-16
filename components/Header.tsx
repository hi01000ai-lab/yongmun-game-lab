import React from 'react';
import { Gamepad2, Terminal } from 'lucide-react';
import { SCHOOL_NAME, APP_TITLE } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-cyber-dark border-b border-cyber-gray sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-neonPink to-cyber-neonBlue rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-cyber-black rounded-full p-2 border border-cyber-gray">
              <Gamepad2 className="w-8 h-8 text-cyber-neonBlue" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold font-mono tracking-tighter text-white">
              <span className="text-cyber-neonPink">{SCHOOL_NAME}</span> {APP_TITLE}
            </h1>
            <span className="text-xs text-cyber-neonGreen font-mono typing-effect">
              System.State: Online_
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2 text-cyber-gray text-sm font-mono border border-cyber-gray rounded px-3 py-1 bg-cyber-black">
           <Terminal size={14} className="text-cyber-neonPurple" />
           <span>Est. 2025</span>
        </div>
      </div>
    </header>
  );
};

export default Header;