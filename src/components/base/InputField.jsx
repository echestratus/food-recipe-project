import React from 'react'

const InputField = ({type="text", name, id, onChange, placeholder, value, label, className="", required=false}) => {
  return (
    <div className='flex flex-col gap-3'>
         {label && (<label htmlFor={id} className='font-inter font-medium text-[16px] text-[#696F79]'>{label}</label>)}
         {className !== "" ? (
          <input type={type} name={name} id={id} onChange={onChange} value={value} placeholder={placeholder} required={required} className={className} />
         ) : (
          <input type={type} name={name} id={id} onChange={onChange} value={value} placeholder={placeholder} required={required} className='h-[64px] w-full border rounded-[6px] border-[#8692A6] bg-white text-[14px] text-[#494949] font-medium font-inter pl-6 placeholder:text-[14px] placeholder:text-[#8692A6] placeholder:font-medium placeholder:font-inter focus:border focus:border-[#EFC81A] focus:shadow-lg focus:outline-none' />
         )}
    </div>
  )
}

export default InputField