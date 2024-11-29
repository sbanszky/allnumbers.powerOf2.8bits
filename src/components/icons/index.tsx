import React from 'react';
import { Youtube } from 'lucide-react';

export const XIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    strokeWidth={strokeWidth}
    fill="none"
    stroke="currentColor"
  >
    <path d="M4 4l7.2 9.975L4 20h2.64l5.76-4.975L16.8 20H20l-7.2-9.975L20 4h-2.64l-5.76 4.975L7.2 4H4z" />
  </svg>
);

export const DiscordIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    strokeWidth={strokeWidth}
    fill="none"
    stroke="currentColor"
  >
    <path d="M18.93 5.34a16.89 16.89 0 00-4.07-1.23.06.06 0 00-.07.03c-.18.32-.38.73-.52 1.05a15.72 15.72 0 00-4.57 0c-.14-.32-.35-.73-.52-1.05a.06.06 0 00-.07-.03c-1.39.22-2.78.61-4.07 1.23a.06.06 0 00-.03.02C2.55 9.09 1.75 12.73 2.14 16.32a.07.07 0 00.03.05 16.87 16.87 0 004.95 2.48.06.06 0 00.07-.02c.39-.52.73-1.07 1.03-1.65a.06.06 0 00-.03-.09c-.54-.2-1.05-.44-1.54-.71a.06.06 0 01-.01-.1c.1-.08.21-.16.31-.24a.06.06 0 01.06 0c3.17 1.41 6.6 1.41 9.74 0a.06.06 0 01.06 0c.1.08.21.16.31.24a.06.06 0 01-.01.1c-.49.27-1 .51-1.54.71a.06.06 0 00-.03.09c.3.58.64 1.13 1.03 1.65a.06.06 0 00.07.02 16.82 16.82 0 004.96-2.48.06.06 0 00.03-.05c.47-4.14-.78-7.74-3.31-10.96a.05.05 0 00-.03-.02zM8.67 14.05c-.98 0-1.78-.88-1.78-1.95 0-1.08.79-1.95 1.78-1.95s1.8.88 1.78 1.95c0 1.07-.79 1.95-1.78 1.95zm6.57 0c-.98 0-1.78-.88-1.78-1.95 0-1.08.79-1.95 1.78-1.95s1.8.88 1.78 1.95c0 1.07-.79 1.95-1.78 1.95z" />
  </svg>
);

export const TikTokIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    strokeWidth={strokeWidth}
    fill="none"
    stroke="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.17-2.39V12.2a8.26 8.26 0 01.6-.02c1.34 0 2.59.33 3.7.92V8.44c.43.09.86.13 1.3.13.4 0 .8-.03 1.18-.09L19.59 8v4.79a7.52 7.52 0 01-5.19 7.1c-3.49 1.15-7.24-.38-9.16-3.54a7.51 7.51 0 0113.99-5.44V6.69z" />
  </svg>
);

export { Youtube };