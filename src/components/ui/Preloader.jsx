import Lottie from "lottie-react";
import roboticsAnimation from "../../assets/Robotics.json"; 

export const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-theme-bg">
      <div className="w-64 h-64"> 
        <Lottie animationData={roboticsAnimation} loop={true} />
      </div>
    </div>
  );
};