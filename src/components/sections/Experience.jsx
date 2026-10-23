import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import experienceData from '../../data/experience.js';
import { useTranslation } from 'react-i18next';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <Section id="experience" title={t('experience.title')}>
      <div className="space-y-12">
        {experienceData.map((job, index) => (
          <AnimatedView key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            
            {/* FIXED: Removed bg-white and padding. Swapped to a wide thumbnail with object-cover */}
            <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-40 overflow-hidden rounded-lg shadow-lg border border-theme-border">
              <img 
                src={job.image} 
                alt={t(`experience.${job.key}.org`)} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>

            <div className="flex-grow text-left">
              <h3 className="text-2xl font-bold text-theme-text-primary">{t(`experience.${job.key}.role`)}</h3>
              <p className="text-xl text-theme-accent font-medium mt-1">
                {t(`experience.${job.key}.org`)} {job.loc ? `| ${t(`experience.${job.key}.loc`)}` : ''}
              </p>
              <p className="text-sm text-theme-text-secondary mt-1">{job.dates}</p>
              <ul className="mt-4 space-y-2 list-none">
                {t(`experience.${job.key}.b1`) && <li className="text-theme-text-secondary before:content-['▹'] before:absolute before:left-0 relative pl-5">{t(`experience.${job.key}.b1`)}</li>}
                {t(`experience.${job.key}.b2`) && <li className="text-theme-text-secondary before:content-['▹'] before:absolute before:left-0 relative pl-5">{t(`experience.${job.key}.b2`)}</li>}
                {t(`experience.${job.key}.b3`) && <li className="text-theme-text-secondary before:content-['▹'] before:absolute before:left-0 relative pl-5">{t(`experience.${job.key}.b3`)}</li>}
              </ul>
            </div>
          </AnimatedView>
        ))}
      </div>
    </Section>
  );
};