import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiGithub, FiExternalLink, FiFileText, FiYoutube, FiMic, FiVideo } from 'react-icons/fi';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import projectsData from '../../data/projects.js';

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData.find((p) => p.key === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-theme-bg">
        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/projects')} className="text-theme-accent hover:underline">
          &larr; Return to Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      
      <Link to="/projects" className="inline-flex items-center gap-2 text-theme-text-secondary hover:text-theme-accent transition-colors mb-8 font-medium">
        <FiArrowLeft /> {t('common.backToProjects', 'Back to Projects')}
      </Link>

      <AnimatedView className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-theme-text-primary mb-4">
          {t(`projects.${project.key}.title`)}
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span key={tech} className="text-sm font-mono font-medium text-theme-accent bg-theme-accent/10 px-3 py-1.5 rounded tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links Container */}
        <div className="flex flex-wrap gap-4">
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-theme-accent hover:text-theme-bg transition-colors border border-white/10">
              <FiGithub /> Source Code
            </a>
          )}
          {project.links?.paper && (
            <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-theme-border text-theme-text-primary rounded-md hover:border-theme-accent transition-colors">
              <FiFileText /> Read Paper
            </a>
          )}
          {project.links?.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-theme-border text-theme-text-primary rounded-md hover:border-theme-accent transition-colors">
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.links?.presentation && (
            <a href={project.links.presentation} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
              <FiVideo /> Video Presentation
            </a>
          )}
          {project.links?.news && (
            <a href={project.links.news} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-md hover:bg-red-500 hover:text-white transition-colors">
              <FiYoutube /> Watch News Report
            </a>
          )}
          {project.links?.podcast && (
            <a href={project.links.podcast} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md hover:bg-purple-500 hover:text-white transition-colors">
              <FiMic /> Listen to Podcast
            </a>
          )}
        </div>
      </AnimatedView>

      {/* UPDATED: Masonry Layout Image Gallery */}
      <AnimatedView className="mb-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {project.gallery?.map((item, index) => {
            const isObject = typeof item === 'object' && item !== null;
            const imgSrc = isObject ? item.src : item;
            const caption = isObject ? item.caption : null;

            return (
              <div key={index} className="break-inside-avoid flex flex-col gap-3 rounded-xl overflow-hidden border border-white/5 shadow-card bg-slate-800/30 p-3">
                <img 
                  src={imgSrc} 
                  alt={caption || `Gallery image ${index + 1}`} 
                  className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500 rounded-md" 
                />
                {caption && (
                  <p className="text-sm text-center text-theme-text-secondary px-2 pb-2 italic">
                    {caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </AnimatedView>

      <AnimatedView className="prose prose-invert prose-lg max-w-none text-theme-text-secondary">
        <p className="whitespace-pre-line leading-relaxed">
          {t(`projects.${project.key}.details`)}
        </p>
      </AnimatedView>

    </div>
  );
};