import { useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import { FiMenu, FiX } from 'react-icons/fi';

const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'publications', 'contact'];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sections);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setIsMenuOpen(false)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
        activeSection === href.substring(1)
          ? 'text-theme-accent'
          : 'text-theme-text-secondary hover:text-theme-accent'
      }`}
    >
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-theme-bg/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side: Desktop Navigation Links */}
          <div className="hidden md:flex items-baseline space-x-2">
            {sections.map((section) => (
              <NavLink key={section} href={`#${section}`}>{section}</NavLink>
            ))}
          </div>

          {/* Spacer for mobile view to ensure right-alignment of button */}
          <div className="md:hidden"></div>

          {/* Right Side: Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-theme-text-secondary"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                  activeSection === section
                    ? 'text-theme-accent bg-theme-border'
                    : 'text-theme-text-secondary hover:bg-theme-border'
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};