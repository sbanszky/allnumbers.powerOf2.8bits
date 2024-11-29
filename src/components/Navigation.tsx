import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NavigationItem, navigationItems } from '../config/navigation';
import { MobileMenu } from './navigation/MobileMenu';
import { DesktopMenu } from './navigation/DesktopMenu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigate = (item: NavigationItem, subItem: string) => {
    if (subItem === 'Subnetting practice') {
      if (item.name === 'IPv4 chronicles') {
        navigate('/ipv4-subnetting');
      } else if (item.name === 'IPv6 chronicles') {
        navigate('/ipv6-subnetting');
      }
    } else if (subItem === 'Subnet calculator') {
      if (item.name === 'IPv4 chronicles') {
        navigate('/subnet-calculator');
      } else if (item.name === 'IPv6 chronicles') {
        navigate('/ipv6-subnet-calculator');
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-black/50 backdrop-blur-md border-y border-cyber-mint/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="absolute left-4 sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyber-blue hover:text-cyber-mint transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden sm:block w-full">
            <DesktopMenu 
              items={navigationItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        items={navigationItems}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        onNavigate={handleNavigate}
      />
    </nav>
  );
}