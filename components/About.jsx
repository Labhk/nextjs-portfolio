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
            
            <div className="min-h-screen flex justify-center items-center bg-[#f7f7f7] py-8 md:py-1" id="about-section">
                
                <div className="container mx-auto px-4 md:px-5 " >
                    <div className="flex flex-col md:flex-row ">
                        <div className="md:w-1/2 md:pr-10" >
                            <img
                                src="/aboutp.jpg"
                                alt="About Me"
                                className='pt-8'
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-10 mt-8  text-center md:text-left" >
                            <h2 className="text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 mb-7">About Me</h2>
                           
                            <p className="text-gray-700 text-lg">
                            As a recent graduate in architecture, I am fueled by a profound passion for transforming spaces into inspiring environments. My academic journey has equipped me with a solid foundation in architectural principles, design thinking, and a commitment to innovative solutions.
                            </p>
                            <p className="text-gray-700 pt-3 text-lg">
                            Beyond the technical aspects, I bring a collaborative and detail-oriented approach to every project. I believe in the power of architecture to enhance the human experience, and I am committed to contributing fresh perspectives and creative solutions to the field.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
