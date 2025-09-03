import { AnimatedView } from '../ui/AnimatedView.jsx';
import { Section } from '../layout/Section.jsx';
import config from '../../data/config.json';

// 1. Import your new avatar image
import MyAvatar from '../../assets/images/avatar.jpg';

export const About = () => {
  return (
    <Section id="about" title="[ About Me ]">
      <AnimatedView className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2 text-lg text-theme-text-secondary space-y-4 text-left">
            {config.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
        <div className="flex justify-center md:justify-end">
            <img 
              src={MyAvatar} // 2. Use your imported avatar here
              alt="Paavan Shah"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-glow border-4 border-theme-accent/50"
            />
        </div>
      </AnimatedView>
    </Section>
  );
};