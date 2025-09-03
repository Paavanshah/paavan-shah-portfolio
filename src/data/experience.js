import isroImg from '../assets/images/experience-isro.jpg';
import urfuImg from '../assets/images/experience-urfu.png';
import svnitImg from '../assets/images/experience-svnit.jpg';
import tutorImg from '../assets/images/experience-tutor.jpg';

const experience = [
  {
    role: "Junior Research Intern",
    org: "Space Applications Center (ISRO)",
    location: "Ahmedabad",
    dates: "31 May 2024 – 9 Aug 2024",
    bullets: [
      "Conducted electro-optical characterization and data analysis of the SWIR6000 image sensor.",
      "Gained proficiency in LabVIEW for sensor data acquisition and analysis, producing over 50 detailed performance graphs.",
      "Operated and troubleshooted the complete hardware setup of the SWIR6000 sensor."
    ],
    image: isroImg
  },
  {
    role: "Research Intern",
    org: "Ural Federal University",
    location: "Yekaterinburg, Russia",
    dates: "21 Jul 2025 – 3 Aug 2025",
    bullets: [
      "Built NucLearn, a web platform with JS games, an AI chatbot, and simulations during a HackAtom sprint.",
      "Gained exposure to MLOps, recommender systems, clustering, forecasting, and neural networks."
    ],
    image: urfuImg
  },
  {
    role: "Research Intern",
    org: "Sardar Vallabhbhai National Institute of Technology (SVNIT)",
    location: "Surat",
    dates: "26 May 2025 – 30 Jun 2025",
    bullets: [
      "Developed a complete perception-to-planning pipeline for autonomous drone navigation.",
      "Deployed system on Jetson Nano with Intel RealSense."
    ],
    image: svnitImg
  },
  {
    role: "Space Tutor",
    org: "Origin Antares",
    dates: "1 May 2025 – Present",
    bullets: [
      "Providing online tutoring on satellite systems, CubeSats, and space communication to enhance students' practical knowledge."
    ],
    image: tutorImg
  },
  {
    role: "Chairperson, IEEE WIE AG",
    org: "IEEE WIE AG (Women in Engineering)",
    dates: "21 March 2025 – Present",
    bullets: [
      "Leading the Women in Engineering student body, organizing events and workshops to promote gender diversity in engineering."
    ]
  },
  {
    role: "Vice Chair, The Space Association (TSA)",
    org: "The Space Association (TSA)",
    dates: "25 March 2025 – Present",
    bullets: [
      "Overseeing operations and organizing space exploration-related events for the student community, including CubeSats workshops and lectures."
    ]
  }
];

export default experience;