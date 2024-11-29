import React from 'react';
import { NavigationItem } from '../../config/navigation';

interface DropdownMenuProps {
  item: NavigationItem;
  onNavigate: (item: NavigationItem, subItem: string) => void;
}

export function DropdownMenu({ item, onNavigate }: DropdownMenuProps) {
  return (
    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 ring-1 ring-cyber-mint/10 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
      <div className="py-1">
        {item.items?.map((subItem) => (
          <button
            key={subItem}
            className="block w-full text-left px-4 py-2 text-sm text-cyber-blue hover:bg-cyber-mint/10 hover:text-cyber-mint"
            onClick={() => onNavigate(item, subItem)}
          >
            {subItem}
          </button>
        ))}
      </div>
    </div>
  );
}