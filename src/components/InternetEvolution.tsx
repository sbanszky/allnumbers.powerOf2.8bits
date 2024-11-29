import React from 'react';
import { History, Network, Globe, Smartphone, Server, Shield, Cpu } from 'lucide-react';

export default function InternetEvolution() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border space-y-8">
        <h1 className="text-4xl font-bold text-cyber-purple mb-8">Internet Evolution Timeline</h1>

        {/* First "LO" Login Attempt */}
        <section className="space-y-6">
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <div className="flex items-center gap-3 mb-4">
              <History className="w-6 h-6 text-cyber-mint" />
              <h2 className="text-2xl font-bold text-cyber-mint">First "LO" Login Attempt (1969)</h2>
            </div>
            <p className="text-cyber-purple">
              The first attempt to log into a computer over ARPANET occurred on October 29, 1969, between UCLA 
              and the Stanford Research Institute (SRI). The system crashed after transmitting only the first 
              two characters "LO" of the intended message "LOGIN."
            </p>
          </div>
        </section>

        {/* Timeline Sections */}
        <div className="space-y-12">
          {/* 1960s - 1970s */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyber-mint flex items-center gap-2">
              <Network className="w-6 h-6" />
              1960s - 1970s: Early Networking Concepts
            </h2>
            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <ul className="space-y-4 text-cyber-purple">
                <li>• <span className="text-cyber-mint">ARPANET (1969):</span> Introduction of packet-switching technology</li>
                <li>• <span className="text-cyber-mint">NCP (1970):</span> Network Control Protocol used until TCP/IP transition</li>
              </ul>
            </div>
          </section>

          {/* 1980s */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyber-mint flex items-center gap-2">
              <Globe className="w-6 h-6" />
              1980s: The Birth of TCP/IP and IPv4
            </h2>
            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <ul className="space-y-4 text-cyber-purple">
                <li>• <span className="text-cyber-mint">TCP/IP Development (1974-1981):</span> Vint Cerf and Bob Kahn's protocol definition</li>
                <li>• <span className="text-cyber-mint">IPv4 Implementation (1981):</span> RFC 791 formalizes IPv4 specifications</li>
                <li>• <span className="text-cyber-mint">"Flag Day" (January 1, 1983):</span> ARPANET switches from NCP to TCP/IP</li>
                <li>• <span className="text-cyber-mint">DNS (1983-1984):</span> Domain Name System introduction</li>
                <li>• <span className="text-cyber-mint">NSFNET (1986):</span> National Science Foundation network backbone</li>
              </ul>
            </div>
          </section>

          {/* 1990s */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyber-mint flex items-center gap-2">
              <Server className="w-6 h-6" />
              1990s: The World Wide Web Era
            </h2>
            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <ul className="space-y-4 text-cyber-purple">
                <li>• <span className="text-cyber-mint">World Wide Web (1989-1991):</span> Tim Berners-Lee's proposal and first website</li>
                <li>• <span className="text-cyber-mint">Mosaic (1993):</span> First popular graphical web browser</li>
                <li>• <span className="text-cyber-mint">Commercialization (1995):</span> Rise of commercial websites like Amazon</li>
                <li>• <span className="text-cyber-mint">Search Engines:</span> Yahoo! (1994) and Google (1998)</li>
              </ul>
            </div>
          </section>

          {/* 2000s */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyber-mint flex items-center gap-2">
              <Smartphone className="w-6 h-6" />
              2000s: Broadband and Social Media
            </h2>
            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <ul className="space-y-4 text-cyber-purple">
                <li>• <span className="text-cyber-mint">Broadband Expansion:</span> Shift from dial-up to high-speed internet</li>
                <li>• <span className="text-cyber-mint">Social Media Rise:</span> Friendster, LinkedIn, MySpace, and Facebook (2004)</li>
                <li>• <span className="text-cyber-mint">Mobile Revolution:</span> iPhone launch (2007) accelerates mobile internet</li>
              </ul>
            </div>
          </section>

          {/* 2010s - 2020s */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyber-mint flex items-center gap-2">
              <Cpu className="w-6 h-6" />
              2010s - 2020s: Cloud Computing, IoT, and Beyond
            </h2>
            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <ul className="space-y-4 text-cyber-purple">
                <li>• <span className="text-cyber-mint">IPv6 Deployment:</span> Broader adoption for expanded address space</li>
                <li>• <span className="text-cyber-mint">Cloud Services:</span> AWS, Google Cloud Platform, Microsoft Azure</li>
                <li>• <span className="text-cyber-mint">IoT Growth:</span> Smart homes, wearables, industrial applications</li>
                <li>• <span className="text-cyber-mint">AI Integration:</span> Machine learning in network operations</li>
                <li>• <span className="text-cyber-mint">5G Networks:</span> Next-generation mobile connectivity</li>
                <li>• <span className="text-cyber-mint">Web3:</span> Emergence of blockchain and decentralized technologies</li>
              </ul>
            </div>
          </section>

          {/* Security Evolution */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyber-mint flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Privacy and Security Evolution
            </h2>
            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <ul className="space-y-4 text-cyber-purple">
                <li>• <span className="text-cyber-mint">Early Challenges:</span> Limited security in initial protocols</li>
                <li>• <span className="text-cyber-mint">Protocol Evolution:</span> Development of SSL/TLS, HTTPS</li>
                <li>• <span className="text-cyber-mint">Regulations:</span> GDPR implementation (2018)</li>
                <li>• <span className="text-cyber-mint">Modern Security:</span> Zero-trust architecture, AI-powered security</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}