import airSamplingImg from '../assets/images/air-sampling.jpg';
import airSamplingProtoImg from '../assets/images/air-sampling-prototype.jpg';
import junarakarSatImg from '../assets/images/junarakar-sat.jpg';
import junarakarStackImg from '../assets/images/junarakar-stack.jpg';
import junarakarPcbImg from '../assets/images/junarakar-pcb.jpg';
import junarakarNews1Img from '../assets/images/junarakar-news1.jpg';
import junarakarNews2Img from '../assets/images/junarakar-news2.jpg';
import junarakarHandheldImg from '../assets/images/junarakar-handheld.jpg';
import roverNewsImg from '../assets/images/rover-news.jpg';
import roverActualImg from '../assets/images/rover-actual.jpg';
import roverScienceCityImg from '../assets/images/rover-science-city.jpg';
import roverPatentImg from '../assets/images/rover-patent.jpg'; 
import cubesatFinalImg from '../assets/images/cubesat-final.jpg';
import cubesatCircuitImg from '../assets/images/cubesat-circuit.jpg';
import cubesatBrownImg from '../assets/images/cubesat-brown.jpg';
import cubesatRenderImg from '../assets/images/cubesat-render.jpg';
import cubesatBlackImg from '../assets/images/cubesat-black.jpg';
import nucLearnImg from '../assets/images/nuc-learn.png';
import nucLearnNewsImg from '../assets/images/nuclearn-news.jpg';
import mazeSolverImg from '../assets/images/maze-solver.jpg';
import chandraRoverImg from '../assets/images/chandra-rover.jpg';
import chandraTrophyImg from '../assets/images/chandra-trophy.jpg'; 
import chandraNews1Img from '../assets/images/chandra-news1.jpg'; 
import chandraNews2Img from '../assets/images/chandra-news2.jpg'; 
import matlabDspImg from '../assets/images/matlab-dsp.png';
import ecgDashboardImg from '../assets/images/ecg-dashboard.jpg';
import ecgHardwareImg from '../assets/images/ecg-hardware.jpg';
import bleMousePrototypeImg from '../assets/images/ble-mouse-prototype.jpg';
import bleMouseOriginalImg from '../assets/images/ble-mouse-original.jpg';
import bleMouseSchematicImg from '../assets/images/ble-mouse-schematic.jpg';
import bleMouseRenderImg from '../assets/images/ble-mouse-render.jpg';
import basys3CalcImg from '../assets/images/basys3-calc.jpg';

