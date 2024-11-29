import type { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavigationItem } from '../../config/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavigationItem[];
  activeDropdown: string | null;
  setActiveDropdown: (name: string | null) => void;
  onNavigate: (item: NavigationItem, subItem: string) => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, items, activeDropdown, setActiveDropdown, onNavigate }) => {
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

  if (!isOpen) return null;

  return (
    <div className="sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {items.map((item) => (
          <div key={item.name}>
            {item.type === 'link' ? (
              item.href.startsWith('http') ? (
                <a
                  href={item.href}
                  className="block px-3 py-2 text-center text-cyber-blue hover:text-cyber-mint"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="block px-3 py-2 text-center text-cyber-blue hover:text-cyber-mint"
                >
                  {item.name}
                </Link>
              )
            ) : (
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="flex items-center justify-center w-full px-3 py-2 text-cyber-blue hover:text-cyber-mint"
                >
                  <span>{item.name}</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {activeDropdown === item.name && (
                  <div className="bg-black/90">
                    {item.items?.map((subItem) => (
                      <button
                        key={subItem}
                        className="block w-full px-3 py-2 text-sm text-center text-cyber-blue hover:text-cyber-mint"
                        onClick={() => handleNavigate(item, subItem)}
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}