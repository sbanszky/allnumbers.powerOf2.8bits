import React from 'react';
import { Network, Server, Shield, Globe, Cpu, Radio, Layers } from 'lucide-react';

export default function Standards() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-black/30 p-8 rounded-lg cyber-border space-y-8">
        <h1 className="text-4xl font-bold text-cyber-purple mb-8">OSI Model and Networking Standards</h1>

        {/* Physical Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Physical Layer (Layer 1)</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <h3 className="text-xl font-semibold text-cyber-mint mb-4">Standards</h3>
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">IEEE 802.3 (Ethernet)</span></li>
              <li>• <span className="text-cyber-mint">IEEE 802.11 (Wi-Fi)</span></li>
              <li>• <span className="text-cyber-mint">ITU-T G.703/704</span> for physical interfaces</li>
              <li>• <span className="text-cyber-mint">TIA/EIA-568</span> for cabling standards</li>
            </ul>
            <p className="mt-4 text-cyber-purple">
              Defines electrical, mechanical, and functional standards for activating, maintaining, and deactivating physical links.
            </p>
          </div>
        </section>

        {/* Data Link Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Network className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Data Link Layer (Layer 2)</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <h3 className="text-xl font-semibold text-cyber-mint mb-4">Standards</h3>
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">IEEE 802.2 LLC</span> (Logical Link Control)</li>
              <li>• <span className="text-cyber-mint">IEEE 802.3 MAC</span> (Media Access Control)</li>
              <li>• <span className="text-cyber-mint">IEEE 802.1D/Q</span> for bridging and VLANs</li>
              <li>• <span className="text-cyber-mint">PPP</span> (Point-to-Point Protocol)</li>
            </ul>
            <p className="mt-4 text-cyber-purple">
              Provides node-to-node data transfer and handles physical addressing.
            </p>
          </div>
        </section>

        {/* Network Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Network Layer (Layer 3)</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <h3 className="text-xl font-semibold text-cyber-mint mb-4">Standards</h3>
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">IPv4 (RFC 791)</span> and <span className="text-cyber-mint">IPv6 (RFC 2460)</span></li>
              <li>• <span className="text-cyber-mint">OSPF (RFC 2328)</span></li>
              <li>• <span className="text-cyber-mint">BGP (RFC 4271)</span></li>
              <li>• <span className="text-cyber-mint">IS-IS (ISO/IEC 10589)</span></li>
            </ul>
            <p className="mt-4 text-cyber-purple">
              Manages device addressing and determines the best path for data transmission.
            </p>
          </div>
        </section>

        {/* Transport Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Transport Layer (Layer 4)</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <h3 className="text-xl font-semibold text-cyber-mint mb-4">Standards</h3>
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">TCP (RFC 793)</span> for reliable communication</li>
              <li>• <span className="text-cyber-mint">UDP (RFC 768)</span> for simpler, faster communication</li>
              <li>• <span className="text-cyber-mint">SCTP (RFC 2960)</span> for multi-stream data transfer</li>
            </ul>
            <p className="mt-4 text-cyber-purple">
              Provides transparent transfer of data between end systems.
            </p>
          </div>
        </section>

        {/* Session Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Radio className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Session Layer (Layer 5)</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <h3 className="text-xl font-semibold text-cyber-mint mb-4">Standards</h3>
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">NetBIOS</span></li>
              <li>• <span className="text-cyber-mint">RPC</span> (Remote Procedure Call)</li>
              <li>• <span className="text-cyber-mint">Socks</span></li>
            </ul>
            <p className="mt-4 text-cyber-purple">
              Manages and structures interactions between applications.
            </p>
          </div>
        </section>

        {/* Presentation Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Presentation Layer (Layer 6)</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <h3 className="text-xl font-semibold text-cyber-mint mb-4">Standards</h3>
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">MIME</span> (Multipurpose Internet Mail Extensions)</li>
              <li>• <span className="text-cyber-mint">SSL/TLS</span> for encryption</li>
              <li>• <span className="text-cyber-mint">XDR</span> (External Data Representation)</li>
            </ul>
            <p className="mt-4 text-cyber-purple">
              Translates data between application and network formats.
            </p>
          </div>
        </section>

        {/* Application Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-cyber-mint" />
            <h2 className="text-2xl font-bold text-cyber-mint">Application Layer (Layer 7)</h2>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-cyber-mint/10">
            <h3 className="text-xl font-semibold text-cyber-mint mb-4">Standards</h3>
            <ul className="space-y-3 text-cyber-purple">
              <li>• <span className="text-cyber-mint">HTTP/HTTPS (RFC 7230-7235)</span></li>
              <li>• <span className="text-cyber-mint">SMTP (RFC 5321)</span></li>
              <li>• <span className="text-cyber-mint">IMAP (RFC 3501)</span></li>
              <li>• <span className="text-cyber-mint">FTP (RFC 959)</span></li>
              <li>• <span className="text-cyber-mint">DNS (RFC 1034, 1035)</span></li>
              <li>• <span className="text-cyber-mint">SNMP (RFC 1157)</span></li>
            </ul>
            <p className="mt-4 text-cyber-purple">
              Provides network services directly to end-users and applications.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}