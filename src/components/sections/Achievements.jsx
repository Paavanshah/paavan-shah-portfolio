import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import achievementsData from '../../data/achievements.js';
import { FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Achievements = () => {
  const { awards, galleryImages } = achievementsData;

  return (
    <Section id="achievements" title="[ Achievements ]">
      <div className="max-w-4xl mx-auto">
        {/* List of Awards */}
        <ul className="space-y-4">
          {awards.map((item, index) => (
            <AnimatedView key={index}>
              <li className="flex items-start gap-4 p-4 bg-theme-border/50 rounded-lg">
                <FaTrophy className="text-xl text-theme-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-theme-text-primary">{item.title}</p>
                  <p className="text-sm text-theme-text-secondary">{item.date}</p>
                </div>
              </li>
            </AnimatedView>
          ))}
        </ul>

        {/* Image Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="w-full h-64 rounded-lg overflow-hidden shadow-glow border-2 border-theme-border"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <img src={image} alt={`Achievement photo ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
};