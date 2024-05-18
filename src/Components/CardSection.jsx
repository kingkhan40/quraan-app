import React from "react";

const CardSection = ({ image1, image2, image3 }) => {
  return (
    <div className="grid grid-cols-1 gap-10 max-w-screen-2xl mx-auto my-20 md:grid-cols-3 px-4">
      <div
        className="block rounded-3xl bg-gray-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg mx-auto my-6"
            src={image1}
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
          <h2 className="text-2xl text-orange-600 font-semibold text-center mx-auto">
            Who Are We?
          </h2>
        </div>
        <div className="p-8">
          <p className="mb-4 text-xl font-semibold text-neutral-600 dark:text-neutral-200">
            Learn Quran Academy was established in 2006 with the aim of teaching
            the Holy Quran from Arabic alphabets to reading Quran with Tajweed
            in U.K and all over the world. Our key aim in mind is to prepare
            children who are unable to read Quran with Tajweed and for adults
            also who can read but not aware of Tajweed rules.
          </p>
        </div>
        <button className="flex px-7 py-2 mx-auto mb-6 bg-slate-100 rounded-full font-semibold text-base hover:text-white hover:bg-slate-500">
          Our Services
        </button>
      </div>

      <div
        className="block rounded-3xl bg-gray-300  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg mx-auto my-6"
            src={image2}
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
          <h2 className="text-2xl text-orange-600 font-semibold text-center mx-auto">
            Our Mission
          </h2>
        </div>
        <div className="p-6">
          <p className="mb-4 text-xl font-semibold text-neutral-600 dark:text-neutral-200">
            Learn Quran Academy aims to serve and assist such Muslims either
            adults or children by providing online one-to-one live interactive
            classes for learning the holy Quran and Islamic education at the
            most suited time to them. We want to spread the teachings of Quran
            to the Muslims living all around the world at the comfort of their
            home.
          </p>
        </div>
        <button className="flex px-7 py-2 mx-auto mb-6 bg-slate-100 rounded-full font-semibold text-base hover:text-white hover:bg-slate-500">
          Register Now
        </button>
      </div>

      <div
        className="block rounded-3xl bg-gray-300  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg mx-auto my-6"
            src={image3}
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
          <h2 className="text-2xl text-orange-600 font-semibold text-center mx-auto">
            Our Teachers
          </h2>
        </div>
        <div className="p-6">
          <p className="mb-4 text-xl font-semibold text-neutral-600 dark:text-neutral-200">
            All our teachers have experience of teaching Quran to English
            speaking students Our teachers are not only selected just for their
            knowledge, but also for their interpretational skills to gain
            motivation and encouragement in students to increase the knowledge
            of the Quran more and more. We have experienced female teachers for
            female students.
          </p>
        </div>
        <button className="flex px-7 py-2 mx-auto mb-6 bg-slate-100 rounded-full font-semibold text-base hover:text-white hover:bg-slate-500">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CardSection;
