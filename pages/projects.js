import Project1 from '@/components/projects/Project1';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Project2 from '@/components/projects/Project2';
import Project3 from '@/components/projects/Project3';

function ProjectPage() {
    const [scrolled, setScrolled] = useState(false);

    
    const handleScroll = () => setScrolled(window.scrollY > 0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className={`abosolute top-0 w-full z-30 ${scrolled ? 'shadow-md' : ''}`} >
            <nav className="bg-slate-900 border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:px-14 px-6 ">
                    <a
                        to="/"className="flex items-center cursor-pointer">
                        <Image
                            src="/logo.png"
                            className="h-12 w-[4rem] mr-3"
                            width="0"
                            height="0" 
                            sizes="100vw"   
                            alt="Flowbite Logo"
                            onClick={() => {window.location.href="/"}}
                        />
                    </a>
                </div>
            </nav>
        </div>
        <Project1/>
        <Project2/>
        <Project3/>
        </>
    )
}
export default ProjectPage;
