import React from 'react';
import { History, MessageSquare, Lightbulb } from 'lucide-react';
import LOAnimation from './animations/LOAnimation';

export default function LOStory() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border space-y-8">
        <h1 className="text-4xl font-bold text-cyber-purple mb-8">The Story of "LO"</h1>

        {/* Introduction */}
        <section className="space-y-6">
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <div className="flex items-center gap-3 mb-4">
              <History className="w-6 h-6 text-cyber-mint" />
              <h2 className="text-2xl font-bold text-cyber-mint">The First Message</h2>
            </div>
            <p className="text-cyber-purple">
              Once upon a time, in a land where technology was still in its toddler phase, there was a computer 
              named Charley. Charley was a big, boxy fellow, with blinking lights for eyebrows and a hum that 
              could lull you to sleep if you listened too closely.
            </p>
          </div>
        </section>

        {/* The Mission */}
        <section className="space-y-6">
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-cyber-mint" />
              <h2 className="text-2xl font-bold text-cyber-mint">The Mission</h2>
            </div>
            <div className="space-y-4 text-cyber-purple">
              <p>
                Charley lived in a room filled with other computers, all connected through a network called ARPANET, 
                which was essentially the Internet's great-great-great-grandfather. One day, Charley was tasked with 
                a mission that would go down in history: to send the very first message across this newfangled network 
                to another computer named Simon.
              </p>
              <p>
                The message was to be a simple "LOGIN," but Charley, being a computer with a bit of a rebellious streak, 
                decided to get creative and philosophical with his message.
              </p>
            </div>
          </div>
        </section>

        {/* The Attempt with Animation */}
        <section className="space-y-6">
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-cyber-mint" />
              <h2 className="text-2xl font-bold text-cyber-mint">The Historic Moment</h2>
            </div>
            <div className="space-y-4">
              <LOAnimation />
              <div className="text-cyber-purple">
                <p>
                  Charley's operator, Dave, typed in the commands, and Charley began his transmission. The first 
                  letter, "L," zipped through the wires with the enthusiasm of a child learning to jump rope. It 
                  arrived at Simon's end, and for a moment, there was a pause, a digital silence filled with anticipation. 
                  Then, Charley sent the "O."
                </p>
                <p>
                  But here's where the story takes a comedic turn. Charley, in his eagerness to be the first to send 
                  a message, got a bit too excited. The system hiccupped, choked, and then... crashed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        {/* ... */}
      </div>
    </div>
  );
}