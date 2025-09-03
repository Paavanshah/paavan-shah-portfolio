import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import projects from '../../data/projects.json';
import { FiExternalLink } from 'react-icons/fi';

export const Projects = () => {
  return (
    <Section id="projects" title="[ Projects ]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <AnimatedView key={index}>
            <div className="bg-theme-border/50 rounded-lg h-full flex flex-col overflow-hidden">
              {/* Image Container for a Square Aspect Ratio */}
              <div className="relative w-full pb-[100%] overflow-hidden"> {/* pb-[100%] creates a perfect square */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover" // Image covers the square container
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-theme-text-primary">{project.title}</h3>
                <p className="text-theme-text-secondary mb-4 flex-grow">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-theme-accent/10 text-theme-accent text-xs font-semibold rounded">{tech}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-semibold text-theme-accent hover:underline"
                >
                  View Project <FiExternalLink />
                </a>
              </div>
            </div>
          </AnimatedView>
        ))}
      </div>
    </Section>
  );
};