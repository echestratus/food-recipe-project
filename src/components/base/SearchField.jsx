import React from 'react'

const SearchField = ({value, onSubmit, onChange}) => {
  return (
    <form onSubmit={onSubmit} className='flex items-center w-full h-[90px] bg-white shadow-md gap-4 pr-3'>
        <img src="/search-icon.svg" alt="search-icon" className='w-[18px] h-[18px] ml-6' />
        <input onChange={onChange} type="text" value={value} placeholder='Search Recipe' className='outline-none bg-white h-[90px] w-auto flex-grow font-air font-normal text-[18px] text-[#2E266F] placeholder:font-inter placeholder:text-[18px] placeholder:text-[#2E266F]' />
    </form>
  )
}

export default SearchField