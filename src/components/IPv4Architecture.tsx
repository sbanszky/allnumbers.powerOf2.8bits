import React from 'react';
import { Network, Server, Smartphone, Router, Binary, Hash, Cpu } from 'lucide-react';
import PowersAnimation from './animations/PowersAnimation';
import IPv4BitAnimation from './animations/IPv4BitAnimation';

export default function IPv4Architecture() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border space-y-8">
        <h1 className="text-4xl font-bold text-cyber-purple mb-8">IPv4: A 32-bit Addressing Scheme</h1>

        <section className="space-y-6">
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <h2 className="text-2xl font-bold text-cyber-mint mb-4">Address Space</h2>
            <p className="text-cyber-purple mb-6">
              IPv4 uses a 32-bit address space, allowing for 2³² unique addresses, which equals 4,294,967,296 possible unique IP addresses.
            </p>
            
            <PowersAnimation />
            
            <IPv4BitAnimation />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyber-mint">Hierarchy of Address Usage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-6 h-6 text-cyber-mint" />
                  <h3 className="text-xl font-semibold text-cyber-mint">Hosts (End Devices)</h3>
                </div>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Devices users directly interact with (computers, smartphones, IoT devices)</li>
                  <li>• Typically consumers of content</li>
                  <li>• Download files, browse websites</li>
                </ul>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <div className="flex items-center gap-3 mb-4">
                  <Router className="w-6 h-6 text-cyber-mint" />
                  <h3 className="text-xl font-semibold text-cyber-mint">Network Devices</h3>
                </div>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Routers, switches, infrastructure devices</li>
                  <li>• Facilitate communication within/between networks</li>
                  <li>• Manage routing, switching, traffic control</li>
                </ul>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-cyber-mint" />
                  <h3 className="text-xl font-semibold text-cyber-mint">Servers</h3>
                </div>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Host applications, websites, databases</li>
                  <li>• Providers of content and services</li>
                  <li>• Upload/deliver resources to end-users</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyber-mint">The Role of IPv4 in Networking</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <div className="flex items-center gap-3 mb-4">
                  <Network className="w-6 h-6 text-cyber-mint" />
                  <h3 className="text-xl font-semibold text-cyber-mint">Address Types</h3>
                </div>
                <p className="text-cyber-purple">
                  IPv4 assigns each device a unique address to identify it in the network. These addresses can be:
                </p>
                <ul className="mt-2 space-y-2 text-cyber-purple">
                  <li>• Public: Globally unique and routable over the internet</li>
                  <li>• Private: Reserved for internal networks (e.g., behind a NAT device)</li>
                </ul>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <h3 className="text-xl font-semibold text-cyber-mint mb-4">Reducing the Internet to 32 Bits</h3>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Every device on the internet is identified by its IPv4 address</li>
                  <li>• Addresses are represented in dotted decimal notation (e.g., 192.168.1.1)</li>
                  <li>• The 32-bit address space encompasses the entire logical structure of IPv4 networking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyber-mint">Number Systems and Addressing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <div className="flex items-center gap-3 mb-4">
                  <Hash className="w-6 h-6 text-cyber-mint" />
                  <h3 className="text-xl font-semibold text-cyber-mint">Decimal</h3>
                </div>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Base: 10</li>
                  <li>• Digits: 0 to 9</li>
                  <li>• Usage: Daily calculations</li>
                  <li>• Example: 245</li>
                </ul>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <div className="flex items-center gap-3 mb-4">
                  <Binary className="w-6 h-6 text-cyber-mint" />
                  <h3 className="text-xl font-semibold text-cyber-mint">Binary</h3>
                </div>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Base: 2</li>
                  <li>• Digits: 0 and 1</li>
                  <li>• Usage: Computing core</li>
                  <li>• Example: 1101 = 13₁₀</li>
                </ul>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-cyber-mint" />
                  <h3 className="text-xl font-semibold text-cyber-mint">Hexadecimal</h3>
                </div>
                <ul className="space-y-2 text-cyber-purple">
                  <li>• Base: 16</li>
                  <li>• Digits: 0-9, A-F</li>
                  <li>• Usage: Compact notation</li>
                  <li>• Example: 1A3 = 419₁₀</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}