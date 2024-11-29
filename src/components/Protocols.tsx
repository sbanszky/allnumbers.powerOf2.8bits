import React from 'react';
import { Network, Server, Shield, Globe, Cpu, Radio } from 'lucide-react';

export default function Protocols() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border space-y-8">
        <h1 className="text-4xl font-bold text-cyber-purple mb-8">Internet Protocols</h1>

        {/* Network Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Network className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Network Layer Protocols</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">IPv4:</span> Provides addressing and routing for data packets across networks</li>
              <li>• <span className="text-cyber-mint">IPv6:</span> Evolution from IPv4, offering larger address space and improved routing</li>
              <li>• <span className="text-cyber-mint">ARP:</span> Maps IP addresses to physical (MAC) addresses on a local network</li>
              <li>• <span className="text-cyber-mint">RARP:</span> Used to obtain an IP address for a given hardware address</li>
              <li>• <span className="text-cyber-mint">ICMP:</span> Used for error reporting, diagnostics, and control messages</li>
            </ul>
          </div>
        </section>

        {/* Transport Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Transport Layer Protocols</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">TCP:</span> Ensures reliable, ordered, and error-checked delivery</li>
              <li>• <span className="text-cyber-mint">UDP:</span> Offers connectionless transmission with minimal latency</li>
              <li>• <span className="text-cyber-mint">SCTP:</span> Provides reliable, message-oriented communication</li>
              <li>• <span className="text-cyber-mint">DCCP:</span> Provides unreliable connections with congestion control</li>
            </ul>
          </div>
        </section>

        {/* Security */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Transport Layer Security</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">TLS/SSL:</span> Protocols for establishing encrypted links between network devices</li>
            </ul>
          </div>
        </section>

        {/* Application Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Application Layer Protocols</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <h3 className="text-xl font-semibold text-cyber-mint mb-4">Web and Data Transfer</h3>
              <ul className="space-y-3 text-cyber-purple">
                <li>• <span className="text-cyber-mint">HTTP/HTTPS:</span> Used for transferring web pages</li>
                <li>• <span className="text-cyber-mint">FTP/SFTP/FTPS:</span> For file transfers over a network</li>
              </ul>
            </div>

            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <h3 className="text-xl font-semibold text-cyber-mint mb-4">Email</h3>
              <ul className="space-y-3 text-cyber-purple">
                <li>• <span className="text-cyber-mint">SMTP:</span> For sending emails</li>
                <li>• <span className="text-cyber-mint">IMAP/POP3:</span> For retrieving emails from servers</li>
              </ul>
            </div>

            <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
              <h3 className="text-xl font-semibold text-cyber-mint mb-4">Remote Access</h3>
              <ul className="space-y-3 text-cyber-purple">
                <li>• <span className="text-cyber-mint">SSH:</span> Provides secure command-line login</li>
                <li>• <span className="text-cyber-mint">Telnet:</span> Older protocol for remote access</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Routing */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Radio className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Routing Protocols</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">BGP:</span> Primary protocol for exchanging routing information between autonomous systems</li>
              <li>• <span className="text-cyber-mint">OSPF:</span> Interior Gateway Protocol used within larger networks</li>
              <li>• <span className="text-cyber-mint">RIP:</span> Older distance-vector routing protocol</li>
              <li>• <span className="text-cyber-mint">IS-IS:</span> For routing information exchange within a network domain</li>
            </ul>
          </div>
        </section>

        {/* Emerging Protocols */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Emerging and Specialized Protocols</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">QUIC:</span> Transport layer protocol for reducing latency and improving security</li>
              <li>• <span className="text-cyber-mint">HTTP/3:</span> Third major version of HTTP, using QUIC as transport layer</li>
              <li>• <span className="text-cyber-mint">WebSocket:</span> Provides full-duplex communication channels over TCP</li>
              <li>• <span className="text-cyber-mint">CoAP:</span> Designed for constrained nodes in IoT</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}