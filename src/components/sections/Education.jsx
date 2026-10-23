import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import educationData from '../../data/education.json';
import { useTranslation } from 'react-i18next';

export const Education = () => {
  const { t } = useTranslation();

  const getIcon = (key) => {
    if (key === 'bvm') return <FaGraduationCap className="text-2xl text-theme-accent mt-1" />;
    return <FaSchool className="text-2xl text-theme-accent mt-1" />;
  };

  return (
    <Section id="education" title={t('education.title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
        {educationData.map((item, index) => (
          <AnimatedView key={index} className="relative p-6 group">
            
            {/* Top Left Bracket */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-theme-accent transition-all duration-300 group-hover:w-full group-hover:h-full"></div>
            
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex-shrink-0">
                {getIcon(item.key)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-theme-text-primary mb-1">
                  {t(`education.${item.key}.degree`)}
                </h3>
                <p className="text-lg text-theme-text-secondary font-medium">
                  {item.institution}
                </p>
                <p className="text-sm text-theme-text-secondary mb-3">
                  {item.dates}
                </p>
                
                <p className="font-semibold text-theme-text-primary mb-2">
                  {t(`education.${item.key}.result`)}
                </p>
                
                {/* Conditionally render coursework if it exists in the original data */}
                {item.coursework && (
                  <p className="text-sm text-theme-text-secondary leading-relaxed">
                    <span className="text-theme-accent font-medium mr-1">Coursework:</span> 
                    {item.coursework.join(', ')}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Right Bracket */}
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-theme-accent transition-all duration-300 group-hover:w-full group-hover:h-full"></div>
          </AnimatedView>
        ))}
      </div>
    </Section>
  );
};