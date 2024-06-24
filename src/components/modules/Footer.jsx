import React from 'react'

const Footer = () => {
  return (
    <div className='
    max-lg:w-full max-lg:h-[400px] max-lg:flex max-lg:justify-center max-lg:bg-[#EFC81A] max-lg:mt-32
    lg:w-full lg:h-[685px] lg:flex lg:justify-center lg:bg-[#EFC81A] lg:mt-64
    2xl:w-full 2xl:h-[685px] 2xl:flex 2xl:justify-center 2xl:bg-[#EFC81A] 2xl:mt-64
    '>
        <div className='
        max-lg:w-[80%] max-lg:h-full max-lg:flex max-lg:flex-col
        lg:w-[1024px] lg:h-full lg:flex lg:flex-col lg:items-center
        2xl:min-w-[1536px] 2xl:h-full 2xl:flex 2xl:flex-col 2xl:items-center
        '>
            <p className='
            max-lg:font-air max-lg:font-normal max-lg:text-[20px] max-lg:text-[#2E266F] max-lg:mt-10
            lg:font-air lg:font-normal lg:text-[72px] lg:text-[#2E266F] lg:mt-52
            2xl:font-air 2xl:font-normal 2xl:text-[72px] 2xl:text-[#2E266F] 2xl:mt-52
            '>Eat, Cook, Repeat</p>
            <p className='
            max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070] max-lg:mt-2
            lg:font-inter lg:font-normal lg:text-[24px] lg:text-[#707070] lg:mt-10
            2xl:font-inter 2xl:font-normal 2xl:text-[24px] 2xl:text-[#707070] 2xl:mt-10
            '>Share your best recipe by uploading here !</p>
            <div className='
            max-lg:flex max-lg:flex-col max-lg:w-full max-lg:relative max-lg:mt-10
            lg:flex lg:justify-center lg:w-full lg:relative lg:mt-52
            '>
                <ul className='
                max-lg:flex max-lg:flex-col max-lg:gap-2
                lg:max-2xl:flex lg:max-2xl:justify-center lg:max-2xl:gap-8
                '>
                    <li className='
                    max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070]
                    lg:max-2xl:font-inter lg:max-2xl:font-normal lg:max-2xl:text-[16px] lg:max-2xl:text-[#707070]
                    '>Product</li>
                    <li className='
                    max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070]
                    lg:max-2xl:font-inter lg:max-2xl:font-normal lg:max-2xl:text-[16px] lg:max-2xl:text-[#707070]
                    '>Company</li>
                    <li className='
                    max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070]
                    lg:max-2xl:font-inter lg:max-2xl:font-normal lg:max-2xl:text-[16px] lg:max-2xl:text-[#707070]
                    '>Learn More</li>
                    <li className='
                    max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070]
                    lg:max-2xl:font-inter lg:max-2xl:font-normal lg:max-2xl:text-[16px] lg:max-2xl:text-[#707070]
                    '>Get In Touch</li>
                </ul>
                <p className='
                max-lg:font-air max-lg:font-normal max-lg:text-[14px] max-lg:text-[#000000] max-lg:mt-12
                lg:font-air lg:font-normal lg:text-[14px] lg:text-[#000000] lg:text-end lg:absolute lg:right-0
                2xl:font-air 2xl:font-normal 2xl:text-[14px] 2xl:text-[#000000] 2xl:text-end 2xl:absolute 2xl:right-0
                '>© Arkademy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer