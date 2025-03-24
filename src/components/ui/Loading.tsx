import React from "react";
import "aos/dist/aos.css";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img
        src="/assets/runningdog.gif" // 👈 aquí tu imagen de perrito corriendo
        alt="Loading dog"
        className="w-32 h-32 mb-4 animate-bounce"
      />
      <p className="text-pink-500 font-bold text-lg animate-pulse">
        Fetching cuteness...
      </p>
    </div>
  );
};
