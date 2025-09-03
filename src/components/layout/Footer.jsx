import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import config from '../../data/config.json';

const socialIcons = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  email: <FiMail />,
};

export const Footer = () => {
  return (
    <footer className="py-8 bg-theme-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-theme-text-secondary">
        <div className="flex justify-center space-x-6 mb-4">
          {Object.entries(config.socials).map(([key, value]) => (
            <a
              key={key}
              href={key === 'email' ? `mailto:${value}` : value}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
              className="text-2xl hover:text-theme-accent transition-colors"
            >
              {socialIcons[key]}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} {config.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};