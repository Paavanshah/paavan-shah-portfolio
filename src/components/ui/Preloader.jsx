import Lottie from "lottie-react";
import roboticsAnimation from "../../assets/Robotics.json"; // Import the animation file

export const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="w-64 h-64"> {/* Adjust size here if needed */}
        <Lottie animationData={roboticsAnimation} loop={true} />
      </div>
    </div>
  );
};