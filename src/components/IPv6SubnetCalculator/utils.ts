import { isValidIPv6, expandIPv6, hexToBinary, binaryToHex, compressIPv6 } from '../../utils/ipv6Utils';
import type { SubnetInfo } from './types';

export function calculateSubnetInfo(address: string, prefixLength: number): SubnetInfo {
  if (!address) {
    throw new Error('Please enter an IPv6 address');
  }

  if (!isValidIPv6(address)) {
    throw new Error('Please enter a valid IPv6 address');
  }

  if (prefixLength < 1 || prefixLength > 128) {
    throw new Error('Prefix length must be between 1 and 128');
  }

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
}