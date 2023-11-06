import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  // useEffect(() => {
  //     AOS.init();
  //     AOS.refresh();
  // }, []);

  return (
    <div className="min-h-screen relative bg-img" id="hero-section">
      <div
        className="absolute md:w-[45%]  bg-slate-900 bg-opacity-80 bottom-0 left-10 py-10 w-35 flex items-center px-10"
        id="intro-content"
        style={{ zIndex: 2 }} 
      >
        <div>
            <h1 className="font-medium text-lg text-white"> Hello!</h1>
          <h1 className="text-5xl font-bold text-white mb-4">
            I&apos;m Shubh Khatke <br /> <span className="text-4xl mt-2">Architect</span> 
          </h1>
          <p className="text-md text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt. Fusce viverra arcu sit amet leo scelerisque, vel auctor arcu tempus
          </p>
          <button
            className=" hover:bg-gray-900 border border-white text-white text-lg py-1 mr-3 px-3 rounded-xl shadow-custom"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            See My Projects
          </button>
          <button
            className=" hover:bg-gray-900 underline underline-offset-2 text-white text-lg py-1 px-3 rounded-xl shadow-custom"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
