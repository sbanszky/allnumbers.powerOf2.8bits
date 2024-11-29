import type { FC } from 'react';
import type { SubnetFormProps } from './types';

export const SubnetForm: FC<SubnetFormProps> = ({
  ipv6Address,
  prefix,
  error,
  onIpv6AddressChange,
  onPrefixChange,
  onCalculate,
  onClear
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-400 mb-2">Prefix Length</label>
        <select
          value={prefix}
          onChange={(e) => onPrefixChange(e.target.value)}
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
          onChange={(e) => onIpv6AddressChange(e.target.value)}
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
          onClick={onCalculate}
          className="bg-cyber-purple hover:bg-cyber-purple/80 text-cyber-mint px-6 py-2 rounded transition-colors duration-200"
        >
          Calculate
        </button>
        <button
          onClick={onClear}
          className="bg-gray-700 hover:bg-gray-600 text-cyber-mint px-6 py-2 rounded transition-colors duration-200"
        >
          Clear
        </button>
      </div>
    </div>
  );
};