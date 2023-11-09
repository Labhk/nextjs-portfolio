import React, {useState, useEffect} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';

function Project2() {

    const [scrolled, setScrolled] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null); 
    const slides = [
        {
          url: '/aa1.jpg',
        },
        {
            url: '/aa2.jpg',
        },
        
        {
            url: '/aa3.jpg',
        },
        {
            url: '/aa4.png',
        },
        {
            url: '/aa5.jpg',
          },
          {
              url: '/aa6.png',
          },
          {
              url: '/aa7.jpg',
          },
          {
              url: '/aa8.png',
          },
  
          {
            url: '/aa9.jpg',
          },
          {
              url: '/aa10.png',
          },
          {
              url: '/aa11.jpg',
          },
          {
              url: '/aa12.jpg',
          },
  
          {
            url: '/aa13.jpg',
          },
          {
              url: '/aa14.jpg',
          },
          {
              url: '/aa15.png',
          },
          {
              url: '/aa16.jpg',
          },
  
          {
            url: '/aa17.jpg',
          },
          {
              url: '/aa18.jpg',
          },
          {
              url: '/aa19.jpg',
          },
          {
              url: '/aa20.jpg',
          },
          {
            url: '/aa22.jpg',
        },
        {
            url: '/aa21.jpg',
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
         
        <div className="mb-8 pb-8 bg-slate-300 ">
        <div className="flex flex-col justify-center items-center">
        <div className="text-2xl px-3 text-center md:text-5xl font-bold text-gray-800 mb-4 mt-10">
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
        

        
        <div className='flex justify-center items-center space-y-1  flex-col p-4  md:mt-14 md:px-16 px-10'>
        <div className="w-full md:w-2/3 p-2 rounded-md  text-xs md:text-lg leading-5 text-gray-600 text-justify">
        This project showcases a visionary Affordable Housing Project that transcends traditional living spaces. Within the confines of this innovative endeavour, we present a collection of meticulously designed 2BHK and 3BHK flats, each representing a harmonious blend of functionality and aesthetic appeal. 
        </div>
        <div className="w-full md:w-2/3 p-2 rounded-md  text-xs md:text-lg leading-5 text-gray-600 text-justify">
        There are a plethora of amenities carefully curated to enrich the lives of our residents. Immerse yourself in the enchanting laughter of children echoing from our expansive playgrounds, creating a vibrant atmosphere conducive to family bonding and communal spirit. The event grounds, meticulously planned, serve as dynamic spaces for cultural celebrations, social gatherings, and community events, fostering a sense of togetherness among our esteemed residents. 
        </div>
        <div className="w-full md:w-2/3 p-2 rounded-md  text-xs md:text-lg leading-5 text-gray-600 text-justify">
        Striking clubhouse, offering more than just a space for recreation. It is a hub for social interaction, a sanctuary for fitness enthusiasts with a fully-equipped gym, and a versatile venue for a variety of community activities. Our commitment to holistic living is evident in every corner of this clubhouse. 
        </div>
        <div className="w-full md:w-2/3 p-2 rounded-md  text-xs md:text-lg leading-5 text-gray-600 text-justify">
        In pursuit of convenience, this project has seamlessly integrated a variety of shops within the project. This strategic inclusion ensures that daily necessities and specialty items are easily accessible, creating a living experience that is not only comfortable but also efficient.
        </div>

        </div>


                               
        <div className="mt-5 mb-10 flex justify-center items-center">
            <button className='px-6 md:px-10 py-3 md:py-4 text-sm md:text-xl rounded-lg md:rounded-2xl bg-gradient-to-br from-slate-900 via-slate-600 to-slate-900 text-white hover:bg-gradient-to-br hover:from-slate-100 hover:via-slate-500 hover:to-slate-100 hover:text-black hover:border hover:border-slate-900 button-animation' onClick={openVideoPopup}>
                Watch 3D Project Walkthrough
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
