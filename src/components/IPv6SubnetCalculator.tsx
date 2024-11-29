import React, { useState } from 'react';
import { isValidIPv6, expandIPv6, hexToBinary, binaryToHex, compressIPv6 } from '../utils/ipv6Utils';

interface SubnetInfo {
  networkAddress: string;
  firstHost: string;
  lastHost: string;
  prefix: number;
  totalAddresses: string;
  usableAddresses: string;
}

export default function IPv6SubnetCalculator() {
  const [ipv6Address, setIpv6Address] = useState('');
  const [prefix, setPrefix] = useState('64');
  const [result, setResult] = useState<SubnetInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);
    
    if (!ipv6Address) {
      setError('Please enter an IPv6 address');
      return;
    }

    if (!isValidIPv6(ipv6Address)) {
      setError('Please enter a valid IPv6 address');
      return;
    }

    const prefixNum = parseInt(prefix, 10);
    if (prefixNum < 1 || prefixNum > 128) {
      setError('Prefix length must be between 1 and 128');
      return;
    }

    const info = calculateSubnetInfo(ipv6Address, prefixNum);
    setResult(info);
  };

  const handleClear = () => {
    setIpv6Address('');
    setPrefix('64');
    setResult(null);
    setError(null);
  };

  const calculateSubnetInfo = (address: string, prefixLength: number): SubnetInfo => {
    // Convert address to full form
    const fullAddress = expandIPv6(address);
    const binaryAddress = hexToBinary(fullAddress);
    
    // Calculate network address (prefix part + zeros)
    const networkBinary = binaryAddress.slice(0, prefixLength).padEnd(128, '0');
    const networkAddress = binaryToHex(networkBinary);

    // Calculate first host (network address + 1)
    const firstHostBinary = networkBinary.slice(0, 127) + '1';
    const firstHost = binaryToHex(firstHostBinary);

    // Calculate last host (prefix part + ones except last bit)
    const lastHostBinary = networkBinary.slice(0, prefixLength) + '1'.repeat(127 - prefixLength) + '0';
    const lastHost = binaryToHex(lastHostBinary);

    // Total addresses calculation
    const totalAddresses = BigInt(2) ** BigInt(128 - prefixLength);
    const usableAddresses = totalAddresses - BigInt(2);

    return {
      networkAddress: compressIPv6(networkAddress),
      firstHost: compressIPv6(firstHost),
      lastHost: compressIPv6(lastHost),
      prefix: prefixLength,
      totalAddresses: totalAddresses.toString(),
      usableAddresses: usableAddresses.toString()
    };
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-cyber-purple">IPv6 Subnet Calculator</h1>
      
      <div className="bg-black/30 p-6 rounded-lg cyber-border space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Prefix Length</label>
            <select
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              className="bg-gray-800 text-cyber-mint rounded px-3 py-2 focus:ring-cyber-mint focus:border-cyber-mint"
            >
              {Array.from({ length: 128 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>/{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">IPv6 Address</label>
            <input
              type="text"
              value={ipv6Address}
              onChange={(e) => setIpv6Address(e.target.value)}
              placeholder="e.g., 2001:db8::"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Network Address:</p>
                <p className="text-cyber-mint break-all">{result.networkAddress}</p>
              </div>
              <div>
                <p className="text-gray-400">Prefix Length:</p>
                <p className="text-cyber-mint">/{result.prefix}</p>
              </div>
              <div>
                <p className="text-gray-400">First Host:</p>
                <p className="text-cyber-mint break-all">{result.firstHost}</p>
              </div>
              <div>
                <p className="text-gray-400">Last Host:</p>
                <p className="text-cyber-mint break-all">{result.lastHost}</p>
              </div>
              <div>
                <p className="text-gray-400">Total Addresses:</p>
                <p className="text-cyber-mint">{result.totalAddresses}</p>
              </div>
              <div>
                <p className="text-gray-400">Usable Addresses:</p>
                <p className="text-cyber-mint">{result.usableAddresses}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}