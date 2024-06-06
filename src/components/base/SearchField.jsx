import React from 'react'

const SearchField = ({value, onSubmit, onChange}) => {
  return (
    <form onSubmit={onSubmit} className='
    max-sm:flex max-sm:items-center max-sm:w-full max-sm:h-[45px] max-sm:bg-white max-sm:shadow-md max-sm:gap-4 max-sm:pr-2
    2xl:flex 2xl:items-center 2xl:w-full 2xl:h-[90px] 2xl:bg-white 2xl:shadow-md 2xl:gap-4 2xl:pr-3
    '>
        <img src="/search-icon.svg" alt="search-icon" className='w-[18px] h-[18px] ml-6' />
        <input onChange={onChange} type="text" value={value} placeholder='Search Recipe' className='
        max-sm:outline-none max-sm:bg-white max-sm:h-full max-sm:w-auto max-sm:flex-grow max-sm:font-air max-sm:font-normal max-sm:text-[14px] max-sm:text-[#2E266F] max-sm:placeholder:font-inter max-sm:placeholder:text-[14px] max-sm:placeholder:text-[#2E266F]
        2xl:outline-none 2xl:bg-white 2xl:h-full 2xl:w-auto 2xl:flex-grow 2xl:font-air 2xl:font-normal 2xl:text-[18px] 2xl:text-[#2E266F] 2xl:placeholder:font-inter 2xl:placeholder:text-[18px] 2xl:placeholder:text-[#2E266F]
        ' />
    </form>
  )
}

export default SearchField