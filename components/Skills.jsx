import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

function Skills() {
    // You can keep your useEffect for AOS initialization if needed

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center bg-slate-200 items-center" id="skills-section">
                <div className="text-5xl font-bold text-gray-900">
                    Skills
                </div>
                <hr className="w-14 h-0 my-4 mt-5 border-slate-500 border-[1.5px] rounded-full bg-black"   />
                <div className="mt-4 md:px-14 grid grid-cols-2 md:grid-cols-5  gap-3">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="flex flex-col py-3 px-6 rounded-2xl justify-center items-center">
                            <div className="h-14 mb-3">
                                <Image
                                    width={100}
                                    height={100}
                                    src={skill.imageSrc}
                                    alt={skill.skillName}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="text-lg font-medium">{skill.skillName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

const skillsData = [
    {
        skillName: 'Autocad',
        imageSrc: '/autocad.png',
    },
    {
        skillName: 'Sketchup',
        imageSrc: '/sketchup.png',
    },
    {
        skillName: 'PhotoShop',
        imageSrc: '/photoshop.png',
    },
    {
        skillName: 'Adobe Illustrator',
        imageSrc: '/illustrator.png',
    },
    {
        skillName: 'Adobe Indesign',
        imageSrc: '/indesign.png',
    },
    {
        skillName: 'V-RAy',
        imageSrc: '/vray.png',
    },
    {
        skillName: 'Lumion',
        imageSrc: '/lumion.svg',
    },
    {
        skillName: 'Enscape',
        imageSrc: '/enscape.jpg',
    },
    {
        skillName: 'Power Point',
        imageSrc: '/powerpoint.png',
    },
    {
        skillName: 'Excel',
        imageSrc: '/excel.png',
    },
];

export default Skills;
