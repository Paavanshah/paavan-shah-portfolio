import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { About } from './components/sections/About.jsx';
import { Skills } from './components/sections/Skills.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Experience } from './components/sections/Experience.jsx';
import { Education } from './components/sections/Education.jsx';
import { Achievements } from './components/sections/Achievements.jsx';
import { Publications } from './components/sections/Publications.jsx';
import { Contact } from './components/sections/Contact.jsx';
import { Preloader } from './components/ui/Preloader.jsx';
import { CustomCursor } from './components/ui/CustomCursor.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main id="main-content">
              <div className="bg-theme-bg"><Hero /></div>
              <div className="bg-theme-border"><About /></div>
              <div className="bg-theme-bg"><Skills /></div>
              <div className="bg-theme-border"><Projects /></div>
              <div className="bg-theme-bg"><Experience /></div>
              <div className="bg-theme-border"><Education /></div>
              <div className="bg-theme-bg"><Achievements /></div>
              <div className="bg-theme-border"><Publications /></div>
              <div className="bg-theme-bg"><Contact /></div>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;