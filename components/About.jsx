import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []);

    return (
        <>
            
            <div className="min-h-screen flex justify-center items-center  " id="about-section">
                
                <div className="container mx-auto px-4 " >
                    <div className="flex flex-col md:flex-row ">
                        <div className="md:w-1/2 md:pr-14" >
                            <img
                                src="https://i.ibb.co/fSgSKps/Architect.gif"
                                alt="About Me"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-20 mt-8 md:mt-10" >
                            <h2 className="text-5xl font-semibold mb-8">About Me</h2>
                           
                            <p className="text-gray-700 text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nulla ac commodo cursus. Sed nec metus id justo hendrerit feugiat. Proin iaculis tristique magna, et viverra nulla consequat quis.
                            </p>
                            <p className="text-gray-700 pt-3 text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nulla ac commodo cursus. Sed nec metus id justo hendrerit feugiat. Proin iaculis tristique magna, et viverra nulla consequat quis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
