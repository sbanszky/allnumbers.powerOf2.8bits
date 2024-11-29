export interface NavigationItem {
  name: string;
  href: string;
  type: 'link' | 'dropdown';
  items?: string[];
}

export const navigationItems: NavigationItem[] = [
  { 
    name: 'whoami', 
    href: '/whoami', 
    type: 'link' 
  },
  {
    name: 'internet',
    href: '#',
    type: 'dropdown',
    items: [
      'LO',
      'Evolution',
      'Protocols',
      'Standards'
    ],
  },
  {
    name: 'IPv4 chronicles',
    href: '#',
    type: 'dropdown',
    items: [
      'Architecture',
      'Implementation (soon)',
      'Subnetting practice',
      'Subnet calculator'
    ],
  },
  {
    name: 'IPv6 chronicles',
    href: '#',
    type: 'dropdown',
    items: [
      'Next Gen',
      'Subnetting practice',
      'Subnet calculator'
    ],
  },
  {
    name: 'memeCoin',
    href: 'https://icmp.live',
    type: 'link'
  },
  { 
    name: 'contact', 
    href: '/contact', 
    type: 'link' 
  },
];