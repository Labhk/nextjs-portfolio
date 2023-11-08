import React, {useState, useEffect} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';

function Project2() {

    const [scrolled, setScrolled] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null); 
    const slides = [
        {
          url: '/a1.png',
        },
        {
            url: '/a2.png',
        },
        {
            url: '/a22.jpg',
        },
        {
            url: '/a21.jpg',
        },

        {
            url: '/a3.jpg',
        },
        {
            url: '/a4.png',
        },
        {
            url: '/a5.jpg',
          },
          {
              url: '/a6.jpg',
          },
          {
              url: '/a7.jpg',
          },
          {
              url: '/a8.png',
          },
  
          {
            url: '/a9.png',
          },
          {
              url: '/a10.jpg',
          },
          {
              url: '/a11.jpg',
          },
          {
              url: '/a12.jpg',
          },
  
          {
            url: '/a13.jpg',
          },
          {
              url: '/a14.jpg',
          },
          {
              url: '/a15.jpg',
          },
          {
              url: '/a16.jpg',
          },
  
          {
            url: '/a17.jpg',
          },
          {
              url: '/a18.jpg',
          },
          {
              url: '/a19.jpg',
          },
          {
              url: '/a20.jpg',
          },
               
        
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    

    const handleScroll = () => setScrolled(window.scrollY > 0);

    const openVideoPopup = () => {
        setSelectedCard(true);
    };

    const closeVideoPopup = () => {
        setSelectedCard(null);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
         
        <div className="mb-8">
        <div className="flex flex-col justify-center items-center">
            <div className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 mt-10">
            Affordable Housing
            </div>
        </div>
        <div className='flex justify-center'>
        <div className="px-7 md:px-[5rem] py-[2rem] ">
            <div className="max-w-screen md:w-[70rem] h-[15rem] bg-slate-900 rounded-xl  md:h-[36rem]  relative group border">
                <div
                    // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className="w-full h-full flex justify-center  bg-center bg-cover duration-500  "
                >
                    <Image src={slides[currentIndex].url} alt={`Slide ${currentIndex + 1}`} className="w-fit h-full rounded-xl md:rounded-none   bg-center bg-cover duration-500"  width="0" height="0" sizes='90vw'/>
                </div>
                <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 md:text-2xl z-10 text-lg  rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} />
                </div>
                <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 z-10 md:text-2xl text-lg rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} />
                </div>
                <div className="flex top-4 justify-center py-2 mt-2">
                    
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer relative mr-1 ${
                                slideIndex === currentIndex ? 'text-gray-500' : 'text-gray-300'
                            }`}
                        >
                            <Image src={slide.url} alt={`Slide ${slideIndex + 1}`} className="md:w-28  md:h-full rounded-lg p-1  h-full  border border-gray-300"  width="0"
                            height="0" sizes="100vw"   />
                            {slideIndex === currentIndex && (
                                <div className="absolute w-full h-full border-[1.5px] md:border-2 border-black rounded-lg top-0 left-0 pointer-events-none"></div>
                            )}
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
        </div>
        

        
        <div className="flex flex-col space-y-1 md:space-y-0 md:space-x-8 md:flex-row p-4 mt-10 md:mt-20 md:px-16 px-10">
            <div className="w-full md:w-1/3 p-4 rounded-md flex flex-col items-center">
                <div className=" text-lg md:text-xl font-semibold">Project Info</div>
                <ul className="list-disc text-xs md:text-sm leading-5 mt-4 text-gray-400 text-justify md:pl-4">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                </ul>
            </div>
            <div className="w-full md:w-1/3 p-4 rounded-md flex flex-col items-center">
                <div className=" text-lg md:text-xl font-semibold">Project Info</div>
                <ul className="list-disc text-xs md:text-sm leading-5 mt-4 text-gray-400 text-justify md:pl-4">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                </ul>
            </div>
            <div className="w-full md:w-1/3 p-4 rounded-md flex flex-col items-center">
                <div className=" text-lg md:text-xl font-semibold">Project Info</div>
                <ul className="list-disc text-xs md:text-sm leading-5 mt-4 text-gray-400 text-justify md:pl-4">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                    <li>Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt.</li>
                </ul>
            </div>            
        </div>


                               
        <div className="mt-5 mb-10 flex justify-center items-center">
            <button className='px-6 md:px-10 py-3 md:py-4 text-sm md:text-xl rounded-lg md:rounded-2xl bg-gradient-to-br from-slate-900 via-slate-600 to-slate-900 text-white hover:bg-gradient-to-br hover:from-slate-100 hover:via-slate-500 hover:to-slate-100 hover:text-black hover:border hover:border-slate-900 button-animation' onClick={openVideoPopup}>
                Watch 3D Project Demo
            </button>
        </div>


        </div>
        

        
        

            

        {selectedCard !== null && (
            <div className="fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-80">
                <div className="relative w-full h-full flex justify-center items-center">
                    <button
                        className="absolute top-2 right-2 text-gray-300 hover:text-white focus:outline-none"
                        onClick={closeVideoPopup}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div className="w-full md:w-[85%] md:h-[85%] bg-white rounded-lg overflow-hidden">
                    <iframe
                    className='w-full h-full'
                    src="https://www.youtube.com/embed/aw2KHi9GPOE"
                    title="YouTube video player"
                    frameborder="0"
                    allowfullscreen
                    ></iframe>

                    </div>
                </div>
            </div>
        )}

        </>
    );
}

export default Project2;
