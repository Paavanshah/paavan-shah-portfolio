import { Section } from '../layout/Section.jsx';
import { AnimatedView } from '../ui/AnimatedView.jsx';
import publications from '../../data/publications.json';
import { FaFileAlt, FaCertificate } from 'react-icons/fa';

export const Publications = () => {
  return (
    <Section id="publications" title="[ Publications & Patents ]">
      <div className="max-w-4xl mx-auto space-y-8">
        <AnimatedView>
          <div className="bg-theme-border/50 p-6 rounded-lg card-brackets">
            <div className="relative z-10"> {/* This new div fixes the layering */}
              <div className="flex items-start gap-4">
                <FaFileAlt className="text-3xl text-theme-accent mt-1 flex-shrink-0"/>
                <div>
                  <h3 className="text-xl font-bold text-theme-text-primary">Review Paper</h3>
                  <p className="mt-2 text-theme-text-secondary">
                    "{publications.paper.title}," published in <em>{publications.paper.journal}</em>, {publications.paper.details}.
                    {publications.paper.url && 
                      <a href={publications.paper.url} target="_blank" rel="noopener noreferrer" className="text-theme-accent font-semibold hover:underline ml-2">Read it here</a>
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedView>
        <AnimatedView>
          <div className="bg-theme-border/50 p-6 rounded-lg card-brackets">
            <div className="relative z-10"> {/* This new div fixes the layering */}
              <div className="flex items-start gap-4">
                <FaCertificate className="text-3xl text-theme-accent mt-1 flex-shrink-0"/>
                <div>
                  <h3 className="text-xl font-bold text-theme-text-primary">Patent (Published)</h3>
                  <p className="mt-2 text-theme-text-secondary">{publications.patent.title}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedView>
      </div>
    </Section>
  );
};