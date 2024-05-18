import React, { useState, useRef } from 'react';

const Videosection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const videoRef = useRef(null);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        const video = videoRef.current;
        if (video) {
            video.pause();
        }
        setModalIsOpen(false);
    };

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    return (
        <div className="mt-28 bg-gray-50 px-4 sm:px-10 py-12">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7" data-aos="fade-right" data-aos-delay="300">
                        <h1 className="max-w-2xl mb-4 text-4xl text-green-500 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">How We Teach?</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Don't know how it works? Watch our demo Class video now.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                            Get Started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">Speak to Sales</a>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 cursor-pointer lg:flex" data-aos="fade-left" data-aos-delay="300">
                        <img onClick={openModal} src="./images/vid.png" alt="mockup" className='rounded-2xl' />
                    </div>
                </div>
            

            {modalIsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0">
                        <div className="flex items-center justify-center h-screen">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative w-2/4 h-2/4">
                                <video ref={videoRef} width="100%" height="100%" controls className="w-full h-full">
                                    <source src="./images/vid.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center" onClick={handlePlayPause}>
                                    <svg className="w-16 h-16 text-white cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M0 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm14-10.276v20.552L20 9.724l-6-5.276z"
                                        ></path>
                                    </svg>
                                </div>
                                <button className="absolute top-4 right-4 text-white" onClick={closeModal}>
                                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Videosection;
