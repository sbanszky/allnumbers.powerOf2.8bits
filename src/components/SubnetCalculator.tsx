import React, { useState } from 'react';
import { calculateSubnetInfo, generateSubnetOptions } from '../utils/subnetUtils';
import { isValidIp } from '../utils/ipUtils';

const subnetOptions = generateSubnetOptions();

export default function SubnetCalculator() {
  const [networkClass, setNetworkClass] = useState<'any' | 'a' | 'b' | 'c'>('any');
  const [cidr, setCidr] = useState('24');
  const [ipAddress, setIpAddress] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);
    
    if (!ipAddress) {
      setError('Please enter an IP address');
      return;
    }

    if (!isValidIp(ipAddress)) {
      setError('Please enter a valid IP address');
      return;
    }

    const info = calculateSubnetInfo(ipAddress, parseInt(cidr));
    setResult(info);
  };

  const handleClear = () => {
    setIpAddress('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-cyber-purple">IPv4 Subnet Calculator</h1>
      
      <div className="bg-black/30 p-6 rounded-lg cyber-border space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Network Class</label>
            <div className="flex space-x-4">
              {[
                { value: 'any', label: 'Any' },
                { value: 'a', label: 'A' },
                { value: 'b', label: 'B' },
                { value: 'c', label: 'C' }
              ].map(option => (
                <label key={option.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={option.value}
                    checked={networkClass === option.value}
                    onChange={(e) => setNetworkClass(e.target.value as any)}
                    className="text-cyber-mint focus:ring-cyber-mint"
                  />
                  <span className="text-cyber-mint">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Subnet Mask</label>
            <div className="flex space-x-4">
              <select
                value={cidr}
                onChange={(e) => setCidr(e.target.value)}
                className="bg-gray-800 text-cyber-mint rounded px-3 py-2 focus:ring-cyber-mint focus:border-cyber-mint"
              >
                {subnetOptions.map(({ cidr, mask }) => (
                  <option key={cidr} value={cidr}>
                    /{cidr} ({mask})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">IP Address</label>
            <input
              type="text"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder="e.g., 192.168.1.1"
              className="w-full bg-gray-800 text-cyber-mint rounded px-3 py-2 focus:ring-cyber-mint focus:border-cyber-mint"
            />
          </div>

          {error && (
            <div className="text-red-500 bg-red-500/10 p-3 rounded">
              {error}
            </div>
          )}

          <div className="flex space-x-4">
            <button
              onClick={handleCalculate}
              className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-6 py-2 rounded transition-colors duration-200"
            >
              Calculate
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-700 hover:bg-gray-600 text-cyber-mint px-6 py-2 rounded transition-colors duration-200"
            >
              Clear
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-cyber-mint mb-4">Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Network Address:</p>
                <p className="text-cyber-mint">{result.networkAddress}</p>
              </div>
              <div>
                <p className="text-gray-400">Subnet Mask:</p>
                <p className="text-cyber-mint">{result.subnetMask}</p>
              </div>
              <div>
                <p className="text-gray-400">Broadcast Address:</p>
                <p className="text-cyber-mint">{result.broadcastAddress}</p>
              </div>
              <div>
                <p className="text-gray-400">CIDR Notation:</p>
                <p className="text-cyber-mint">/{result.cidr}</p>
              </div>
              <div>
                <p className="text-gray-400">First Host:</p>
                <p className="text-cyber-mint">{result.firstHost}</p>
              </div>
              <div>
                <p className="text-gray-400">Last Host:</p>
                <p className="text-cyber-mint">{result.lastHost}</p>
              </div>
              <div>
                <p className="text-gray-400">Total Hosts:</p>
                <p className="text-cyber-mint">{result.totalHosts.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400">Usable Hosts:</p>
                <p className="text-cyber-mint">{result.usableHosts.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}