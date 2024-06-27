import React from 'react'

const Footer = () => {
  return (
    <div className='
    max-lg:w-full max-lg:h-[400px] max-lg:flex max-lg:justify-center max-lg:bg-[#EFC81A] max-lg:mt-32
    lg:w-full lg:h-[685px] lg:flex lg:justify-center lg:bg-[#EFC81A] lg:mt-64
    desktop:w-full desktop:h-[685px] desktop:flex desktop:justify-center desktop:bg-[#EFC81A] desktop:mt-64
    '>
        <div className='
        max-lg:w-[80%] max-lg:h-full max-lg:flex max-lg:flex-col
        lg:w-[1024px] lg:h-full lg:flex lg:flex-col lg:items-center
        desktop:min-w-[1536px] desktop:h-full desktop:flex desktop:flex-col desktop:items-center
        '>
            <p className='
            max-lg:font-air max-lg:font-normal max-lg:text-[20px] max-lg:text-[#2E266F] max-lg:mt-10
            lg:font-air lg:font-normal lg:text-[72px] lg:text-[#2E266F] lg:mt-52
            desktop:font-air desktop:font-normal desktop:text-[72px] desktop:text-[#2E266F] desktop:mt-52
            '>Eat, Cook, Repeat</p>
            <p className='
            max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070] max-lg:mt-2
            lg:font-inter lg:font-normal lg:text-[24px] lg:text-[#707070] lg:mt-10
            desktop:font-inter desktop:font-normal desktop:text-[24px] desktop:text-[#707070] desktop:mt-10
            '>Share your best recipe by uploading here !</p>
            <div className='
            max-lg:flex max-lg:flex-col max-lg:w-full max-lg:relative max-lg:mt-10
            lg:flex lg:justify-center lg:w-full lg:relative lg:mt-52
            '>
                <ul className='
                max-lg:flex max-lg:flex-col max-lg:gap-2
                lg:flex lg:justify-center lg:gap-8
                '>
                    <li className='
                    max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070]
                    lg:font-inter lg:font-normal lg:text-[16px] lg:text-[#707070]
                    '>Product</li>
                    <li className='
                    max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070]
                    lg:font-inter lg:font-normal lg:text-[16px] lg:text-[#707070]
                    '>Company</li>
                    <li className='
                    max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070]
                    lg:font-inter lg:font-normal lg:text-[16px] lg:text-[#707070]
                    '>Learn More</li>
                    <li className='
                    max-lg:font-inter max-lg:font-normal max-lg:text-[16px] max-lg:text-[#707070]
                    lg:font-inter lg:font-normal lg:text-[16px] lg:text-[#707070]
                    '>Get In Touch</li>
                </ul>
                <p className='
                max-lg:font-air max-lg:font-normal max-lg:text-[14px] max-lg:text-[#000000] max-lg:mt-12
                lg:font-air lg:font-normal lg:text-[14px] lg:text-[#000000] lg:text-end lg:absolute lg:right-4
                desktop:font-air desktop:font-normal desktop:text-[14px] desktop:text-[#000000] desktop:text-end desktop:absolute desktop:right-0
                '>© Arkademy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer