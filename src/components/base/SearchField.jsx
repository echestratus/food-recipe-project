import React from 'react'

const SearchField = ({value, onSubmit, onChange}) => {
  return (
    <form onSubmit={onSubmit} className='
    max-lg:flex max-lg:items-center max-lg:w-full max-lg:h-[45px] max-lg:bg-white max-lg:shadow-md max-lg:gap-4 max-lg:pr-2
    lg:flex lg:items-center lg:w-full lg:h-[90px] lg:bg-white lg:shadow-md lg:gap-4 lg:pr-3
    desktop:flex desktop:items-center desktop:w-full desktop:h-[90px] desktop:bg-white desktop:shadow-md desktop:gap-4 desktop:pr-3
    '>
        <img src="/search-icon.svg" alt="search-icon" className='w-[18px] h-[18px] ml-6' />
        <input onChange={onChange} type="text" value={value} placeholder='Search Recipe' className='
        max-lg:outline-none max-lg:bg-white max-lg:h-full max-lg:w-auto max-lg:flex-grow max-lg:font-air max-lg:font-normal max-lg:text-[14px] max-lg:text-[#2E266F] max-lg:placeholder:font-inter max-lg:placeholder:text-[14px] max-lg:placeholder:text-[#2E266F]
        lg:outline-none lg:bg-white lg:h-full lg:w-auto lg:flex-grow lg:font-air lg:font-normal lg:text-[18px] lg:text-[#2E266F] lg:placeholder:font-inter lg:placeholder:text-[18px] lg:placeholder:text-[#2E266F]
        desktop:outline-none desktop:bg-white desktop:h-full desktop:w-auto desktop:flex-grow desktop:font-air desktop:font-normal desktop:text-[18px] desktop:text-[#2E266F] desktop:placeholder:font-inter desktop:placeholder:text-[18px] desktop:placeholder:text-[#2E266F]
        ' />
    </form>
  )
}

export default SearchField