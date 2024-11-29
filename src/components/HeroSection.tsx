import React from 'react';
import FloatingIcons from './FloatingIcons';

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
      <div className="text-center relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-64 h-64 bg-cyber-mint/5 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>
        <a href="/" className="inline-block">
          <h1 className="text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-r from-cyber-mint via-cyber-blue to-cyber-purple bg-clip-text text-transparent animate-glow">
            allnumbers012.online
          </h1>
        </a>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-1">
          <img 
            src="/images/matrix-cat.png" 
            alt="Matrix Cat" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain animate-float"
            style={{ filter: 'drop-shadow(0 0 8px #2FFFA0)' }}
          />
          <div className="flex flex-col sm:flex-row items-center gap-1">
            <span className="text-sm text-cyber-mint">$ There is no rule</span>
            <span className="text-sm text-cyber-mint">against the rule to change the rules...</span>
          </div>
          <img 
            src="/images/matrix-cat.png" 
            alt="Matrix Cat" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain animate-float"
            style={{ filter: 'drop-shadow(0 0 8px #2FFFA0)' }}
          />
        </div>
        <div className="py-1">
          <FloatingIcons />
        </div>
      </div>
    </div>
  );
}