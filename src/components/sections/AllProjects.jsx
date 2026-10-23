import { useEffect } from 'react';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import projectsData from '../../data/projects.js';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export const AllProjects = () => {
  const { t } = useTranslation();

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-theme-text-primary mb-2">
            [ {t('projects.allTitle', 'All Projects')} ]
          </h1>
          <p className="text-theme-text-secondary">
            {t('projects.allSubtitle', 'A complete archive of my aerospace, robotics, and embedded systems work.')}
          </p>
        </div>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-theme-accent hover:text-white transition-colors font-medium"
        >
          <FiArrowLeft /> {t('common.backToHome', 'Back to Home')}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <AnimatedView 
            key={index} 
            className="bg-slate-800/30 rounded-xl overflow-hidden shadow-card border border-white/5 hover:border-theme-accent/30 hover:bg-slate-800/50 transition-all duration-300 group flex flex-col h-full text-left"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900/50">
              <img 
                src={project.image} 
                alt={t(`projects.${project.key}.title`)} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-theme-text-primary mb-2 transition-colors group-hover:text-theme-accent">
                {t(`projects.${project.key}.title`)}
              </h3>
              <p className="text-sm text-theme-text-secondary leading-relaxed mb-6 flex-grow">
                {t(`projects.${project.key}.summary`)}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono font-medium text-theme-accent bg-theme-accent/10 px-2 py-1 rounded tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link to the individual project detail page */}
              <Link 
                to={`/projects/${project.key}`}
                className="text-theme-accent text-sm font-bold flex items-center gap-1 hover:text-white transition-colors mt-2"
              >
                {t('projects.viewDetails', 'View Details')} &rarr;
              </Link>
            </div>
          </AnimatedView>
        ))}
      </div>
    </div>
  );
};