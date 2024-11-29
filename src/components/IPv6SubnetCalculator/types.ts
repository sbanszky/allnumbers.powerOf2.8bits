export interface SubnetInfo {
  networkAddress: string;
  firstHost: string;
  lastHost: string;
  prefix: number;
  totalAddresses: string;
  usableAddresses: string;
}

export interface SubnetFormProps {
  ipv6Address: string;
  prefix: string;
  error: string | null;
  onIpv6AddressChange: (value: string) => void;
  onPrefixChange: (value: string) => void;
  onCalculate: () => void;
  onClear: () => void;
}

export interface SubnetResultsProps {
  result: SubnetInfo;
}