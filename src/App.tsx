import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import PowersAnimation from './components/animations/PowersAnimation';
import IPv4BitAnimation from './components/animations/IPv4BitAnimation';

function App() {
  return (
    <Router>
      <div className="min-h-screen cyber-grid">
        <div className="relative overflow-hidden">
          <div className="flex flex-col min-h-screen">
            <HeroSection />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="bg-black/30 p-8 rounded-lg cyber-border space-y-8">
                <h1 className="text-4xl font-bold text-cyber-purple mb-8">The Power of 2</h1>
                <div className="space-y-8">
                  <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                    <h2 className="text-2xl font-bold text-cyber-mint mb-4">Powers of 2 in Computing</h2>
                    <p className="text-cyber-purple mb-6">
                      Powers of 2 are fundamental to computing, from binary arithmetic to memory addressing. 
                      In IPv4, we use a 32-bit address space, allowing for 2³² unique addresses, which equals 4,294,967,296 possible unique IP addresses.
                    </p>
                    <PowersAnimation />
                  </div>
                  <IPv4BitAnimation />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;