import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);



  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center pb-14" id="projects-section">
        <div className="text-5xl font-bold text-gray-800 mb-4 mt-14" >
          Projects
        </div>
        <hr className="w-14 h-0 my-4 mt-1 mb-7 border-slate-500 border-[1.5px] rounded-full bg-black" />
        
        <p className="text-lg text-gray-600 mb-12 w-1/2 text-center"  >
        Explore some of my latest projects below. These projects showcase innovative architecture and design solutions.
        </p>

        <img
          src="project.gif"
          alt="Project Image"
          className="max-w-full h-72"

        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-8 rounded-lg"
          onClick={() => { window.location.href = '/projects' }}

        >
          View My Projects
        </button>
      </div>
    </>
  );
}

export default Projects;
