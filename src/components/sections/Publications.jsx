import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import { useTranslation } from 'react-i18next';
import { FiFileText } from 'react-icons/fi';
import { FaCertificate } from 'react-icons/fa';
import publicationsData from '../../data/publications.json'; 

export const Publications = () => {
  const { t } = useTranslation();
  const { paper, patent } = publicationsData; 

  return (
    <Section id="publications" title={t('publications.title')}>
      <div className="max-w-4xl mx-auto space-y-12 text-left pl-4 pr-4">
        
        {/* Review Paper Section */}
        <AnimatedView className="relative p-6 group">
          {/* Top Left Bracket - Expands to full box on hover */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-[1.5px] border-t-[1.5px] border-theme-accent transition-all duration-500 ease-out group-hover:w-full group-hover:h-full"></div>
          
          <div className="relative z-10 flex items-center gap-4 mb-4">
            <FiFileText className="text-2xl text-theme-accent" />
            <h3 className="text-xl font-bold text-theme-text-primary">
              {t('publications.reviewPaper')}
            </h3>
          </div>
          
          <p className="relative z-10 text-theme-text-secondary leading-relaxed">
            {t('publications.loraDesc')}{" "}
            <a 
              href={paper.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-theme-accent hover:underline font-medium"
            >
              {t('publications.readItHere')}
            </a>
          </p>

          {/* Bottom Right Bracket (Long line) - Expands to full box on hover */}
          <div className="absolute bottom-0 right-0 w-32 h-6 border-r-[1.5px] border-b-[1.5px] border-theme-accent transition-all duration-500 ease-out group-hover:w-full group-hover:h-full"></div>
        </AnimatedView>

        {/* Patent Section */}
        <AnimatedView className="relative p-6 group">
          {/* Top Left Bracket - Expands to full box on hover */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-[1.5px] border-t-[1.5px] border-theme-accent transition-all duration-500 ease-out group-hover:w-full group-hover:h-full"></div>
          
          <div className="relative z-10 flex items-center gap-4 mb-4">
            <FaCertificate className="text-2xl text-theme-accent" />
            <h3 className="text-xl font-bold text-theme-text-primary">
              {t('publications.patentTitle')}
            </h3>
          </div>
          
          <p className="relative z-10 text-theme-text-secondary leading-relaxed">
            {t('publications.patentDesc')}
          </p>
          
          {/* Bottom Right Bracket (Small corner) - Expands to full box on hover */}
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-[1.5px] border-b-[1.5px] border-theme-accent transition-all duration-500 ease-out group-hover:w-full group-hover:h-full"></div>
        </AnimatedView>

      </div>
    </Section>
  );
};