import React, { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';
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

        <Image width="0"  height="0" sizes="100vw"  
          src="/project.png"
          alt="Project Image"
          className="w-64 h-72"

        />

        <button
          className="hover:bg-gray-900 border bg-slate-800 border-white text-white text-lg py-1 mr-3 px-3 rounded-xl"
          onClick={() => { window.location.href = '/projects' }}

        >
          View My Projects
        </button>
      </div>
    </>
  );
}

export default Projects;
