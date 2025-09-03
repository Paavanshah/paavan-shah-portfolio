// Import all your project images from the assets folder
import nucLearnImg from '../assets/images/nuc-learn.png';
import matlabDspImg from '../assets/images/matlab-dsp.png';
import roverImg from '../assets/images/rover.jpg';
import calculatorFpgaImg from '../assets/images/calculator-fpga.png';
import cubesatImg from '../assets/images/cubesat.png';
import mazeSolverImg from '../assets/images/maze-solver.jpg';
import chandraRoverImg from '../assets/images/chandra-rover.jpg';
import smartFarmingImg from '../assets/images/smart-farming.jpg';

const projects = [
  {
    title: "NucLearn - Gamified Education Platform",
    summary: "Gamified educational platform for non-energy nuclear tech featuring IsoAdventure, Budget Simulator, AI Q&A, and Isotopedia.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Paavanshah/NucLearn",
    image: nucLearnImg
  },
  {
    title: "Flute Frequency Isolation (MATLAB DSP)",
    summary: "Isolates a 585.544 Hz flute component from mixed audio using FFT, Butterworth band-pass filtering, and smoothing.",
    stack: ["MATLAB", "DSP"],
    link: "https://github.com/Paavanshah/Frequency-Focus-A-MATLAB-Based-DSP-Framework-for-Instrument-Isolation",
    image: matlabDspImg
  },
  {
    title: "8-Wheeled Autonomous Rover",
    summary: "Advanced navigation, obstacle avoidance, and localization rover using sensor fusion for efficient terrain traversal.",
    stack: ["ROS2", "Jetson Nano", "Python"],
    link: "https://www.linkedin.com/posts/paavan-shah-085b5a23a_robotics-autonomousvehicles-engineering-activity-7145788415849885696-6_m2",
    image: roverImg
  },
  {
    title: "4-Bit Calculator (Basys3/FPGA)",
    summary: "Designed a 4-bit calculator on a BASYS3 FPGA board using Verilog HDL with safe divide-by-zero display logic.",
    stack: ["Verilog", "Vivado", "FPGA"],
    link: "https://www.linkedin.com/posts/paavan-shah-085b5a23a_verilog-fpga-digitalelectronics-activity-7128038743130636288-U0s1",
    image: calculatorFpgaImg
  },
  {
    title: "CubeSat Prototype",
    summary: "Functional prototype integrating power, data acquisition, and onboard processing with telemetry simulation.",
    stack: ["C++", "Custom PCB", "Sensors"],
    link: "https://www.linkedin.com/posts/paavan-shah-085b5a23a_cubesat-pcbdesign-embedded-activity-7177517909012377600-kK17",
    image: cubesatImg
  },
  {
    title: "Maze Solver Bot (RP2040)",
    summary: "Achieved 90% maze solving accuracy using a Raspberry Pi Pico, ToF sensor, and a custom navigation algorithm.",
    stack: ["Raspberry Pi Pico", "C++", "Arduino IDE"],
    link: "https://www.linkedin.com/posts/paavan-shah-085b5a23a_robotics-mazesolver-raspberrypipico-activity-7143160459733979136-hM-B",
    image: mazeSolverImg
  },
  {
    title: "Mission CHANDRA Rover",
    summary: "Award-winning rover with object detection using Arduino, NodeMCU, RPi Zero, and OpenCV.",
    stack: ["Arduino", "Raspberry Pi", "OpenCV"],
    link: "https://www.linkedin.com/posts/paavan-shah-085b5a23a_isro-sac-chandrayaan3-activity-7124316492067786752-Yc6c",
    image: chandraRoverImg
  },
  {
    title: "IoT Smart Farming System",
    summary: "ESP8266-based system for real-time soil and environment monitoring, improving crop growth by ~15%.",
    stack: ["IoT", "ESP8266", "Sensors"],
    link: "https://www.linkedin.com/posts/paavan-shah-085b5a23a_iot-smartfarming-esp8266-activity-7108341604245942273-wK_J",
    image: smartFarmingImg
  }
];

export default projects;