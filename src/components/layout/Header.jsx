import { useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = ['home', 'about', 'skills', 'projects', 'gallery', 'experience', 'education', 'achievements', 'publications', 'contact'];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Filter out 'gallery' since it is a separate page, not a scrollable homepage section
  const activeSection = useActiveSection(navItems.filter(item => item !== 'gallery'));
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // Smart navigation handler
  const handleNavClick = (e, section) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Explicitly handle standalone page routes
    if (section === 'gallery') {
      navigate('/gallery');
      return;
    }

    if (location.pathname !== '/') {
      // If we are on a different page, route back to home + the hash
      navigate(`/#${section}`);
      // Add a slight delay to allow the home page to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on the home page, just scroll smoothly
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ section, children }) => {
    const isGallery = section === 'gallery';
    
    // Highlight gallery if on /gallery, otherwise check the active homepage section
    const isActive = isGallery 
      ? location.pathname === '/gallery' 
      : activeSection === section && location.pathname === '/';
    
    return (
      <a
        href={isGallery ? '#/gallery' : `/#${section}`}
        onClick={(e) => handleNavClick(e, section)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
          isActive
            ? 'text-theme-accent'
            : 'text-theme-text-secondary hover:text-theme-accent'
        }`}
      >
        {children}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-theme-bg/80 backdrop-blur-sm border-b border-white/5">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="hidden md:flex items-baseline space-x-2">
            {navItems.map((section) => (
              <NavLink key={section} section={section}>
                {t(`nav.${section}`)}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4 ml-auto md:ml-0">
            <select 
              onChange={changeLanguage} 
              defaultValue="en-IN" 
              className="bg-transparent text-theme-text-primary border border-theme-border rounded px-2 py-1 text-sm focus:outline-none focus:border-theme-accent cursor-pointer"
            >
              <option value="en-IN" className="bg-slate-900 text-white">English (India)</option>
              <option value="en-US" className="bg-slate-900 text-white">English (Global)</option>
              <option value="de" className="bg-slate-900 text-white">Deutsch</option>
              <option value="ja" className="bg-slate-900 text-white">日本語</option>
            </select>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-theme-text-secondary hover:text-theme-accent focus:outline-none"
              >
                {isMenuOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-theme-bg border-t border-theme-border shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((section) => {
              const isGallery = section === 'gallery';
              const isActive = isGallery 
                ? location.pathname === '/gallery' 
                : activeSection === section && location.pathname === '/';

              return (
                <a
                  key={section}
                  href={isGallery ? '#/gallery' : `/#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                    isActive
                      ? 'text-theme-accent bg-theme-border'
                      : 'text-theme-text-secondary hover:bg-theme-border'
                  }`}
                >
                  {t(`nav.${section}`)}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};