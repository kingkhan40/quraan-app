import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {

    const [slidesToShow, setSlidesToShow] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1); // Set to 1 for mobile view
            } else {
                setSlidesToShow(2); // Set to 2 for desktop view
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (

        <div className="mx-auto mb-20 my-20 rounded-2xl lg:max-w-7xl">
            <Slider {...settings}>
                <div className='testimonial-card p-4' data-aos="fade-right" data-aos-delay="300">
                    <div className='bg-white'>

                        <div className="items-center text-center justify-center">
                            <img src="https://learnquraan.co.uk/vendor/local/imgs/testimonial/avatar-2.jpg" className="w-14 h-14 rounded-full text-center mx-auto" />
                            <div className="ml-4 my-4">
                                <h4 className="font-extrabold text-md">John Doe</h4>
                                <p className="mt-1 text-xs text-gray-400">Founder of Rubik</p>
                            </div>
                        </div>
                        <div className="mx-4">
                            <p>I am a small business owner and Learn Quran Academy made it easy to me to choose the
                                weekly timings of my Online Quran Classes in UK and now I can learn Quran online at ease. The way course is designed and
                                professional teacher with in-depth knowledge of what he is teaching makes, all the
                                difference. Highly recommended to learn tajweed online. Thanks to you Learn Quran Academy.</p>
                        </div>
                        <div className="flex space-x-2 my-2 mx-4">
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className='testimonial-card p-4' data-aos="fade-left" data-aos-delay="300">
                    <div className='bg-white'>

                        <div className="items-center text-center justify-center">
                            <img src="https://learnquraan.co.uk/vendor/local/imgs/testimonial/avatar-1.jpg" className="w-14 h-14 rounded-full text-center mx-auto" />
                            <div className="ml-4 my-4">
                                <h4 className="font-extrabold text-md">John Doe</h4>
                                <p className="mt-1 text-xs text-gray-400">Founder of Rubik</p>
                            </div>
                        </div>
                        <div className="mx-4">
                            <p>I am a small business owner and Learn Quran Academy made it easy to me to choose the
                                weekly timings of my Online Quran Classes in UK and now I can learn Quran online at ease. The way course is designed and
                                professional teacher with in-depth knowledge of what he is teaching makes, all the
                                difference. Highly recommended to learn tajweed online. Thanks to you Learn Quran Academy.</p>
                        </div>
                        <div className="flex space-x-2 my-2 mx-4">
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className='testimonial-card  p-4' data-aos="fade-right" data-aos-delay="300">
                    <div className='bg-white'>
                        <div className="items-center text-center justify-center">
                            <img src="https://learnquraan.co.uk/vendor/local/imgs/testimonial/avatar-3.jpg" className="w-14 h-14 rounded-full text-center mx-auto" />
                            <div className="ml-4 my-4">
                                <h4 className="font-extrabold text-md">John Doe</h4>
                                <p className="mt-1 text-xs text-gray-400">Founder of Rubik</p>
                            </div>
                        </div>
                        <div className="mx-4">
                            <p>I am a small business owner and Learn Quran Academy made it easy to me to choose the
                                weekly timings of my Online Quran Classes in UK and now I can learn Quran online at ease. The way course is designed and
                                professional teacher with in-depth knowledge of what he is teaching makes, all the
                                difference. Highly recommended to learn tajweed online. Thanks to you Learn Quran Academy.</p>
                        </div>
                        <div className="flex space-x-2 my-2 mx-4">
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className=' testimonial-card  p-4' data-aos="fade-left" data-aos-delay="300">
                    <div className='bg-white'>
                        <div className="items-center text-center justify-center">
                            <img src="https://learnquraan.co.uk/vendor/local/imgs/testimonial/avatar-4.jpg" className="w-14 h-14 rounded-full text-center mx-auto" />
                            <div className="ml-4 my-4">
                                <h4 className="font-extrabold text-md">John Doe</h4>
                                <p className="mt-1 text-xs text-gray-400">Founder of Rubik</p>
                            </div>
                        </div>
                        <div className="mx-4">
                            <p>I am a small business owner and Learn Quran Academy made it easy to me to choose the
                                weekly timings of my Online Quran Classes in UK and now I can learn Quran online at ease. The way course is designed and
                                professional teacher with in-depth knowledge of what he is teaching makes, all the
                                difference. Highly recommended to learn tajweed online. Thanks to you Learn Quran Academy.</p>
                        </div>
                        <div className="flex space-x-2 my-2 mx-4">
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                    </div>
                </div>


            </Slider>
        </div>
    )
}

export default Testimonial
