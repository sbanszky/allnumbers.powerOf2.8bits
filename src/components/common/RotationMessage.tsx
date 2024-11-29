import React from 'react';
import { RotateCcw } from 'lucide-react';

export default function RotationMessage() {
  return (
    <div className="md:hidden mb-4 flex items-center justify-center gap-2 bg-cyber-purple/20 p-3 rounded-lg text-cyber-mint">
      <RotateCcw className="w-5 h-5 animate-spin-slow" />
      <span>Rotate your device horizontally for best experience</span>
    </div>
  );
}