import React,{ useEffect, useRef} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import Script from 'next/script';

function Contact() {
    const formRef = useRef(null);

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_6zyiciq', 'template_nyvfhsq', formRef.current, 'S40Uf4gzK6C-EjIct')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent")
            })
            .catch((error) => {
                console.log(error.text);
            });
        console.log('Form data submitted');
        // Reset the form after submission
        formRef.current.reset();
    };

    return (
        <>
           <Script
                type="module"
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
            ></Script>
            <Script
                nomodule
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            ></Script>
            <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white" id="contact-section">
                <div className="relative px-[100px] py-[50px] flex justify-center items-center flex-col bg-cover w-full " style={{ backgroundImage: `url('contact-bg.jpg')` }}>
                    <div className="relative z-20" >
                    <div className="max-width-[800px] flex flex-col items-center justify-center mb-14">
                        <div className="text-[36px] font-semibold">Contact Me</div>
                        <div className="font-thin text-center">Have a project in mind or want to collaborate on a design? Feel free to reach out. I'm an aspiring architect with a passion for creating captivating spaces that merge functionality and aesthetics.</div>
                    </div>
                    <div className="w-full flex justify-center items-center mt-9">
                        <div className="flex flex-col w-1/2" >
                            <div className="relative flex px-0 py-6">
                                <div className="text-black min-w-[60px] h-[60px] flex rounded-full justify-center items-center bg-white text-3xl">
                                <ion-icon name="location"></ion-icon>
                                </div>
                                <div className="flex flex-col text-lg ml-5">
                                    <div className="font-bold text-slate-300">Location</div>
                                    <div className="font-semibold">India</div>
                                </div>
                            </div>
                            <div className="relative flex px-0 py-6">
                                <div className="text-black min-w-[60px] h-[60px] flex rounded-full justify-center items-center bg-white text-3xl">
                                <ion-icon name="call"></ion-icon>
                                </div>
                                <div className="flex flex-col text-lg ml-5">
                                    <div className="font-bold text-slate-300">Phone</div>
                                    <div className="font-semibold">+91 7202111212</div>
                                </div>
                            </div>
                            <div className="relative flex px-0 py-6">
                                <div className="text-black min-w-[60px] h-[60px] flex rounded-full justify-center items-center bg-white text-3xl">
                                <ion-icon name="mail"></ion-icon>
                                </div>
                                <div className="flex flex-col text-lg ml-5">
                                    <div className="font-bold text-slate-300">Email</div>
                                    <div className="font-semibold">shubhkhatke9@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white flex" >
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="text-[30px] text-gray-700 font-semibold">Send Message</div>
                                <div className="w-[20rem]">
                                    <input
                                        type="text"
                                        name="user_name"
                                        className='w-full py-[5px] text-[16px] px-0 mx-0 my-[10px] mb-1 border-b-2 border-gray-700 outline-none text-gray-700'
                                        required
                                    />
                                    <div className="text-gray-700 text-sm">Full Name</div>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="user_email"
                                        className='w-full py-[5px] text-[16px] px-0 mx-0 my-[10px] mb-1   border-b-2 border-gray-700 outline-none text-gray-700'
                                        required
                                    />
                                    <div className=" text-gray-700 text-sm">Email</div>
                                </div>
                                <div className="">
                                    <textarea
                                        name="message"
                                        className='w-full py-[5px] text-[16px] px-0 mx-0 my-[10px] mb-1   border-b-2 border-gray-700 outline-none text-gray-700'
                                        required
                                    ></textarea>
                                    <div className=" text-gray-700 text-sm">Type Your Message...</div>
                                </div>
                                <div className="w-full py-[5px] text-[16px] px-0 mx-0 my-[10px] bg-gray-200  border-b-2 border-gray-700 outline-none text-black text-center mt-8">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-60  z-0" ></div>
                    
                </div>
            </div>
        </>
    )
}

export default Contact