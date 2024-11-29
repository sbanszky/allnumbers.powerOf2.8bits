export function isValidIPv6(address: string): boolean {
  const parts = address.split(':');
  if (parts.length > 8) return false;

  // Check for proper use of ::
  const doubleColonCount = address.split('::').length - 1;
  if (doubleColonCount > 1) return false;

  // If :: is used, adjust parts count
  if (doubleColonCount === 1) {
    const missingGroups = 8 - parts.length + 1;
    if (missingGroups < 1) return false;
  } else if (parts.length !== 8) {
    return false;
  }

  // Validate each part
  return parts.every(part => {
    if (part === '') return true; // Allow empty parts for ::
    if (!/^[0-9A-Fa-f]{1,4}$/.test(part)) return false;
    return parseInt(part, 16) <= 0xFFFF;
  });
}

export function expandIPv6(address: string): string {
  // Handle ::
  if (address.includes('::')) {
    const [left, right] = address.split('::');
    const leftParts = left ? left.split(':') : [];
    const rightParts = right ? right.split(':') : [];
    const missingParts = 8 - (leftParts.length + rightParts.length);
    const middleParts = Array(missingParts).fill('0000');
    const parts = [...leftParts, ...middleParts, ...rightParts];
    return parts.map(part => part.padStart(4, '0')).join(':');
  }

  // No :: present
  return address.split(':').map(part => part.padStart(4, '0')).join(':');
}

export function compressIPv6(address: string): string {
  // Remove leading zeros from each group
  let compressed = address.split(':').map(group => {
    return parseInt(group, 16).toString(16);
  }).join(':');

  // Find longest sequence of zeros
  const groups = compressed.split(':');
  let longestZeroSeq = { start: -1, length: 0 };
  let currentZeroSeq = { start: -1, length: 0 };

  for (let i = 0; i < groups.length; i++) {
    if (groups[i] === '0') {
      if (currentZeroSeq.start === -1) currentZeroSeq.start = i;
      currentZeroSeq.length++;
    } else {
      if (currentZeroSeq.length > longestZeroSeq.length) {
        longestZeroSeq = { ...currentZeroSeq };
      }
      currentZeroSeq = { start: -1, length: 0 };
    }
  }

  // Check final sequence
  if (currentZeroSeq.length > longestZeroSeq.length) {
    longestZeroSeq = { ...currentZeroSeq };
  }

  // Replace longest zero sequence with ::
  if (longestZeroSeq.length > 1) {
    const before = groups.slice(0, longestZeroSeq.start).join(':');
    const after = groups.slice(longestZeroSeq.start + longestZeroSeq.length).join(':');
    compressed = `${before}::${after}`;
  }

  return compressed;
}

export function hexToBinary(hex: string): string {
  return hex.split(':')
    .map(group => parseInt(group, 16).toString(2).padStart(16, '0'))
    .join('');
}

export function binaryToHex(binary: string): string {
  const groups = [];
  for (let i = 0; i < binary.length; i += 16) {
    const group = binary.slice(i, i + 16);
    groups.push(parseInt(group, 2).toString(16).padStart(4, '0'));
  }
  return groups.join(':');
}