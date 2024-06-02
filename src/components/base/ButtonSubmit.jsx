import React from "react";

const ButtonSubmit = ({ children, className="", onClick }) => {
  return (
    <div>
      {className !== "" ? (
        <button type="submit" onClick={onClick} className={className}>
          {children}
        </button>
      ) : (
        <button type="submit" onClick={onClick} className='w-full h-[64px] rounded-md bg-[#EFC81A] font-air font-[500] text-base text-white border-none hover:cursor-pointer hover:bg-yellow-600'>
          {children}
        </button>
      )}
    </div>
  );
};

export default ButtonSubmit;
