import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation'; // 1. Import the new component
import config from '../../data/config.json';
import heroImage from '../../assets/images/hero-image.jpg';

const topSkills = [
  "Embedded Systems Development",
  "Autonomous Robotics and Navigation",
  "Wireless Communication and IoT",
  "Robotics Software Frameworks"
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:col-span-3 text-center lg:text-left"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl text-theme-text-primary"
          >
            Hi, I’m <span className="text-theme-accent">{config.name}</span>
          </motion.h1>

          {/* 2. Replace the static paragraph with the TypeAnimation component */}
          <motion.div variants={itemVariants} className="mt-6 text-lg text-theme-text-secondary sm:text-xl h-20 lg:h-14">
            <TypeAnimation
              sequence={[
                'Satellite Communication & SmallSat Systems',
                1500,
                'Autonomous Robotics & Drones',
                1500,
                'Embedded AI & Edge Computing',
                1500,
                'IoT & Wireless Sensor Networks',
                1500,
                'VLSI & FPGA-Based Digital Systems',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Animated Skills Tags Section */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
            variants={containerVariants}
          >
            {topSkills.map((skill) => (
              <motion.span
                key={skill}
                className="text-theme-accent border border-theme-accent/50 bg-theme-accent/10 text-sm font-medium px-3 py-1 rounded-full"
                variants={itemVariants}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            {/* ...Buttons remain the same... */}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-theme-accent/50 shadow-glow">
            <img
              src={heroImage}
              alt="Paavan Shah"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};