import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavigationItem } from '../../config/navigation';
import { DropdownMenu } from './DropdownMenu';

interface DesktopMenuProps {
  items: NavigationItem[];
  activeDropdown: string | null;
  setActiveDropdown: (name: string | null) => void;
  onNavigate: (item: NavigationItem, subItem: string) => void;
}

export function DesktopMenu({ items, activeDropdown, setActiveDropdown, onNavigate }: DesktopMenuProps) {
  const navigate = useNavigate();

  const handleNavigate = (item: NavigationItem, subItem: string) => {
    if (subItem === 'LO') {
      navigate('/lo');
    } else if (subItem === 'Architecture') {
      navigate('/ipv4-architecture');
    } else if (subItem === 'Evolution') {
      navigate('/internet-evolution');
    } else if (subItem === 'Next Gen') {
      navigate('/ipv6-next-gen');
    } else if (subItem === 'Protocols') {
      navigate('/protocols');
    } else if (subItem === 'Standards') {
      navigate('/standards');
    } else {
      onNavigate(item, subItem);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-8">
      {items.map((item) => (
        <div key={item.name} className="relative">
          {item.type === 'link' ? (
            item.href.startsWith('http') ? (
              <a
                href={item.href}
                className="text-cyber-blue hover:text-cyber-mint transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.href}
                className="text-cyber-blue hover:text-cyber-mint transition-colors duration-200"
              >
                {item.name}
              </Link>
            )
          ) : (
            <div className="relative group">
              <button
                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                className="flex items-center space-x-1 text-cyber-blue hover:text-cyber-mint transition-colors duration-200"
              >
                <span>{item.name}</span>
                <ChevronDown size={16} className="group-hover:text-cyber-mint transition-colors duration-200" />
              </button>
              <DropdownMenu item={item} onNavigate={(item, subItem) => handleNavigate(item, subItem)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}