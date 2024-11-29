import React from 'react';
import { XIcon, DiscordIcon, TikTokIcon, Youtube } from './icons';

const socialLinks = [
  { 
    Icon: DiscordIcon,
    href: 'https://discord.gg/bcy7rCV3zY',
    delay: '0s',
    label: 'Discord'
  },
  { 
    Icon: XIcon,
    href: 'https://x.com/allnumbers012',
    delay: '1s',
    label: 'X (Twitter)'
  },
  { 
    Icon: Youtube, 
    href: 'https://www.youtube.com/@allnumbers012.online',
    delay: '2s',
    label: 'YouTube'
  },
  { 
    Icon: TikTokIcon,
    href: 'https://www.tiktok.com/@allnumbers012.online',
    delay: '1.5s',
    label: 'TikTok'
  },
];

export default function FloatingIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-1">
      {socialLinks.map(({ Icon, href, delay, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-float group"
          style={{ animationDelay: delay }}
          aria-label={label}
        >
          <Icon
            className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-mint group-hover:text-cyber-purple transition-colors duration-300"
            strokeWidth={1.5}
          />
        </a>
      ))}
    </div>
  );
}