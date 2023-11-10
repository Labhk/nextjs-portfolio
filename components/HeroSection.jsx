import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  // useEffect(() => {
  //     AOS.init();
  //     AOS.refresh();
  // }, []);

  const handleDownloadCV = () => {
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = "/shubhk-resume.pdf"; // Replace with the actual path to your PDF file
    link.download = "shubhk-resume.pdf"; // Specify the filename for the downloaded file
    link.click();

    // Clean up the link element
    link.remove();
  };

  return (
    <div className="min-h-screen relative bg-img" id="hero-section">

      <div
        className="absolute md:w-[45%]  bg-slate-900 bg-opacity-80 md:bottom-0 h-full md:h-fit md:left-10 py-10 w-35 flex items-center px-10"
        id="intro-content"
        style={{ zIndex: 2 }} 
      >
        <div className="text-center md:text-left">
            <h1 className="font-medium text-lg text-white"> Hello!</h1>
          <h1 className="md:text-5xl text-3xl font-bold text-white mb-4">
            Ar. Shubh Khatke here
          </h1>
          <p className="text-md text-gray-400 mb-6">
            New Architecture Graduate with a solid grasp of design principles, project management, adn zeal for crafting functional, visually appealing spaces. Ready to apply academic insights from L. J. School of Architecture to bring innovative ideas adn fresh perspective to architectural projects.
          </p>
          <button
            className=" hover:bg-gray-900 mb-3 border border-white text-white text-lg py-1 mr-3 px-3 rounded-xl shadow-custom"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            See My Projects
          </button>
          <button
            className=" hover:bg-gray-900 border border-white text-white text-lg py-1 mr-3 px-3 rounded-xl shadow-custom"
            onClick={() => {
              window.open("https://issuu.com/shubh1508/docs/50_mb_prot", "_blank");
            }}
          >
            View Portfolio
          </button>
          <button
            className=" hover:bg-gray-900 underline underline-offset-2 text-white text-lg py-1 px-3 rounded-xl shadow-custom"
            onClick={handleDownloadCV}
          >
            
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
