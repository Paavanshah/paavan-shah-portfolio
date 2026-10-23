import { AnimatedView } from '../ui/AnimatedView.jsx';
import { Section } from '../layout/Section.jsx';
import { useTranslation } from 'react-i18next';
import MyAvatar from '../../assets/images/avatar.jpg';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t('about.title')}>
      <AnimatedView className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2 text-lg text-theme-text-secondary space-y-4 text-left">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
        </div>
        <div className="flex justify-center md:justify-end">
            <img 
              src={MyAvatar}
              alt={t('hero.name', 'Paavan Shah')}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-glow border-4 border-theme-accent/50"
            />
        </div>
      </AnimatedView>
    </Section>
  );
};