import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

function WorkExperience() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Check the screen width when the component mounts
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 700);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const divStyle = {
    width: '100%',
    paddingTop: '14px',
    background: 'linear-gradient(to bottom, white 52%, #111827 52%)',
  };

  const mobileStyle = {
    width: '100%',
    background: '#111827',
  };
 

    return (
        <>
            <div className="flex flex-col justify-center items-center pt-14" id="work-experience-section">
                <div className="text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900" >
                    Experience
                </div>
                <hr className="w-14 h-0 my-4 mt-5 border-slate-500 border-[1.5px] rounded-full bg-black" />

                <div className=" w-full p-8 py-14 mt-8" style={isWideScreen ? divStyle : mobileStyle}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-[4rem]">
                        {/* Card 1 */}
                        <div className="bg-slate-200 shadow-lg rounded-2xl flex flex-col justify-center items-center p-6" >
                            <Image src="/plan2.jpg" alt="Image 1" className="w-full h-40 object-cover rounded-xl" width="0" height="0" sizes="100vw"/>
                            <h2 className="text-xl font-semibold mt-4">Project 1</h2>
                            <p className="text-gray-500 mt-2">03/23 - 07/23 (4 months)</p>
                            <p className="text-gray-900 mt-2 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">View Plans</button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-slate-200 shadow-lg rounded-2xl flex flex-col justify-center items-center p-6" >
                            <Image src="/plan.jpg" alt="Image 2" className="w-full h-40 object-cover rounded-xl" width="0" height="0" sizes="100vw"/>
                            <h2 className="text-xl font-semibold mt-4">Project 2</h2>
                            <p className="text-gray-500 mt-2">Duration: 8 months</p>
                            <p className="text-gray-900 mt-2 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800" onClick={() => {
                              window.open("https://drive.google.com/file/d/1zf_bpyVGsLRwMxgeKfyc_l5h-6rSGBf_/view?usp=sharing", "_blank");
                            }}
                            >View Plans</button>
                        </div>

                        <div className="bg-slate-200 shadow-lg rounded-2xl flex flex-col justify-center items-center p-6" >
                            <Image src="/plan3.jpg" alt="Image 3" className="w-full h-40 object-cover rounded-xl" width="0" height="0" sizes="100vw"/>
                            <h2 className="text-xl font-semibold mt-4">Project 3</h2>
                            <p className="text-gray-500 mt-2">Duration: 10 months</p>
                            <p className="text-gray-900 mt-2 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" onClick={() => {
                              window.open("https://drive.google.com/file/d/1zf_bpyVGsLRwMxgeKfyc_l5h-6rSGBf_/view?usp=sharing", "_blank");
                            }}
                            >View Plans</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default WorkExperience