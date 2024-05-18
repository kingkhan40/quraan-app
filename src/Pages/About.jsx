import React from "react";
import PagesSection from "../Components/PagesSection";
import { FaCheck } from "react-icons/fa";
import CardSection from "../Components/CardSection";
import Testimonial from "../Components/Testimonial";

const About = () => {
  return (
    <>
      <PagesSection
        Title={"About"}
        image={
          "https://learnquraan.co.uk/vendor/local/imgs/boy-and-girl-in-quran-class-online-uk.webp"
        }
      />

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <p
          className="text-lg font-bold text-gray-700"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Learn Quran Academy Is Non-Partisan Organization, We Are Not Part Of
          Any Group, Islamic Organization Or Mosques. We Welcome All Students
          Interested In Learning Quran. We Consists Of A Small Team Of Dedicated
          Workers From Project Management, Engineering Department And Tutors.
          This Team Functions With The Guidance Of Many Of The Ustadhs For
          Providing Online Quran Learning Services To Our Muslim Brothers And
          Sisters Interested To Learn Quran Online.
        </p>

        <br />

        <p
          className="text-lg font-bold text-gray-700"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Learn Quran Academy Recognizes That A Vast Majority Of People Is
          Engaged In Full Time Commitments Ranging From Full Time Work, Studies
          And Family. Especially For Children And Sisters Facing Difficulties To
          Go Into Islamic Centers And In Mosques To Learn Quran As Environment
          In Society And Even Amongst Muslims Are Not Ideal For Going On The
          Path Of Knowledge Whilst Trying To Retain Their Modesty. It Is
          Therefore With The Consideration Of All Environmental Factors. We Aim
          To Serve And Assist Such Muslims By Providing Online One-To-One Live
          Interactive Classes For Learning The Holy Quran At A Time Most Suited
          To You. We Use Skype And Zoom For Teaching To Make Sure Best Quality
          Communication.
        </p>
      </div>

      <div className="mt-32 bg-white rounded-md px-4 py-12">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-extrabold text-green-800 mb-6">
              Our Core <span className="text-orange-400">Goals</span>{" "}
            </h2>

            <div className="flex my-4">
              <FaCheck
                size={24}
                color="orange"
                className="mr-4"
              />{" "}
              <p className="text-xl font-bold">
                Innovating the Quran Learning Methods
              </p>
            </div>
            <div className="flex my-4">
              <FaCheck
                size={24}
                color="orange"
                className="mr-4"
              />{" "}
              <p className="text-xl font-bold">
                Teaching Quran in an interactive way
              </p>
            </div>
            <div className="flex my-4">
              <FaCheck
                size={24}
                color="orange"
                className="mr-4"
              />{" "}
              <p className="text-xl font-bold">
                Building Moral character of our students
              </p>
            </div>
            <div className="flex my-4">
              <FaCheck
                size={24}
                color="orange"
                className="mr-4"
              />{" "}
              <p className="text-xl font-bold">Enable everyone learn Quran</p>
            </div>

            <h2 className="text-xl font-bold my-8 mb-6">
              Our teaching method is very successful and our all students are
              very pleased with our service therefore we are offering Free Trial
              Classes in which you just evaluate our services.
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
                className="px-10 text-lg py-3 rounded-xl text-black bg-white transition-all hover:bg-cyan-800 hover:text-white mt-10"
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

      <CardSection
        image1={
          "https://learnquraan.co.uk/vendor/local/imgs/icons/quran-kareem-open-icon.svg"
        }
        image2={
          "https://learnquraan.co.uk/vendor/local/imgs/icons/our-mission-icon.svg"
        }
        image3={
          "https://learnquraan.co.uk/vendor/local/imgs/icons/our-teacher-icon.svg"
        }
      />

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

      <Testimonial />
    </>
  );
};

export default About;
