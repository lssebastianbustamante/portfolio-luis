

import React from 'react';
import SocialLink from './SocialLink';

const SOCIAL_LINKS = [
  {
    id: 'email',
    href: 'mailto:luissebastianbustamantebarrera@gmail.com',
    text: 'luissebastianbustamantebarrera@gmail.com',
    icon: {
      title: 'Email',
      path: 'M19.68 20c1.414 0 2.56-1.194 2.56-2.667V10.5l-9.765 4.072a1.005 1.005 0 01-.475.095c-.232 0-.392-.034-.472-.099L1.76 10.5v6.833C1.76 18.806 2.906 20 4.32 20h15.36z M12 11.9l10.24-4.267v-.966C22.24 5.194 21.094 4 19.68 4H4.32C2.906 4 1.76 5.194 1.76 6.667v.966L12 11.9z'
    }
  },
  {
    id: 'phone',
    href: 'tel:+542664634507',
    text: '+542664634507',
    icon: {
      title: 'Phone',
      path: 'M22.964 17.632l-.999 4.33a1.336 1.336 0 01-1.31 1.04c-10.834 0-19.65-8.816-19.65-19.66 0-.629.428-1.167 1.04-1.307l4.33-.998a1.352 1.352 0 011.54.778L9.912 6.48c.233.55.076 1.188-.386 1.565L7.214 9.942a15.021 15.021 0 006.854 6.852l1.892-2.312a1.337 1.337 0 011.567-.385l4.66 1.997c.596.258.923.91.777 1.538z'
    }
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/luissb-bustamante/',
    text: 'https://www.linkedin.com/in/luissb-bustamante/',
    icon: {
      title: 'LinkedIn',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    }
  },
  {
    id: 'github',
    href: 'https://github.com/lssebastianbustamante',
    text: 'https://github.com/lssebastianbustamante',
    icon: {
       title: 'GitHub',
       path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
    }
  }
];



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
