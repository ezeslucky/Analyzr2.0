'use client';

import { Icon } from '@umami/react-zen';
import Link from 'next/link';
import { Github, X,  Linkedin } from '@/components/icons';
import { GITHUB_URL, LINKEDIN_URL, X_URL } from '@/lib/constants';


const links = [
  { name: 'GitHub', url: GITHUB_URL, icon: <Github /> },
  { name: 'X', url: X_URL, icon: <X /> },
  { name: 'LinkedIn', url: LINKEDIN_URL, icon: <Linkedin /> },
];

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
};

export default function SocialMedia({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  return (
    <div className="flex items-center gap-4">
      {links.map(({ name, url, icon }) => (
        <Link key={url} href={url} target="_blank" title={name} data-umami-event={`social-${name}`}>
          <Icon size={size} className={`${sizeClasses[size]} transition-colors hover:fill-[#2680eb]`}>
            {icon}
          </Icon>
        </Link>
      ))}
    </div>
  );
}
