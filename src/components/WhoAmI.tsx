import React from 'react';

export default function WhoAmI() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-cyber-mint">whoami</h2>
          
          <div className="space-y-1">
            <p className="text-xl text-cyber-mint">network engineer</p>
            <p className="text-lg text-cyber-purple">(Digital Pathfinder)</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyber-mint">Mission Statement:</h3>
            <p className="text-cyber-purple">
              To illuminate the hidden pathways of the internet, revealing the intricate dance of data packets, 
              the magic of binary communication, and the seamless integration of technology into everyday life.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyber-mint">Interests:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="text-cyber-mint">Binary Code:</span>{' '}
                <span className="text-cyber-purple">
                  As network engineers, we see binary code not just as language 
                  but as the very essence of digital communication, where 1s and 0s underpin every packet, route, and connection in our networks.
                </span>
              </li>
              <li>
                <span className="text-cyber-mint">Network Protocols:</span>{' '}
                <span className="text-cyber-purple">
                  Unraveling the mysteries of how data travels from point A to B, 
                  through the lenses of IP and MAC addresses.
                </span>
              </li>
              <li>
                <span className="text-cyber-mint">Smart Homes:</span>{' '}
                <span className="text-cyber-purple">
                  Transforming living spaces into hubs of efficiency and comfort, 
                  where devices speak to each other in a harmonious digital symphony.
                </span>
              </li>
              <li>
                <span className="text-cyber-mint">Home Office:</span>{' '}
                <span className="text-cyber-purple">
                  Creating environments where productivity thrives, 
                  leveraging the latest in tech to blur the lines between work and home.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyber-mint">Philosophy:</h3>
            <p className="text-cyber-purple italic">
              "In the binary world, every bit counts."
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyber-mint">Call to Action:</h3>
            <p className="text-cyber-purple">
              Join me on this digital expedition, where we'll not only witness the beauty of technology 
              but learn to harness it for a smarter, more connected world. Let's decode the future together 
              at allnumbers012.online.
            </p>
          </div>
          
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <img 
              src="/images/rules.jpg" 
              alt="Rules" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8 bg-gray-900/50 p-6 rounded-lg border border-cyber-mint/20">
            <div className="space-y-4 font-mono">
              <p className="text-cyber-mint opacity-0 animate-terminal-1">
                $ whoami
              </p>
              <p className="text-cyber-mint opacity-0 animate-terminal-2">
                Hey, buddy, do you remember who's logged in right now?
              </p>
              <div className="flex items-center space-x-2 opacity-0 animate-terminal-3">
                <p className="text-cyber-mint">
                  Duh, it's you, obviously!
                </p>
                <img 
                  src="/images/matrix-cat.png" 
                  alt="Matrix Cat Signature" 
                  className="w-6 h-6 object-contain"
                  style={{ filter: 'drop-shadow(0 0 4px #2FFFA0)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}