import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const RecipeCard = ({imageURL, recipeName="Recipe Name", id}) => {
    const router = useRouter()
    let imgURL = "/default-recipeimg.png"
    // const checkImage = (url) => {
    //     return new Promise((resolve, reject) => {
    //       const image = new Image();
    //       image.onload = function () {
    //         if (this.width > 0) {
    //           resolve(true);
    //         }
    //       };
    //       image.onerror = function () {
    //         reject(false);
    //       };
    //       image.src = url;
    //     });
    //   };
    function isImage(url) {
      return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(
        url,
      );
    }
    const handleClick = () => {
      router.push(`/recipes/${id}`)
    }
    
  return (
    <div onClick={handleClick} className={`
    max-lg:w-[300px] max-lg:h-[300px] max-lg:flex max-lg:items-end max-lg:justify-start max-lg:rounded-2xl max-lg:relative max-lg:shadow-2xl max-lg:hover:cursor-pointer max-lg:hover:scale-110 max-lg:ease-in max-lg:duration-500
    2xl:w-[500px] 2xl:h-[500px] 2xl:flex 2xl:items-end 2xl:justify-start 2xl:rounded-2xl 2xl:relative 2xl:shadow-2xl 2xl:hover:cursor-pointer 2xl:hover:scale-110 2xl:ease-in 2xl:duration-500
    `}>
      {isImage(imageURL) === true ? (
        <img src={imageURL} alt={imageURL} className='absolute w-full h-full rounded-2xl object-cover' />
      ) : (
        <img src={imgURL} alt={imageURL} className='absolute w-full h-full rounded-2xl object-cover' />
      )}
        <p className='
        max-lg:w-[40%] max-lg:bg-[#A2A3A5AA] max-lg:pl-2 max-lg:rounded-md max-lg:font-air max-lg:font-medium max-lg:text-[18px] max-lg:text-[#3F3A3A] max-lg:ml-7 max-lg:mb-7 max-lg:relative
        2xl:w-[191px] 2xl:font-air 2xl:font-medium 2xl:text-[32px] 2xl:text-[#3F3A3A] 2xl:bg-[#A2A3A5AA] 2xl:pl-2 2xl:rounded-lg 2xl:ml-14 2xl:mb-14 2xl:relative
        '>{recipeName}</p>
    </div>
  )
}

export default RecipeCard