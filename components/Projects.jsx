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
      <div className="min-h-screen flex flex-col justify-center items-center pb-14 px-4" id="projects-section">
        <div className="text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 mb-4  mt-14" >
          Projects & Thesis
        </div>
        <hr className="w-14 h-0 my-4 mt-1 mb-7 border-slate-500 border-[1.5px] rounded-full bg-black" />
        
        <p className="mb-6 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl md:w-1/2 "  >
        Explore some of my latest projects below. These projects showcase innovative architecture and design solutions.
        </p>

        <Image width="0"  height="0" sizes="100vw"  
          src="/spread.gif"
          alt="Project Image"
          className="w-[20rem] h-72 rounded-3xl cursor-pointer"
          onClick={() => {
            window.open("https://issuu.com/shubh1508/docs/50_mb_prot", "_blank");
          }}
        />
      <div className='flex gap-2'><button
          className="hover:bg-gray-900 border bg-slate-800 border-white text-white text-sm md:text-lg py-2 mr-3 px-3 rounded-xl mt-10"
          onClick={() => { window.location.href = '/projects' }}

        >
          View My Projects
        </button>
        <button
          className="hover:bg-gray-900 border bg-slate-800 border-white text-white text-sm md:text-lg md:py-2 py-1 mr-3 px-3 rounded-xl mt-10"
          onClick={() => {
            window.open("https://drive.google.com/file/d/1mKJHXUK93JinJKrID1jDhvLOmax35cAn/view?usp=sharing", "_blank");
          }}

        >
          View My Thesis
        </button></div>
        
      </div>
    </>
  );
}

export default Projects;
