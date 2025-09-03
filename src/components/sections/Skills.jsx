import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import skillsData from '../../data/skills.json';
import { FaCuttlefish, FaPython, FaCode, FaRobot, FaSatelliteDish, FaMemory, FaRulerCombined, FaPeopleCarry, FaComments, FaProjectDiagram, FaMicrochip, FaWaveSquare, FaUbuntu, FaRaspberryPi } from 'react-icons/fa';

// ... (ICONS object remains the same)

// This new ICONS object only uses verified icons from the 'Fa' (Font Awesome) library.
const ICONS = {
  'C++': <FaCuttlefish />,
  'C': <FaCode />,
  'Python': <FaPython />,
  'Verilog': <FaMicrochip />,
  'MATLAB': <FaProjectDiagram />,
  'ROS2': <FaRobot />,
  'Xilinx Vivado': <FaMicrochip />,
  'Arduino IDE': <FaMicrochip />,
  'CODESYS': <FaCode />,
  'EasyEDA': <FaCode />,
  'LTspice': <FaWaveSquare />,
  'Ubuntu': <FaUbuntu />,
  'Jetson Nano': <FaMemory />,
  'Pixhawk 2.4.8': <FaRobot />,
  'Embedded Systems': <FaMemory />,
  'Robotics': <FaRobot />,
  'Autonomous Navigation': <FaRobot />,
  'Sensor Fusion': <FaCode />,
  'Wireless Communication': <FaSatelliteDish />,
  'PCB Design': <FaRulerCombined />,
  'Fusion 360': <FaRulerCombined />,
  'Onshape': <FaRulerCombined />,
  'Leadership': <FaPeopleCarry />,
  'Collaboration': <FaPeopleCarry />,
  'Communication': <FaComments />,
  'Project Management': <FaCode />,
  'Mentoring': <FaPeopleCarry />,
  'Adaptability': <FaCode />,
  'default': <FaCode />
};

export const Skills = () => {
  return (
    <Section id="skills" title="[ Skills ]"> {/* Removed background class */}
      <div className="space-y-12">
        {skillsData.map((category) => (
          <AnimatedView key={category.title}>
            <h3 className="text-xl font-semibold text-center mb-6 text-theme-text-primary">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.items.map((skill) => (
                <div key={skill} className="flex items-center gap-2 bg-theme-border/50 px-4 py-2 rounded">
                  <span className="text-theme-accent">{ICONS[skill] || ICONS.default}</span>
                  <span className="font-medium text-theme-text-primary">{skill}</span>
                </div>
              ))}
            </div>
          </AnimatedView>
        ))}
      </div>
    </Section>
  );
};
