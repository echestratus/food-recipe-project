import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[685px] flex justify-center bg-[#EFC81A] mt-64'>
        <div className='w-[1720px] h-full flex flex-col items-center'>
            <p className='font-air font-normal text-[72px] text-[#2E266F] mt-52'>Eat, Cook, Repeat</p>
            <p className='font-inter font-normal text-[24px] text-[#707070] mt-10'>Share your best recipe by uploading here !</p>
            <div className='flex justify-center w-full relative mt-52'>
                <ul className='flex justify-center gap-8'>
                    <li className='font-inter font-normal text-[16px] text-[#707070]'>Product</li>
                    <li className='font-inter font-normal text-[16px] text-[#707070]'>Company</li>
                    <li className='font-inter font-normal text-[16px] text-[#707070]'>Learn More</li>
                    <li className='font-inter font-normal text-[16px] text-[#707070]'>Get In Touch</li>
                </ul>
                <p className='font-air font-normal text-[14px] text-[#000000] text-end absolute right-0'>© Arkademy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer