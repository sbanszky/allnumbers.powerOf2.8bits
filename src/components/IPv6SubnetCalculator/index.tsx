import { useState } from 'react';
import { SubnetForm } from './SubnetForm';
import { SubnetResults } from './SubnetResults';
import { calculateSubnetInfo } from './utils';
import type { SubnetInfo } from './types';

export default function IPv6SubnetCalculator() {
  const [ipv6Address, setIpv6Address] = useState('');
  const [prefix, setPrefix] = useState('64');
  const [result, setResult] = useState<SubnetInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const info = calculateSubnetInfo(ipv6Address, parseInt(prefix, 10));
      setResult(info);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResult(null);
    }
  };

  const handleClear = () => {
    setIpv6Address('');
    setPrefix('64');
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-cyber-purple">IPv6 Subnet Calculator</h1>
      
      <div className="bg-black/30 p-6 rounded-lg cyber-border space-y-6">
        <SubnetForm
          ipv6Address={ipv6Address}
          prefix={prefix}
          error={error}
          onIpv6AddressChange={setIpv6Address}
          onPrefixChange={setPrefix}
          onCalculate={handleCalculate}
          onClear={handleClear}
        />

        {result && <SubnetResults result={result} />}
      </div>
    </div>
  );
}