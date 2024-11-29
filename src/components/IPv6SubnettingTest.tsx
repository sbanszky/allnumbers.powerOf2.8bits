import React, { useState, useEffect } from 'react';
import RotationMessage from './common/RotationMessage';

interface IPv6Answer {
  network: string;
  firstHost: string;
  lastHost: string;
}

export default function IPv6SubnettingTest() {
  const [targetIPv6, setTargetIPv6] = useState({ address: '', prefix: '' });
  const [answers, setAnswers] = useState<IPv6Answer>({
    network: '',
    firstHost: '',
    lastHost: ''
  });
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [correctAnswers, setCorrectAnswers] = useState<Partial<IPv6Answer>>({});

  const generateRandomIPv6 = () => {
    // Generate random IPv6 address within 2000::/3 range
    const segments = Array.from({ length: 8 }, (_, i) => {
      if (i === 0) {
        // Ensure first segment starts with '2' for global unicast
        return '2' + Math.floor(Math.random() * 0xfff).toString(16).padStart(3, '0');
      }
      return Math.floor(Math.random() * 0xffff).toString(16).padStart(4, '0');
    });
    
    // Generate random prefix length between 48 and 64
    const prefix = Math.floor(Math.random() * (64 - 48 + 1) + 48);

    setTargetIPv6({
      address: segments.join(':'),
      prefix: prefix.toString()
    });

    setAnswers({
      network: '',
      firstHost: '',
      lastHost: ''
    });
    setResults({});
    setCorrectAnswers({});
  };

  useEffect(() => {
    generateRandomIPv6();
  }, []);

  const calculateAnswer = (field: keyof IPv6Answer): string => {
    const address = targetIPv6.address;
    const prefix = parseInt(targetIPv6.prefix, 10);
    
    // Convert address to binary
    const binaryAddress = address.split(':')
      .map(segment => parseInt(segment, 16).toString(2).padStart(16, '0'))
      .join('');
    
    switch (field) {
      case 'network': {
        const networkBits = binaryAddress.slice(0, prefix).padEnd(128, '0');
        return convertBinaryToIPv6(networkBits);
      }
      case 'firstHost': {
        const networkBits = binaryAddress.slice(0, prefix).padEnd(127, '0') + '1';
        return convertBinaryToIPv6(networkBits);
      }
      case 'lastHost': {
        const networkBits = binaryAddress.slice(0, prefix) + '1'.repeat(128 - prefix);
        return convertBinaryToIPv6(networkBits);
      }
      default:
        return '';
    }
  };

  const convertBinaryToIPv6 = (binary: string): string => {
    const segments = [];
    for (let i = 0; i < 8; i++) {
      const segment = binary.slice(i * 16, (i + 1) * 16);
      segments.push(parseInt(segment, 2).toString(16));
    }
    return segments.join(':');
  };

  const checkAnswer = (field: keyof IPv6Answer) => {
    const correct = calculateAnswer(field);
    const userAnswer = answers[field];
    const isCorrect = userAnswer.toLowerCase() === correct.toLowerCase();
    
    setResults(prev => ({
      ...prev,
      [field]: isCorrect
    }));

    if (!isCorrect) {
      setCorrectAnswers(prev => ({
        ...prev,
        [field]: correct
      }));
    }
  };

  const checkAll = () => {
    Object.keys(answers).forEach(field => {
      checkAnswer(field as keyof IPv6Answer);
    });
  };

  const showAll = () => {
    const allAnswers: IPv6Answer = {
      network: calculateAnswer('network'),
      firstHost: calculateAnswer('firstHost'),
      lastHost: calculateAnswer('lastHost')
    };
    setCorrectAnswers(allAnswers);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-cyber-purple">IPv6 subnetting practice</h1>
      
      <RotationMessage />

      <div className="mb-8">
        <button
          onClick={generateRandomIPv6}
          className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-4 py-2 rounded transition-colors duration-200"
        >
          New IPv6 address
        </button>
      </div>

      <div className="mb-8 flex items-center gap-2 text-cyber-mint">
        <span>IPv6 Address/Prefix:</span>
        <span className="px-2 py-1 bg-gray-800 rounded">
          {targetIPv6.address}/{targetIPv6.prefix}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-cyber-mint">
              <th className="border border-gray-700 p-2 text-left">Type</th>
              <th className="border border-gray-700 p-2">Your answer</th>
              <th className="border border-gray-700 p-2">Actions</th>
              <th className="border border-gray-700 p-2">Correct</th>
              <th className="border border-gray-700 p-2 w-24">Valid</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(answers).map(([field, value]) => (
              <tr key={field} className="border-t border-gray-700">
                <td className="border border-gray-700 p-2 text-cyber-mint">
                  {field === 'network' ? 'Network Address' :
                   field === 'firstHost' ? 'First Host' : 'Last Host'}:
                </td>
                <td className="border border-gray-700 p-2">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setAnswers(prev => ({
                      ...prev,
                      [field]: e.target.value
                    }))}
                    className="w-full px-2 py-1 bg-gray-800 text-cyber-mint rounded"
                    placeholder="Enter IPv6 address"
                  />
                </td>
                <td className="border border-gray-700 p-2">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => checkAnswer(field as keyof IPv6Answer)}
                      className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-3 py-1 rounded"
                    >
                      Check
                    </button>
                    <button
                      onClick={() => setCorrectAnswers(prev => ({
                        ...prev,
                        [field]: calculateAnswer(field as keyof IPv6Answer)
                      }))}
                      className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-3 py-1 rounded"
                    >
                      Show
                    </button>
                  </div>
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  {correctAnswers[field as keyof IPv6Answer]}
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  {results[field] !== undefined && (
                    <span className={results[field] ? 'text-cyber-mint' : 'text-red-500'}>
                      {results[field] ? '✓' : '✗'}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={checkAll}
          className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-4 py-2 rounded transition-colors duration-200"
        >
          Check All
        </button>
        <button
          onClick={showAll}
          className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-4 py-2 rounded transition-colors duration-200"
        >
          Show All
        </button>
      </div>
    </div>
  );
}