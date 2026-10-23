import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import { useTranslation } from 'react-i18next';
import config from '../../data/config.json';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact" title={t('contact.title')}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Left Side: Contact Details */}
        <AnimatedView className="text-left space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-theme-text-primary mb-4">{t('contact.subtitle')}</h3>
            <p className="text-theme-text-secondary leading-relaxed">
              {t('contact.text')}
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-theme-text-secondary">
              <FiMail className="text-theme-accent text-xl" />
              <span>{config.email}</span>
            </div>
            <div className="flex items-center gap-4 text-theme-text-secondary">
              <FiPhone className="text-theme-accent text-xl" />
              <span>{config.phone}</span>
            </div>
            <div className="flex items-center gap-4 text-theme-text-secondary">
              <FiMapPin className="text-theme-accent text-xl" />
              <span>{config.location}</span>
            </div>
          </div>
        </AnimatedView>

        {/* Right Side: Contact Form */}
        <AnimatedView>
          <form 
            action={`https://formspree.io/f/${config.formspreeId}`} 
            method="POST" 
            className="space-y-6 bg-theme-border/20 p-8 rounded-lg border border-theme-border text-left"
          >
            <div>
              <label className="block text-sm font-medium text-theme-text-secondary mb-2">{t('contact.nameLabel')}</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full px-4 py-2 rounded-md bg-theme-bg border border-theme-border text-theme-text-primary focus:outline-none focus:border-theme-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-theme-text-secondary mb-2">{t('contact.emailLabel')}</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-4 py-2 rounded-md bg-theme-bg border border-theme-border text-theme-text-primary focus:outline-none focus:border-theme-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-theme-text-secondary mb-2">{t('contact.messageLabel')}</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                className="w-full px-4 py-2 rounded-md bg-theme-bg border border-theme-border text-theme-text-primary focus:outline-none focus:border-theme-accent transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-theme-accent text-theme-bg font-bold py-3 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              {t('contact.sendBtn')}
            </button>
          </form>
        </AnimatedView>
      </div>
    </Section>
  );
};