const projectsData = [
  {
    key: "junarakarSat",
    image: junarakarSatImg,
    gallery: [junarakarSatImg, junarakarHandheldImg, junarakarPcbImg, junarakarStackImg, junarakarNews1Img, junarakarNews2Img],
    stack: ["Team Lead", "Teensy 4.0", "KiCad", "LoRa Telemetry", "Avionics"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "https://youtu.be/TOrAbFerqac?si=-5sUVVILrD-mvg6x",
      podcast: "https://www.youtube.com/live/YIOxnmEDUfQ",
      presentation: ""
    }
  },
  {
    key: "autonomousRover",
    image: roverActualImg,
    gallery: [
      { src: roverPatentImg, caption: "Official Indian Patent Registration (Design No. 448438-001)" },
      { src: roverActualImg, caption: "Actual 8-Wheeled Autonomous Rover" },
      { src: roverScienceCityImg, caption: "On Permanent Display at Robotics Gallery, Gujarat Science City" },
      { src: roverNewsImg, caption: "Live on ABP Asmita News Channel" }
    ],
    stack: ["Team Lead", "ROS2 SLAM", "NVIDIA Jetson", "Sensor Fusion", "Kinematics"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: "https://lnkd.in/p/dTnp52B6" 
    }
  },
  {
    key: "chandraRover",
    image: chandraRoverImg,
    gallery: [
      { src: chandraRoverImg, caption: "Mission CHANDRA Rover Render" },
      { src: chandraTrophyImg, caption: "1st Place Trophy Presentation" },
      { src: chandraNews1Img, caption: "The Times of India Coverage" },
      { src: chandraNews2Img, caption: "Local Media Feature" }
    ],
    stack: ["Arduino Mega", "Raspberry Pi Zero", "Six-Wheel Drive", "LoRa", "Four-Bar Suspension"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: "https://drive.google.com/file/d/1WAwj4AsnV0NStZqkGxWILUQqZ3tOxMFU/view?usp=drivesdk"
    }
  },
  {
    key: "mazeSolver",
    image: mazeSolverImg,
    gallery: [mazeSolverImg],
    stack: ["Raspberry Pi Pico", "C++", "VL53L0X TOF", "Webots", "PCB Design"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: "https://drive.google.com/file/d/10Yr4nlpHCUhdA1AazHNBpszv4ZJAYM87/view?usp=drivesdk"
    }
  },
  {
    key: "cubesat",
    image: cubesatFinalImg,
    gallery: [
      { src: cubesatFinalImg, caption: "Feb 2025: Final Assembled 1U CubeSat Prototype" },
      { src: cubesatCircuitImg, caption: "Internal Avionics & Sensor Stack" },
      { src: cubesatRenderImg, caption: "Sept 2024: Official CAD Model Render" },
      { src: cubesatBrownImg, caption: "Sept 2024: Brown Cardboard Dimensional Replica" },
      { src: cubesatBlackImg, caption: "July 2024: The First Concept Mockup" }
    ],
    stack: ["Systems Engineering", "Arduino Nano", "ESP32-CAM", "Sensors", "3D Printing"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: "https://drive.google.com/file/d/1khyhWJNg74Z9ac81iOP3txeZZZy0aK84/view?usp=drive_link"
    }
  },
  {
    key: "fpgaCalculator",
    image: basys3CalcImg,
    gallery: [
      { src: basys3CalcImg, caption: "4-Bit Calculator deployed on BASYS3 FPGA Board" }
    ],
    stack: ["Verilog HDL", "Xilinx Artix-7", "BASYS3", "RTL Design", "Digital Logic"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: "https://drive.google.com/file/d/1qFFO8ihy50nN4BASyxvOMt7-SLVI_zEU/view?usp=sharing"
    }
  },
  {
    key: "bleAirMouse",
    image: bleMousePrototypeImg,
    gallery: [
      { src: bleMousePrototypeImg, caption: "Part 2: ESP32 & MPU6050 Motion-Controlled Air Mouse Prototype" },
      { src: bleMouseOriginalImg, caption: "Part 1: Original Mass-Market BLE Remote PCB (Teardown)" },
      { src: bleMouseSchematicImg, caption: "Reverse-Engineered Schematic traced via Multimeter" },
      { src: bleMouseRenderImg, caption: "1:1 Cloned PCB Design featuring a custom MIFA Antenna" }
    ],
    stack: ["Reverse Engineering", "ESP32", "EasyEDA", "MPU6050", "Firmware"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: ""
    }
  },
  {
    key: "matlabDsp",
    image: matlabDspImg,
    gallery: [matlabDspImg],
    stack: ["MATLAB", "DSP", "FFT Analysis", "IIR Filters", "Signal Processing"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: ""
    }
  },
  {
    key: "ecgDashboard",
    image: ecgDashboardImg,
    gallery: [
      { src: ecgDashboardImg, caption: "Browser-Based Live ECG Monitoring Dashboard" },
      { src: ecgHardwareImg, caption: "AD8232 Analog Front-End & Arduino Nano Integration" }
    ],
    stack: ["JavaScript", "Web Serial API", "DSP", "Arduino", "AD8232"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: ""
    }
  },
  {
    key: "airSampling",
    image: airSamplingImg,
    gallery: [airSamplingImg, airSamplingProtoImg],
    stack: ["ESP32", "PCB Design", "Pixhawk", "C++", "Onshape 3D"],
    links: {
      github: "",
      live: "",
      paper: "",
      news: "",
      podcast: "",
      presentation: ""
    }
  },
  {
    key: "nucLearn",
    image: nucLearnImg,
    gallery: [
      { src: nucLearnImg, caption: "NucLearn Web Platform Interface" },
      { src: nucLearnNewsImg, caption: "Featured in NavGujarat Samay for UrFU Summer Program in Russia" }
    ],
    stack: ["JavaScript", "HTML/CSS", "AI Chatbot", "Gamification", "UrFU HackAtom"],
    links: {
      github: "https://github.com/Paavanshah/NucLearn",
      live: "https://paavanshah.github.io/NucLearn/",
      paper: "",
      news: "",
      podcast: "",
      presentation: ""
    }
  }
];

export default projectsData;