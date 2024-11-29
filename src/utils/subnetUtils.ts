import { ipToLong, longToIp } from './ipUtils';

export function cidrToSubnetMask(cidr: number): string {
  const mask = -1 << (32 - cidr);
  return longToIp(mask >>> 0);
}

export function calculateSubnetInfo(ip: string, cidr: number) {
  const ipLong = ipToLong(ip);
  const subnetMask = -1 << (32 - cidr);
  const networkAddress = ipLong & subnetMask;
  const broadcastAddress = networkAddress | ~subnetMask;
  const firstHost = networkAddress + 1;
  const lastHost = broadcastAddress - 1;
  const totalHosts = Math.pow(2, 32 - cidr);
  const usableHosts = totalHosts - 2;

  return {
    networkAddress: longToIp(networkAddress),
    broadcastAddress: longToIp(broadcastAddress),
    firstHost: longToIp(firstHost),
    lastHost: longToIp(lastHost),
    subnetMask: cidrToSubnetMask(cidr),
    totalHosts,
    usableHosts,
    cidr
  };
}

export function generateSubnetOptions(): Array<{ cidr: number; mask: string }> {
  return Array.from({ length: 32 }, (_, i) => {
    const cidr = i + 1;
    return {
      cidr,
      mask: cidrToSubnetMask(cidr)
    };
  });
}