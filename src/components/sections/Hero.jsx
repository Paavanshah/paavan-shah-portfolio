import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; 
import { useTranslation } from 'react-i18next';
import heroImage from '../../assets/images/hero-image.jpg';
import { FiDownload } from 'react-icons/fi';

export const Hero = () => {
  const { t } = useTranslation();
  
  // Use translations for roles and skills dynamically across all locales
  const roles = t('hero.roles', { returnObjects: true });
  const skills = t('hero.skills', { returnObjects: true });

  return (
    <section id="home" className="min-h-screen w-full flex items-center pt-20 pb-12 lg:pt-0 lg:pb-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Text, Tags, and Resume Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 text-center lg:text-left"
        >
          <motion.h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-theme-text-primary">
            {t('hero.greeting')} <span className="text-theme-accent">{t('hero.name')}</span>
          </motion.h1>

          <motion.div className="mt-6 text-lg text-theme-text-secondary sm:text-xl h-20 lg:h-14">
             {roles && roles.length >= 4 && (
               <TypeAnimation 
                 sequence={[roles[0], 1500, roles[1], 1500, roles[2], 1500, roles[3], 1500]} 
                 wrapper="span" 
                 speed={50} 
                 repeat={Infinity} 
               />
             )}
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            {skills && skills.map((skill, index) => (
              <span 
                key={index} 
                className="text-theme-accent border border-theme-accent/50 bg-theme-accent/10 text-sm font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Download Resume Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a 
              href={`${import.meta.env.BASE_URL}Paavan_Shah_Resume.pdf`} 
              download="Paavan_Shah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-theme-accent text-theme-bg px-6 py-3 rounded-md font-bold hover:bg-white hover:text-theme-bg transition-colors shadow-lg"
            >
              <FiDownload className="text-lg" /> 
              {t('hero.resumeBtn', 'Download Resume')}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Restored Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="lg:col-span-2 flex justify-center mt-12 lg:mt-0"
        >
          <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-theme-accent/50 shadow-glow">
            <img
              src={heroImage}
              alt={t('hero.name', 'Paavan Shah')}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};