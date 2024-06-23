import React from 'react'

const SearchField = ({value, onSubmit, onChange}) => {
  return (
    <form onSubmit={onSubmit} className='
    max-lg:flex max-lg:items-center max-lg:w-full max-lg:h-[45px] max-lg:bg-white max-lg:shadow-md max-lg:gap-4 max-lg:pr-2
    2xl:flex 2xl:items-center 2xl:w-full 2xl:h-[90px] 2xl:bg-white 2xl:shadow-md 2xl:gap-4 2xl:pr-3
    '>
        <img src="/search-icon.svg" alt="search-icon" className='w-[18px] h-[18px] ml-6' />
        <input onChange={onChange} type="text" value={value} placeholder='Search Recipe' className='
        max-lg:outline-none max-lg:bg-white max-lg:h-full max-lg:w-auto max-lg:flex-grow max-lg:font-air max-lg:font-normal max-lg:text-[14px] max-lg:text-[#2E266F] max-lg:placeholder:font-inter max-lg:placeholder:text-[14px] max-lg:placeholder:text-[#2E266F]
        2xl:outline-none 2xl:bg-white 2xl:h-full 2xl:w-auto 2xl:flex-grow 2xl:font-air 2xl:font-normal 2xl:text-[18px] 2xl:text-[#2E266F] 2xl:placeholder:font-inter 2xl:placeholder:text-[18px] 2xl:placeholder:text-[#2E266F]
        ' />
    </form>
  )
}

export default SearchField