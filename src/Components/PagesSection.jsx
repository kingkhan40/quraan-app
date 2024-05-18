import React from 'react'

const PagesSection = ({image, Title}) => {
  return (
    <div>
    <div className="min-h-auto bg-blue-100 px-4 relative z-20 sm:px-10 ">
        <div className="max-w-7xl w-full mx-auto py-16">
            <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
                <div data-aos="fade-right" data-aos-delay="300">
                    <h1 className="md:text-2xl font-extrabold text-green-600 mb-6 md:!leading-[55px]">Teach A Child To Pray, At The Age Of Seven, And Punish Him For Refusing It At Ten.
                    </h1>
                   <h2 className="text-4xl font-extrabold text-blue-600 ">
                    {Title}
                   </h2>
                    <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8">
                        <h2 className='text-2xl'>Learn Quran Academy</h2>
                    </div>
                </div>

                <div className="max-lg:mt-12 h-full relative" data-aos="fade-left" data-aos-delay="300">
                    <img
                        src={image}
                        alt="hero"
                        className="max-w-full mb-10 lg:mb-0"
                    />
                    <span className="absolute left-2/2 transform -translate-x-1/2 bottom-[-20px] z-[-1]">

                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 93 93"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default PagesSection
