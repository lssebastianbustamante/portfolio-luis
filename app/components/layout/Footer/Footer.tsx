import { SOCIAL_LINKS } from '@/app/lib/constants';
import React from 'react';
import SocialLink from './SocialLink';



const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-8 footer">
      <div className="container mx-auto flex flex-col items-center text-white">
        <h2 className="text-2xl font-semibold mb-4 title">Contáctame</h2>
        <div className="flex flex-col items-center space-y-4">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink
              key={link.id}
              href={link.href}
              text={link.text}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
