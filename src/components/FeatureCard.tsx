import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  gradient: string;
}

export default function FeatureCard({ title, description, gradient }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-mint via-cyber-blue to-cyber-purple rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-black rounded-lg p-6 cyber-border">
        <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}