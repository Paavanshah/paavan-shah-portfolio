import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import config from '../../data/config.json';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const Contact = () => {
  return (
    <Section id="contact" title="[ Get In Touch ]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatedView>
          <h3 className="text-2xl font-bold mb-4 text-theme-text-primary">Contact Details</h3>
          <p className="text-theme-text-secondary mb-6">
            Feel free to reach out via email, phone, or social media. I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <div className="space-y-4">
            <a href={`mailto:${config.email}`} className="flex items-center gap-4 group">
              <FiMail className="w-6 h-6 text-theme-accent"/>
              <span className="text-theme-text-secondary group-hover:text-theme-accent">{config.email}</span>
            </a>
            <a href={`tel:${config.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
              <FiPhone className="w-6 h-6 text-theme-accent"/>
              <span className="text-theme-text-secondary group-hover:text-theme-accent">{config.phone}</span>
            </a>
            <div className="flex items-center gap-4">
              <FiMapPin className="w-6 h-6 text-theme-accent"/>
              <span className="text-theme-text-secondary">{config.location}</span>
            </div>
          </div>
        </AnimatedView>
        <AnimatedView>
          <form 
            action={`https://formspree.io/f/xnnbbgrr`} // Make sure to add your ID to config.json
            method="POST" 
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-theme-text-secondary">Your Name</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-theme-border/50 border border-theme-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-accent"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-theme-text-secondary">Your Email</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-theme-border/50 border border-theme-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-accent"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-theme-text-secondary">Message</label>
              <textarea name="message" id="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-theme-border/50 border border-theme-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-accent"></textarea>
            </div>
            <input type="text" name="_gotcha" style={{display: 'none'}} />
            <div>
              <button type="submit" className="w-full px-6 py-3 font-semibold bg-theme-accent text-theme-bg rounded shadow-glow hover:opacity-90 focus:outline-none transition-opacity">
                Send Message
              </button>
            </div>
          </form>
        </AnimatedView>
      </div>
    </Section>
  );
};