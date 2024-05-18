import React from 'react';
import { FaCheck } from "react-icons/fa";


const OurSection = () => {
    return (
        <div>


            <div className="mt-32 bg-white rounded-md px-4 py-12">
                <div className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
                    <div className="max-md:text-center" data-aos="fade-right" data-aos-delay="300">
                        <img src="https://learnquraan.co.uk/vendor/local/imgs/kid-learning-quran-course.webp" alt="Premium Benefits"
                            className="w-full mx-auto" />

                    </div>
                    <div data-aos="fade-left" data-aos-delay="300">
                        <h2 className="text-5xl font-extrabold text-blue-300 mb-6">Why Choose
                            Learn Qura'an Academy</h2>
                        <h2 className="text-xl font-bold mb-6">We take responsibility for good results. We take you step by step with your children at the highest level to learn to read the Quran online with tajweed. The comfort of home and your selected timings, supervision of parents and guidance of expert Quran Teachers makes online Quran learning a lot easier. Therefore you can rely on us.</h2>
                        <div className='flex my-4'>
                            <FaCheck size={24} color='orange' className='mr-4' />  <p className='text-xl font-bold'>3 days free trial classes</p>
                        </div>
                        <div className='flex my-4'>
                            <FaCheck size={24} color='orange' className='mr-4' />  <p className='text-xl font-bold'>Your desired timings & days</p>
                        </div>
                        <div className='flex my-4'>
                            <FaCheck size={24} color='orange' className='mr-4' />  <p className='text-xl font-bold'>Tajweed Quran word by word</p>
                        </div>
                        <div className='flex my-4'>
                            <FaCheck size={24} color='orange' className='mr-4' />  <p className='text-xl font-bold'>Female Quran Teachers for kids and women</p>
                        </div>
                        <div className='flex my-4'>
                            <FaCheck size={24} color='orange' className='mr-4' />  <p className='text-xl font-bold'>Monthly assessment of children progress</p>
                        </div>
                        <div className='flex my-4'>
                            <FaCheck size={24} color='orange' className='mr-4' />  <p className='text-xl font-bold'>Fluent English speaking male and female Quran teachers</p>
                        </div>
                        <div className='flex my-4'>
                            <FaCheck size={24} color='orange' className='mr-4' />  <p className='text-xl font-bold'>Student Web portal for lessons and learning material</p>
                        </div>
                        <div className='flex gap-4'>
                        <button type="button"
                            className="px-10 py-3 rounded-full text-white bg-green-500 transition-all hover:bg-cyan-800 mt-10">
                          Our Services
                        </button>
                        <button type="button"
                            className="px-10 text-lg py-3 rounded-xl text-black bg-white transition-all hover:bg-cyan-800 hover:text-white mt-10">
                            Register Now
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSection
