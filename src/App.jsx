import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { ProjectsHome } from './components/sections/ProjectsHome'; 
import { AllProjects } from './components/sections/AllProjects'; 
import { ProjectDetail } from './components/sections/ProjectDetail';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Achievements } from './components/sections/Achievements';
import { Publications } from './components/sections/Publications';
import { Media } from './components/sections/Media'; 
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { Gallery } from './components/sections/Gallery';

const Home = () => (
  <main id="main-content">
    <Hero />
    <About />
    <Skills />
    <ProjectsHome />
    <Experience />
    <Media /> 
    <Education />
    <Achievements />
    <Publications />
    <Contact />
  </main>
);

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `${t('hero.name', 'Paavan Shah')} | Portfolio`;
  }, [i18n.language, t]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="bg-theme-bg text-theme-text-primary min-h-screen font-sans selection:bg-theme-accent selection:text-theme-bg">
        <CustomCursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          {/* Gallery Route properly placed inside the Routes block */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;