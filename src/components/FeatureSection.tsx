import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Digital Innovation',
    description: "Pushing the boundaries of what is possible in the digital realm",
    gradient: 'from-cyber-mint to-cyber-blue',
  },
  {
    title: 'SOHO',
    description: 'Small Office/Home Office. Work from home',
    gradient: 'from-cyber-blue to-cyber-purple',
  },
  {
    title: 'Future Tech',
    description: 'Embracing the technologies of tomorrow, today',
    gradient: 'from-cyber-purple to-cyber-mint',
  },
];

export default function FeatureSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}