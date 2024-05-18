import React from "react";
import PagesSection from "../Components/PagesSection";
import Videosection from "../Components/Videosection";

const Packages = () => {
  return (
    <>
      <PagesSection
        Title={"Packages & Fee"}
        image={
          "https://learnquraan.co.uk/vendor/local/imgs/two-girls-learning-quran-online.webp"
        }
      />

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <p
          className="text-lg font-bold text-gray-700"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          You Can Choose the Following Schedules or a Customized Schedule as
          Well Which Is Not Mentioned Here. Weekends Classes Are Possible as
          Well with at Fair Price. There Is a Special Discount for Siblings.
        </p>
        <br />
        <p
          className="text-lg font-bold text-gray-700"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Choose Your Best Suited Per Week Plan Below and Then Go for the Free
          Trial Lesson for That. You Can Choose Any of the Following Plans.
        </p>
      </div>
      <div className="font-[sans-serif] my-10 text-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 max-w-[1500px] sm:grid-cols-1 p-2 gap-8 mt-6 max-sm:max-w-sm max-sm:mx-auto">
            <div
              className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="h-28 bg-gray-700 text-center p-4">
                <h3 className="text-2xl text-white font-semibold mb-1">
                  Starter
                </h3>
                <p className="text-xs text-white">1 Month</p>
              </div>
              <div className="h-24 w-24 mx-auto -mt-8 shadow-xl rounded-full bg-gray-700 text-white border-4 flex flex-col items-center justify-center border-white">
                <h3 className="text-2xl font-semibold">$10</h3>
              </div>
              <div className="px-6 py-4 mt-4">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    50 Page Unlock
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    10 GB Storage
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    6 Team Members
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-8 px-2 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-full"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div
              className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 relative"
              data-aos="fade-top"
              data-aos-delay="300"
            >
              <span className="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-md ml-3 absolute -left-4 top-0">
                Most popular
              </span>
              <div className="h-28 bg-blue-600 text-center p-4">
                <h3 className="text-2xl text-white font-semibold mb-1">
                  Professional
                </h3>
                <p className="text-xs text-white">2 Months</p>
              </div>
              <div className="h-24 w-24 mx-auto -mt-8 shadow-xl rounded-full bg-blue-600 text-white border-4 flex flex-col items-center justify-center border-white">
                <p className="text-[10px] font-bold">Save 29%</p>
                <h3 className="text-2xl font-semibold">$70</h3>
              </div>
              <div className="px-6 py-4 mt-4">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    500 Page Unlock
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    100 GB Storage
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    15 Team Members
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-8 px-2 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div
              className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="h-28 bg-pink-700 text-center p-4">
                <h3 className="text-2xl text-white font-semibold mb-1">
                  Business
                </h3>
                <p className="text-xs text-white">3 Month</p>
              </div>
              <div className="h-24 w-24 mx-auto -mt-8 shadow-xl rounded-full bg-pink-700 text-white border-4 flex flex-col items-center justify-center border-white">
                <p className="text-[10px] font-bold">Save 33%</p>
                <h3 className="text-2xl font-semibold">$99</h3>
              </div>
              <div className="px-6 py-4 mt-4">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    800 Page Unlock
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    300 GB Storage
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    50 Team Members
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-8 px-2 py-2 text-sm font-semibold text-white bg-pink-700 hover:bg-pink-800 rounded-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 min-h-[164px] max-w-screen-2xl rounded-lg mx-auto py-6 px-16 bg-blue-500 font-[sans-serif] overflow-hidden">
        <div
          className="col-span-2"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h1 className="text-3xl font-bold text-white">
            Are you interested in{" "}
            <span className="text-4xl font-semibold text-orange-500">
              {" "}
              Trial Session?{" "}
            </span>
          </h1>
          <p className="text-lg font-bold text-gray-200 mt-1">
            You can try our Free Trial Session, No Obligation Lessons to
            Evaluate our Quran Reading Service & Teachers, After the free
            lessons you can decide to continue or discontinue Learn Quran Online
            with us.!
          </p>
          <a href="javascript:void(0)">
            <button
              type="button"
              className="flex mx-auto py-2.5 px-6 rounded-full text-lg font-semibold text-center justify-center bg-white text-blue-500 hover:bg-slate-100 mt-4"
            >
              Get Free Trail Now
            </button>
          </a>
        </div>
        <div
          className="relative max-lg:hidden"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src="https://learnquraan.co.uk/vendor/local/imgs/girl-learning-how-to-read-quran.webp"
            alt="Banner Image"
            className="w-fill object-fit right-4 top-[-60px] absolute skew-x-[-16deg] rotate-2"
          />
        </div>
      </div>
    </>
  );
};

export default Packages;
