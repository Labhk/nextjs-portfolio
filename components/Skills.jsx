import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center bg-slate-200 items-center" id="skills-section">
                <div className="text-5xl font-bold text-gray-900" >
                    Skills
                </div>
                <hr className="w-14 h-0 my-4 mt-5 border-slate-500 border-[1.5px] rounded-full bg-black"   />
                <div className="mt-[4rem] md:px-20 grid grid-cols-5  gap-4" >
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-14 mb-3">
                            <img src="/autocad.png" alt="" className="w-full h-full" />
                        </div>
                        <div className=" text-lg font-medium">Autocad</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-[4rem] mb-1">
                            <img src="/sketchup.png" alt="" className="w-full h-full" />
                        </div>
                        <div className=" text-lg font-medium">Sketchup</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-14 mb-3">
                            <img src="/photoshop.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="text-lg font-medium">PhotoShop</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-14 mb-3">
                            <img src="/illustrator.png" alt="" className="w-full h-full" />
                        </div>
                        <div className=" text-lg font-medium">Adobe Illustrator</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-14 mb-3">
                            <img src="/indesign.png" alt="" className="w-full h-full" />
                        </div>
                        <div className=" text-lg font-medium">Adobe Indesign</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-14 mb-3">
                            <img src="/vray.png" alt="" className="w-full h-full rounded-xl" />
                        </div>
                        <div className=" text-lg font-medium">V-RAy</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-[4.5rem] ">
                            <img src="/lumion.svg" alt="" className="w-full h-full" />
                        </div>
                        <div className=" text-lg font-medium">Lumion</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-14 mb-3">
                            <img src="/enscape.jpg" alt="" className="w-full h-full rounded-xl" />
                        </div>
                        <div className=" text-lg font-medium">Enscape</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-14 mb-3">
                            <img src="/powerpoint.png" alt="" className="w-full h-full" />
                        </div>
                        <div className=" text-lg font-medium">Power Point</div>
                    </div>
                    <div className="flex flex-col py-3 px-6   rounded-2xl justify-center items-center">
                        <div className="h-14 mb-3">
                            <img src="/excel.png" alt="" className="w-full h-full" />
                        </div>
                        <div className=" text-lg font-medium">Excel</div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Skills;
