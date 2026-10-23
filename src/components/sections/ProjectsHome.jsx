import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import projectsData from '../../data/projects.js';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export const ProjectsHome = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects" title={t('projects.title')}>
      {/* Changed to lg:grid-cols-3 to make cards smaller and fit 3 in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Only map the first 3 projects */}
        {projectsData.slice(0, 3).map((project, index) => (
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
              <p className="text-sm text-theme-text-secondary leading-relaxed mb-4 flex-grow line-clamp-3">
                {t(`projects.${project.key}.summary`)}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[10px] font-mono font-medium text-theme-accent bg-theme-accent/10 px-2 py-1 rounded tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedView>
        ))}
      </div>

      {/* Button to navigate to the new All Projects page */}
      <AnimatedView className="mt-12 flex justify-center">
        <Link 
          to="/projects"
          className="group flex items-center gap-2 px-6 py-3 border border-theme-accent text-theme-accent rounded-md font-medium hover:bg-theme-accent hover:text-theme-bg transition-colors"
        >
          {t('projects.viewAll', 'View All Projects')}
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </AnimatedView>
    </Section>
  );
};