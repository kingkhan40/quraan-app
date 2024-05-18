import React from "react";
import PagesSection from "../Components/PagesSection";
import CardSection from "../Components/CardSection";
import Videosection from "../Components/Videosection";

const Services = () => {
  return (
    <>
      <PagesSection
        Title={"Services & Courses"}
        image={
          "https://learnquraan.co.uk/vendor/local/imgs/boy-and-girl-reading-quran.webp"
        }
      />

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <p
          className="text-lg font-bold text-gray-700"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Learn Quran Online Recitation with Tajweed. We Designed Special
          Courses for Kids to Teach Them Noorani Qauida, Identification of
          Arabic Alphabets, Harakaat, Kasra (Zair), Dammah (Paish), Sakoon
          (Jazam, Maddah and Leen Letters, Learn Standing Fatha, Kasra, and
          Dammah, Learn Shaddah, Learn Madd, Learn Tanween, Learn Idgham, Learn
          Iqlab, Learn Ikhfa, Learn Rules of Meem Sakin.
        </p>

        <br />

        <p
          className="text-lg font-bold text-gray-700"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          We Provide Online Quran Tutors (Qaarias and Qari’s) to Teach Quran to
          Students of All Ages. Learn Quran with Tajweed. Our Trained Teachers
          Provide Best Training of Quran with Tajweed. Online Quran Lessons Are
          Designed to Teach Recitation of Quran in Minimum Time.
        </p>
      </div>

      <div className="mt-32 bg-white rounded-md px-4 py-12">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className="text-6xl font-semibold text-orange-500 mb-6">
              Online Courses
            </h2>
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              At Learn Quraan Academy
            </h2>
            <h2 className="text-xl font-semibold mb-6">
              Choose any time for your class as per your convenience to attend
              our specially designed online quran courses from below.{" "}
              <span className="text-orange-400"> Submit The Query </span> and
              our team will contact you within 24 hours or contact us by{" "}
              <span className="text-green-500">Phone/Email/Skype. </span>{" "}
            </h2>
            <div className="flex gap-4">
              <button
                type="button"
                className="px-10 py-3 rounded-full text-white bg-green-500 transition-all hover:bg-cyan-800 mt-10"
              >
                Our Services
              </button>
              <button
                type="button"
                className="px-10 text-lg py-3 rounded-full border border-gray-400 text-black bg-white transition-all  hover:text-red-800 mt-10"
              >
                Register Now
              </button>
            </div>
          </div>

          <div
            className="max-md:text-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src="	https://learnquraan.co.uk/vendor/local/imgs/namaz-student-learning-islam.webp"
              alt="Premium Benefits"
              className="w-full mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <p
          className="text-3xl font-bold text-gray-700"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Are You Interested In{" "}
          <span className="text-4xl text-blue-600 font-semibold">
            {" "}
            Trial Session?{" "}
          </span>
        </p>

        <br />

        <p
          className="text-lg font-bold text-gray-700"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          You can try our Free Trial Session, No Obligation Lessons to Evaluate
          our Quran Reading Service & Teachers, After the free lessons you can
          decide to continue or discontinue Learn Quran Online with us.!
        </p>
        <button className="flex justify-end px-10 py-2 mx-auto mb-6 bg-yellow-500 rounded-full font-semibold text-base hover:text-white hover:bg-yellow-800">
          Start Free Trail Now
        </button>
      </div>

      <Videosection />
    </>
  );
};

export default Services;
