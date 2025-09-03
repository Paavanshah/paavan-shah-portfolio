import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import experience from '../../data/experience.json';

export const Experience = () => {
  return (
    <Section id="experience" title="[ Experience ]">
      <div className="relative max-w-6xl mx-auto">
        {/* The main vertical line of the timeline */}
        <div className="absolute left-4 top-4 w-0.5 h-full bg-theme-border"></div>

        <div className="space-y-16">
          {experience.map((job, index) => (
            <AnimatedView key={index}>
              <div className="relative pl-12">
                {/* The timeline node/circle */}
                <div className="absolute left-0 top-2 w-8 h-8 flex items-center justify-center bg-theme-accent text-theme-bg rounded-full font-bold">
                  {index + 1}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Left Column: Text Details */}
                  <div className="bg-theme-border/50 p-6 rounded-lg card-brackets order-2 md:order-1">
                    <p className="text-sm font-medium text-theme-accent mb-1">{job.dates}</p>
                    <h3 className="text-xl font-bold text-theme-text-primary">{job.role}</h3>
                    <p className="text-theme-text-secondary mb-3">{job.org}{job.location && `, ${job.location}`}</p>
                    <ul className="list-disc list-inside space-y-2 text-theme-text-secondary">
                      {job.bullets.map((bullet, i) => (<li key={i}>{bullet}</li>))}
                    </ul>
                  </div>

                  {/* Right Column: Image */}
                  {job.image && (
                    <div className="flex justify-center items-center order-1 md:order-2">
                      {/* SIZE INCREASED HERE */}
                      <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg">
                        <img src={job.image} alt={job.org} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedView>
          ))}
        </div>
      </div>
    </Section>
  );
};