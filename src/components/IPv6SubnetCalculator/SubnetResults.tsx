import type { FC } from 'react';
import type { SubnetResultsProps } from './types';

export const SubnetResults: FC<SubnetResultsProps> = ({ result }) => {
  return (
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
  );
};