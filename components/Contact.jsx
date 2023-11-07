import React,{ useEffect, useRef} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Script from "next/script";

function Contact() {
    const formRef = useRef(null);

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_6zyiciq", "template_nyvfhsq", formRef.current, "S40Uf4gzK6C-EjIct")
            .then((result) => {
                console.log(result.text);
                alert("Message Sent")
            })
            .catch((error) => {
                console.log(error.text);
            });
        console.log("Form data submitted");
        // Reset the form after submission
        formRef.current.reset();
    };

    return (
        <>
           {/* <Script
                type="module"
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
            ></Script>
            <Script
                nomodule
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            ></Script> */}
            {/* <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white" id="contact-section">
                <div className="relative px-[100px] py-[50px] flex justify-center items-center flex-col bg-cover w-full " style={{ backgroundImage: `url("contact-bg.jpg")` }}>
                    <div className="relative z-20" >
                    <div className="max-width-[800px] flex flex-col items-center justify-center mb-14">
                        <div className="text-[36px] font-semibold">Contact Me</div>
                        <div className="font-thin text-center">Have a project in mind or want to collaborate on a design? Feel free to reach out. I&apos;m an aspiring architect with a passion for creating captivating spaces that merge functionality and aesthetics.</div>
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
                                        className="w-full py-[5px] text-[16px] px-0 mx-0 my-[10px] mb-1 border-b-2 border-gray-700 outline-none text-gray-700"
                                        required
                                    />
                                    <div className="text-gray-700 text-sm">Full Name</div>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="user_email"
                                        className="w-full py-[5px] text-[16px] px-0 mx-0 my-[10px] mb-1   border-b-2 border-gray-700 outline-none text-gray-700"
                                        required
                                    />
                                    <div className=" text-gray-700 text-sm">Email</div>
                                </div>
                                <div className="">
                                    <textarea
                                        name="message"
                                        className="w-full py-[5px] text-[16px] px-0 mx-0 my-[10px] mb-1   border-b-2 border-gray-700 outline-none text-gray-700"
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
            </div> */}
            <section class="bg-slate-200 dark:bg-gray-900" id="contact-section">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" >
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form ref={formRef} onSubmit={handleSubmit} class="space-y-8">
                    <div>
                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name="user_email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" name="user_name" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <div class="flex justify-center">
                        <button type="submit" class="hover:bg-gray-900 border bg-slate-800 border-white text-white text-lg py-2 mr-3 px-4 rounded-xl">Send message</button>
                    </div>
                </form>
            </div>
            </section>
        </>
    )
}

export default Contact