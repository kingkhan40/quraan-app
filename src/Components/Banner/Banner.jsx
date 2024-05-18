import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="mx-auto  mb-6 rounded-2xl lg:max-w-screen-2xl">
      <Slider {...settings}>
        <div>
          <div className="min-h-auto bg-blue-100 px-4 relative z-20 sm:px-10 ">
            <div className="max-w-7xl w-full mx-auto py-16">
              <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h1 className="md:text-5xl text-4xl font-extrabold mb-6 md:!leading-[55px]">
                    {" "}
                    قال النبي صلى الله عليه وسلم
                  </h1>
                  <p className="text-3xl leading-relaxed">
                    <h2 class="arabic color-pc">
                      طْلُبُوا الْعِلْمَ مِنَ الْمَهْدِ اِلىَ اللَّهْدِ
                    </h2>
                  </p>
                  <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8">
                    <h2 className="text-2xl">
                      Seek knowledge from cradle to death
                    </h2>
                  </div>
                </div>

                <div
                  className="max-lg:mt-12 h-full relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <img
                    src="https://learnquraan.co.uk/vendor/local/imgs/slider/children-learning-islam-namaz.webp"
                    alt="banner img"
                    className="w-full h-full object-cover"
                  />
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-full h-full top-0 left-0 -z-10 "
                  >
                    <g clip-path="url(#clip0_221_10)">
                      <path
                        d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"
                        fill="url(#paint0_linear_221_10)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_221_10"
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A7B5FF" />
                        <stop
                          offset="1"
                          stop-color="#F3ACFF"
                        />
                      </linearGradient>
                      <clipPath id="clip0_221_10">
                        <rect
                          width="200"
                          height="200"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-h-auto bg-blue-100 px-4 relative z-20 sm:px-10">
            <div className="max-w-7xl w-full mx-auto py-16">
              <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h1 className="md:text-5xl text-4xl font-extrabold mb-6 md:!leading-[55px]">
                    {" "}
                    قال النبي صلى الله عليه وسلم
                  </h1>
                  <p className="text-base leading-relaxed">
                    طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
                  </p>
                  <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8">
                    <p className="text-base leading-relaxed">
                      <h2 className=" text-2xl">
                        Seeking the religious knowledge is an obligation upon
                        every Muslim.
                      </h2>
                    </p>
                  </div>
                </div>
                <div
                  className="max-lg:mt-12 h-full relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <img
                    src="https://learnquraan.co.uk/vendor/local/imgs/slider/girl-and-boy-learning-quran.webp"
                    alt="banner img"
                    className="w-full h-full object-cover"
                  />
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-full h-full top-0 left-0 -z-10 "
                  >
                    <g clip-path="url(#clip0_221_10)">
                      <path
                        d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"
                        fill="url(#paint0_linear_221_10)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_221_10"
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A7B5FF" />
                        <stop
                          offset="1"
                          stop-color="#F3ACFF"
                        />
                      </linearGradient>
                      <clipPath id="clip0_221_10">
                        <rect
                          width="200"
                          height="200"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-h-auto bg-blue-100 px-4 sm:px-10 relative z-20">
            <div className="max-w-7xl w-full mx-auto py-16">
              <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h1 className="md:text-5xl text-4xl font-extrabold mb-6 md:!leading-[55px]">
                    <h3> قال النبي صلى الله عليه وسلم</h3>
                  </h1>
                  <p className="text-base leading-relaxed">
                    <h2 className=" text-2xl">
                      طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
                    </h2>
                  </p>

                  <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8">
                    <p className="text-base leading-relaxed">
                      <h2 className=" text-2xl">
                        Seeking the religious knowledge is an obligation upon
                        every Muslim.
                      </h2>
                    </p>
                  </div>
                </div>
                <div
                  className="max-lg:mt-12 h-full relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <img
                    src="https://learnquraan.co.uk/vendor/local/imgs/slider/kids-learning-quran-online.webp"
                    alt="banner img"
                    className="w-full h-full object-cover"
                  />
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-full h-full top-0 left-0 -z-10 "
                  >
                    <g clip-path="url(#clip0_221_10)">
                      <path
                        d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"
                        fill="url(#paint0_linear_221_10)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_221_10"
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A7B5FF" />
                        <stop
                          offset="1"
                          stop-color="#F3ACFF"
                        />
                      </linearGradient>
                      <clipPath id="clip0_221_10">
                        <rect
                          width="200"
                          height="200"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-h--auto bg-blue-100 px-4 relative z-20 sm:px-10">
            <div className="max-w-7xl w-full mx-auto py-16">
              <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h1 className="md:text-5xl text-4xl font-extrabold mb-6 md:!leading-[55px]">
                    {" "}
                    قال النبي صلى الله عليه وسلم
                  </h1>
                  <p className="text-3xl leading-relaxed">
                    إن أفضلكم من تعلم القرآن وعلمه
                  </p>
                  <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8">
                    <p className="text-base leading-relaxed">
                      <h2 className=" text-2xl">
                        Seeking the religious knowledge is an obligation upon
                        every Muslim.
                      </h2>
                    </p>
                  </div>
                </div>

                <div
                  className="max-lg:mt-12 h-full relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <img
                    src="https://learnquraan.co.uk/vendor/local/imgs/slider/happy-kids-reading-quran-kareem.webp"
                    alt="banner img"
                    className="w-full h-full object-cover"
                  />
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-full h-full top-0 left-0 -z-10 "
                  >
                    <g clip-path="url(#clip0_221_10)">
                      <path
                        d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"
                        fill="url(#paint0_linear_221_10)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_221_10"
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A7B5FF" />
                        <stop
                          offset="1"
                          stop-color="#F3ACFF"
                        />
                      </linearGradient>
                      <clipPath id="clip0_221_10">
                        <rect
                          width="200"
                          height="200"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
