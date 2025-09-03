import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import education from '../../data/education.json';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const icons = { BTech: <FaGraduationCap />, HSC: <FaSchool />, SSC: <FaSchool /> };

export const Education = () => {
  return (
    <Section id="education" title="[ Education ]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <AnimatedView key={index}>
            <div className="bg-theme-border/50 p-6 rounded-lg h-full card-brackets">
              <div className="flex items-start gap-4">
                <span className="text-3xl text-theme-accent mt-1">
                  {icons[item.degree]}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-theme-text-primary">{item.degree}</h3>
                  <p className="font-semibold text-theme-text-secondary">{item.institution}</p>
                  <p className="text-sm text-theme-text-secondary">{item.dates}</p>
                  <p className="mt-2 font-medium text-theme-text-primary">{item.result}</p>
                  {item.coursework && (
                    <p className="mt-2 text-sm text-theme-text-secondary">
                      <span className="font-semibold text-theme-accent">Coursework:</span> {item.coursework.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </AnimatedView>
        ))}
      </div>
    </Section>
  );
};