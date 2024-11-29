import React from 'react';
import { Network, Zap, Shield, Smartphone } from 'lucide-react';

export default function IPv6NextGen() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border space-y-8">
        <h1 className="text-4xl font-bold text-cyber-purple mb-8">Transition to IPv6: A Leap to 128 Bits</h1>

        <section className="space-y-6">
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-cyber-mint" />
              <h2 className="text-2xl font-bold text-cyber-mint">Why the Jump?</h2>
            </div>
            <div className="space-y-4 text-cyber-purple">
              <p>
                IPv4's 32-bit address space has limitations. With the explosion of internet-connected devices, 
                IPv4 addresses are scarce.
              </p>
              <ul className="space-y-2">
                <li>• IPv6 introduces a 128-bit address space</li>
                <li>• Allows 2¹²⁸ addresses (340,282,366,920,938,463,463,374,607,431,768,211,456)</li>
                <li>• Makes IPv6 future-proof</li>
                <li>• Eliminates the need for NAT in most cases</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Network className="w-6 h-6 text-cyber-mint" />
              <h2 className="text-2xl font-bold text-cyber-mint">Changes in Roles and Functions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <h3 className="text-xl font-semibold text-cyber-mint mb-4">Core Functions</h3>
                <p className="text-cyber-purple mb-4">
                  The roles of hosts, network devices, and servers remain the same, but IPv6 introduces 
                  significant improvements:
                </p>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Simplified header structure for faster processing</li>
                  <li>• Better support for multicast and QoS</li>
                  <li>• Native support for mobile IP</li>
                </ul>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <h3 className="text-xl font-semibold text-cyber-mint mb-4">Modern Enhancements</h3>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Built-in security with IPSec</li>
                  <li>• Auto-configuration capabilities</li>
                  <li>• Improved packet handling</li>
                  <li>• Enhanced mobility support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-cyber-mint" />
              <h2 className="text-2xl font-bold text-cyber-mint">Future-Proofing the Internet</h2>
            </div>
            <div className="space-y-4 text-cyber-purple">
              <p>
                IPv6 was designed with the future in mind, addressing not just the address space limitation 
                but also incorporating features that support emerging technologies:
              </p>
              <ul className="space-y-2">
                <li>• IoT device proliferation</li>
                <li>• 5G and beyond mobile networks</li>
                <li>• Smart city infrastructure</li>
                <li>• Edge computing requirements</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}