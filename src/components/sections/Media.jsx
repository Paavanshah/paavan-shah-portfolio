import { AnimatedView } from '../ui/AnimatedView';
import { FiBookOpen, FiMic } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export const Media = () => {
  const { t } = useTranslation();

  // Fetch the arrays dynamically from the active translation file
  const newspapers = t('media.newspapers', { returnObjects: true }) || [];
  const podcasts = t('media.podcasts', { returnObjects: true }) || [];

  return (
    <section id="media" className="py-20 bg-theme-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedView className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-4 font-mono">
            {t('media.title', '[ Press & Media ]')}
          </h2>
        </AnimatedView>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Newspapers Column */}
          <AnimatedView delay={0.1}>
            <div className="bg-slate-800/30 border border-white/5 rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <FiBookOpen className="text-theme-accent text-xl" />
                <h3 className="text-xl font-bold text-theme-text-primary">
                  {t('media.newspaperFeatures', 'Newspaper Features')}
                </h3>
              </div>
              <div className="space-y-6">
                {Array.isArray(newspapers) && newspapers.map((item, index) => (
                  <div key={index} className="border-l-2 border-theme-border pl-4">
                    <h4 className="text-theme-text-primary font-medium">{item.title}</h4>
                    <p className="text-sm text-theme-text-secondary mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedView>

          {/* Podcasts Column */}
          <AnimatedView delay={0.2}>
            <div className="bg-slate-800/30 border border-white/5 rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <FiMic className="text-theme-accent text-xl" />
                <h3 className="text-xl font-bold text-theme-text-primary">
                  {t('media.podcastAppearances', 'Podcast Appearances')}
                </h3>
              </div>
              <div className="space-y-6">
                {Array.isArray(podcasts) && podcasts.map((item, index) => (
                  <div key={index} className="border-l-2 border-theme-border pl-4">
                    <h4 className="text-theme-text-primary font-medium">{item.title}</h4>
                    <p className="text-sm text-theme-text-secondary mt-1 mb-3">{item.description}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-theme-accent hover:text-theme-text-primary transition-colors"
                      >
                        {t('media.listenNow', 'Listen Now')} <FiMic className="text-xs" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedView>
        </div>
      </div>
    </section>
  );
};