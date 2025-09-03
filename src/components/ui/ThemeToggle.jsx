import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 rounded-full text-light-muted dark:text-dark-muted hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};