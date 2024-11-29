import React, { useState, useEffect } from 'react';
import RotationMessage from './common/RotationMessage';

interface IpOctets {
  network: string[];
  'first-host': string[];
  'last-host': string[];
  broadcast: string[];
  'next-subnet': string[];
}

interface Results {
  [key: string]: boolean;
}

interface CorrectAnswers {
  [key: string]: number[];
}

interface TargetIP {
  octet1: string;
  octet2: string;
  octet3: string;
  octet4: string;
  cidr: string;
}

export default function SubnettingTest() {
  const [targetIP, setTargetIP] = useState<TargetIP>({
    octet1: '',
    octet2: '',
    octet3: '',
    octet4: '',
    cidr: ''
  });
  
  const [answers, setAnswers] = useState<IpOctets>({
    network: ['', '', '', ''],
    'first-host': ['', '', '', ''],
    'last-host': ['', '', '', ''],
    broadcast: ['', '', '', ''],
    'next-subnet': ['', '', '', '']
  });
  
  const [results, setResults] = useState<Results>({});
  const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswers>({});

  const generateRandomIP = () => {
    const randomByte = () => Math.floor(Math.random() * 256);
    const randomCIDR = () => Math.floor(Math.random() * (30 - 16 + 1)) + 16;

    setTargetIP({
      octet1: randomByte().toString(),
      octet2: randomByte().toString(),
      octet3: randomByte().toString(),
      octet4: randomByte().toString(),
      cidr: randomCIDR().toString()
    });

    setAnswers({
      network: ['', '', '', ''],
      'first-host': ['', '', '', ''],
      'last-host': ['', '', '', ''],
      broadcast: ['', '', '', ''],
      'next-subnet': ['', '', '', '']
    });
    setResults({});
    setCorrectAnswers({});
  };

  useEffect(() => {
    generateRandomIP();
  }, []);

  const ipToLong = (ip: string): number => {
    const parts = ip.split('.').map(Number);
    return (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
  };

  const longToIp = (long: number): number[] => {
    return [
      (long >>> 24) & 255,
      (long >>> 16) & 255,
      (long >>> 8) & 255,
      long & 255
    ];
  };

  const calculateAnswer = (field: keyof IpOctets): number[] => {
    const ip = `${targetIP.octet1}.${targetIP.octet2}.${targetIP.octet3}.${targetIP.octet4}`;
    const cidr = parseInt(targetIP.cidr, 10);
    const ipLong = ipToLong(ip);
    const subnetMask = -1 << (32 - cidr);
    const networkAddress = ipLong & subnetMask;
    const broadcastAddress = networkAddress | ~subnetMask;

    switch (field) {
      case 'network':
        return longToIp(networkAddress);
      case 'first-host':
        return longToIp(networkAddress + 1);
      case 'last-host':
        return longToIp(broadcastAddress - 1);
      case 'broadcast':
        return longToIp(broadcastAddress);
      case 'next-subnet':
        return longToIp((networkAddress + (1 << (32 - cidr))) >>> 0);
      default:
        return [0, 0, 0, 0];
    }
  };

  const handleAnswerChange = (field: keyof IpOctets, octetIndex: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [field]: prev[field].map((octet, idx) => idx === octetIndex ? value : octet)
    }));
  };

  const checkAnswer = (field: keyof IpOctets) => {
    const correct = calculateAnswer(field);
    const userAnswer = answers[field];
    const isCorrect = userAnswer.every((octet, i) => parseInt(octet) === correct[i]);
    
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
    Object.keys(answers).forEach(field => checkAnswer(field as keyof IpOctets));
  };

  const showAll = () => {
    const allAnswers: CorrectAnswers = {};
    Object.keys(answers).forEach(field => {
      allAnswers[field] = calculateAnswer(field as keyof IpOctets);
    });
    setCorrectAnswers(allAnswers);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-cyber-purple">IPv4 subnetting practice</h1>
      
      <RotationMessage />

      <div className="mb-8">
        <button
          onClick={generateRandomIP}
          className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-4 py-2 rounded transition-colors duration-200"
        >
          New IPv4 address
        </button>
      </div>

      <div className="mb-8 flex items-center gap-2 text-cyber-mint">
        <span>32 bit IPv4 Address /Mask:</span>
        {[targetIP.octet1, targetIP.octet2, targetIP.octet3, targetIP.octet4].map((octet, i) => (
          <React.Fragment key={i}>
            <input
              type="text"
              value={octet}
              readOnly
              className="w-16 px-2 py-1 bg-gray-800 text-cyber-mint rounded text-center"
            />
            {i < 3 && <span>.</span>}
          </React.Fragment>
        ))}
        <span>/</span>
        <input
          type="text"
          value={targetIP.cidr}
          readOnly
          className="w-16 px-2 py-1 bg-gray-800 text-cyber-mint rounded text-center"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-cyber-mint">
              <th className="border border-gray-700 p-2 text-left w-32">Type</th>
              <th className="border border-gray-700 p-2">Your answer</th>
              <th className="border border-gray-700 p-2">Check/Show</th>
              <th className="border border-gray-700 p-2">Correct</th>
              <th className="border border-gray-700 p-2 w-24">Valid</th>
            </tr>
          </thead>
          <tbody>
            {(Object.keys(answers) as Array<keyof IpOctets>).map((field) => (
              <tr key={field} className="border-t border-gray-700">
                <td className="border border-gray-700 p-2 text-cyber-mint">
                  {field.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
                </td>
                <td className="border border-gray-700 p-2">
                  <div className="flex items-center justify-center gap-2">
                    {answers[field].map((octet, i) => (
                      <React.Fragment key={i}>
                        <input
                          type="text"
                          value={octet}
                          onChange={(e) => handleAnswerChange(field, i, e.target.value)}
                          className="w-16 px-2 py-1 bg-gray-800 text-cyber-mint rounded text-center"
                        />
                        {i < 3 && <span className="text-cyber-mint">.</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </td>
                <td className="border border-gray-700 p-2">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => checkAnswer(field)}
                      className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-3 py-1 rounded"
                    >
                      Check
                    </button>
                    <button
                      onClick={() => setCorrectAnswers(prev => ({
                        ...prev,
                        [field]: calculateAnswer(field)
                      }))}
                      className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-3 py-1 rounded"
                    >
                      Show
                    </button>
                  </div>
                </td>
                <td className="border border-gray-700 p-2">
                  {correctAnswers[field] && (
                    <div className="flex items-center justify-center gap-2">
                      {correctAnswers[field].map((octet, i) => (
                        <React.Fragment key={i}>
                          <span className="w-16 px-2 py-1 bg-gray-800 text-cyber-mint rounded text-center">
                            {octet}
                          </span>
                          {i < 3 && <span className="text-cyber-mint">.</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
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