import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function LOAnimation() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < 4) {
      timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 1500);
    } else if (step >= 4) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [step, isPlaying]);

  const handlePlayPause = () => {
    if (step >= 4) {
      setStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-cyber-mint">First Message Attempt</h3>
        <button
          onClick={handlePlayPause}
          className="p-2 rounded-lg bg-cyber-purple/20 text-cyber-mint hover:bg-cyber-purple/30 transition-colors"
        >
          {isPlaying ? 'Reset' : 'Play'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* UCLA Computer */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-cyber-mint">
            <Terminal className="w-5 h-5" />
            <span>UCLA (Charley)</span>
          </div>
          <div className="bg-black/50 p-4 rounded-lg font-mono h-32 relative overflow-hidden">
            <div className={`transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Sending: L
            </div>
            <div className={`transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Sending: O
            </div>
            <div className={`transition-opacity duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Sending: G...
            </div>
            <div className={`transition-opacity duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; ERROR: Connection lost
              <span className="text-red-500 animate-pulse">▊</span>
            </div>
          </div>
        </div>

        {/* SRI Computer */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-cyber-mint">
            <Terminal className="w-5 h-5" />
            <span>SRI (Simon)</span>
          </div>
          <div className="bg-black/50 p-4 rounded-lg font-mono h-32 relative overflow-hidden">
            <div className={`transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Received: L
            </div>
            <div className={`transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Received: O
            </div>
            <div className={`transition-opacity duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
              &gt; Connection terminated
              <span className="text-red-500 animate-pulse">▊</span>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="col-span-2 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-cyber-mint to-cyber-purple transition-all duration-1000 ${
              step >= 4 ? 'w-0 opacity-0' : `w-[${step * 25}%]`
            }`}
            style={{ width: `${step * 25}%` }}
          />
        </div>
      </div>
    </div>
  );
}