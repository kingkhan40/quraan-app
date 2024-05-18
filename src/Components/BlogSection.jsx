import React from "react";

const BlogSection = () => {
  const servicesPush = () => {
    
  };
  return (
    <div>
      <div className="mt-32 bg-white rounded-md px-4 py-12">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
          <div
            className="max-md:text-center"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img
              src="https://learnquraan.co.uk/vendor/local/imgs/quran-female-teacher-online.webp"
              alt="Premium Benefits"
              className="w-full mx-auto"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-extrabold text-blue-300 mb-6">
              Islamic Courses That We Offer
            </h2>
            <h2 className="text-xl font-bold mb-6">
              Embark on your journey with us into the world of Islam and Quran
              Kareem. <span className="text-green-600">In Sha Allah!</span>{" "}
            </h2>

            <div>
              <p className="text-xl font-bold">
                Our courses are designed keeping in mind the age, and abilities
                of learners. We have special courses for kids and for beginners
                in which they start from Norani Qaida which is best guide to
                start learning the reading of Quran. We do special emphasis on
                Tajweed rules from start. From the first day, the teacher helps
                student to pronounce the word in correct pronunciations so that
                when they move forward they recite in Tajweed intuitively. In
                Quran reading course, online Quran tutors teaches Quran word by
                word. We are well aware of the fact that online teaching is
                different from teaching in person so all our Quran courses are 1
                to 1 to make sure student is paying attention to his lessons.
                Our courses include Norani Qaida, Quran Reading, Advance Tajweed
                , Translation of Quran, Tafseer, Quran Memorization, and Arabic
                classes. We also include Salah, Kalimas, Hadeeth and Dua's for
                kids in their courses.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={servicesPush}
                className="px-10 py-3 rounded-full text-white bg-green-500 transition-all hover:bg-cyan-800 mt-10"
              >
                Our Services
              </button>
              <button
                type="button"
                className="px-10 text-lg py-3 rounded-full border-1 text-black bg-white transition-all hover:bg-cyan-800 hover:text-white mt-10"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
