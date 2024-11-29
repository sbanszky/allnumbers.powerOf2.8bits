import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface PowersDisplayProps {
  currentPower: number;
  result: string;
  isPlaying: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onPlayPause: () => void;
  progress: number;
}

export default function PowersDisplay({
  currentPower,
  result,
  isPlaying,
  onPrevious,
  onNext,
  onPlayPause,
  progress
}: PowersDisplayProps) {
  return (
    <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10 mt-6">
      <h3 className="text-xl font-bold text-cyber-mint mb-4">Interactive Powers of 2</h3>
      <div className="flex flex-col items-center space-y-4">
        <div className="text-2xl text-cyber-purple font-mono">
          2<sup className="text-cyber-mint">{currentPower}</sup> = <span className="text-cyber-mint">{result}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onPrevious}
            disabled={currentPower === 0}
            className="p-2 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-cyber-mint"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={onPlayPause}
            className="p-2 rounded-full hover:bg-gray-800 text-cyber-mint"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
          
          <button
            onClick={onNext}
            disabled={currentPower === 32}
            className="p-2 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-cyber-mint"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-cyber-mint via-cyber-blue to-cyber-purple h-2 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}