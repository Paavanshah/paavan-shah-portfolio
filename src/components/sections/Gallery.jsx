import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import galleryData from '../../data/gallery.js';

// The "export const" here is strictly required to fix the crash
export const Gallery = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      
      <AnimatedView className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-theme-text-primary mb-4 font-mono tracking-tight">
          {t('gallery.title', '[ Gallery ]')}
        </h1>
        <p className="text-theme-text-secondary text-lg max-w-2xl mx-auto">
          {t('gallery.subtitle', 'A collection of workshops, media features, and memorable moments.')}
        </p>
      </AnimatedView>

      <AnimatedView>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryData.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid flex flex-col gap-3 rounded-xl overflow-hidden border border-white/5 shadow-card bg-slate-800/30 p-3 group"
            >
              <div className="overflow-hidden rounded-md relative">
                <img 
                  src={item.src} 
                  alt={item.caption} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                {item.category && (
                  <span className="absolute top-2 right-2 bg-theme-bg/80 backdrop-blur-sm text-theme-accent text-xs font-mono px-2 py-1 rounded border border-white/10">
                    {item.category}
                  </span>
                )}
              </div>
              {item.caption && (
                <p className="text-sm text-theme-text-secondary px-1 italic">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </AnimatedView>

    </div>
  );
};