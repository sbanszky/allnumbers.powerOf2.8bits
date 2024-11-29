import React from 'react';
import { Mail } from 'lucide-react';

export default function EmailContact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border">
        <h2 className="text-3xl font-bold mb-8 text-cyber-mint">Contact</h2>
        
        <div className="flex items-center justify-center space-x-3 text-cyber-mint hover:text-cyber-blue transition-colors">
          <Mail className="w-5 h-5" />
          <a 
            href="mailto:contact@allnumbers012.online"
            className="text-lg hover:underline"
          >
            contact@allnumbers012.online
          </a>
        </div>
      </div>
    </div>
  );
}