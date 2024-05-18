import React from 'react';

const HeroSection = () => {
  return (
    
    <div className="mt-28 bg-gray-50 px-4 sm:px-10 py-12">
      <div className="mb-16 max-w-2xl text-center mx-auto">
        <h2 className="md:text-4xl text-3xl font-extrabold mb-6">Start Learning Quran</h2>
        <p className="mt-6">Register yourself or register your child with us today and take your first free trial class.</p>
      </div>
    <div className="max-w-7xl mx-auto flex justify-between">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-8 bg-gray-100 rounded-md p-6 max-w-3xl max-md:order-1" data-aos="fade-right" data-aos-delay="300">
            <div className="flex sm:items-center max-sm:flex-col-reverse">
              <img src='https://learnquraan.co.uk/vendor/local/imgs/icons/oneclick-icon.svg' className="w-20 h-20 rounded-full max-sm:mb-2" />
              <div className="ml-4">
                <h4 className="text-3xl font-extrabold sm:text-xl">One Click Registration</h4>
                <p className="mt-2 text-xl">Simply click here to go to the registration page. Register for free online Quran classes with our online Quran teachers by filling in your name and contact information.</p>
              </div>
            </div>
            <div className="flex sm:items-center max-sm:flex-col-reverse p-6 relative lg:left-12 bg-white shadow-[0_2px_20px_-4px_rgba(93,96,127,0.2)] rounded-md">
              <img src='https://learnquraan.co.uk/vendor/local/imgs/icons/schedule-free-trial-icon.svg' className="w-20 h-20 rounded-full max-sm:mb-2" />
              <div className="ml-4">
                <h4 className="text-3xl font-extrabold sm:text-xl">Schedule Free Trial</h4>
                <p className="mt-2">After registration, we will contact you to set a convenient time for your Free Quran Trial Classes and provide an overview of our Quran teaching process.</p>
              </div>
            </div>
            <div className="flex sm:items-center max-sm:flex-col-reverse">
              <img src='https://learnquraan.co.uk/vendor/local/imgs/icons/take-first-class-icon.svg' className="w-20 h-20 rounded-full max-sm:mb-2" />
              <div className="ml-4">
                <h4 className="text-3xl font-extrabold sm:text-xl">Start Taking Your First Class</h4>
                <p className="mt-2">Log in to our Student Portal with the provided credentials and start taking your first class with one of our online Qaari (Quran Teacher).</p>
              </div>
            </div>
          </div>
          <div className="mt-4" data-aos="fade-left" data-aos-delay="300">
            <img src="https://learnquraan.co.uk/vendor/local/imgs/cute-girl-learning-quran.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
