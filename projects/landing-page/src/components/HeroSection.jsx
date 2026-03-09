import React from "react";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide ">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-lg text-center text-neutral-500 max-w-4xl mt-10">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into reality
      </p>
      <div className="flex justify-center items-center gap-4 mt-10">
        <a
          className="px-4 py-2 bg-orange-800 text-white rounded-md flex-shrink-0"
          href="#"
        >
          Start for free
        </a>
        <a
          className="px-4 py-2 border border-white text-white rounded-md"
          href="#"
        >
          Documentation
        </a>
      </div>
      <div className="flex  mt-10 justify-center gap-4">
        <video
          autoPlay
          muted
          loop
          className="w-1/2 rounded-lg border border-orange-300 shadow-sm shadow-orange"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          muted
          loop
          className="w-1/2 rounded-lg border border-orange-300 shadow-sm shadow-orange"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
