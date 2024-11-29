import React from 'react';

export default function IntroText() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="terminal-container bg-black/30 p-6 rounded-lg cyber-border">
        <div className="terminal-header flex items-center mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="space-y-4">
          <p className="terminal-line text-cyber-mint opacity-0 animate-terminal-1">
            Let's discover the amazing technologies that hold the Internet together, which are the building blocks of communication between people, devices, and ideas all around the world.
          </p>
          <p className="terminal-line text-cyber-mint opacity-0 animate-terminal-2">
            We will crystalize the basic concepts that are actually behind all of it, showing them in a straightforward and comprehensible way to all, no matter if you are a novice or an experienced professional.
          </p>
          <p className="terminal-line text-cyber-mint opacity-0 animate-terminal-3">
            My aim is to make networking straightforward, so that it becomes obvious and empowering for everybody.
          </p>
        </div>
      </div>
    </div>
  );
}