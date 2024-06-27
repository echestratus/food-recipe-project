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
    max-lg:w-[300px] max-lg:h-[300px] max-lg:flex max-lg:items-end max-lg:justify-start max-lg:rounded-desktop max-lg:relative max-lg:shadow-desktop max-lg:hover:cursor-pointer max-lg:hover:scale-110 max-lg:ease-in max-lg:duration-500
    lg:w-[25%] aspect-square lg:flex lg:items-end lg:justify-start lg:rounded-2xl lg:relative lg:shadow-lg lg:hover:cursor-pointer lg:hover:scale-110 lg:ease-in lg:duration-500
    desktop:w-[500px] desktop:h-[500px] desktop:flex desktop:items-end desktop:justify-start desktop:rounded-desktop desktop:relative desktop:shadow-desktop desktop:hover:cursor-pointer desktop:hover:scale-110 desktop:ease-in desktop:duration-500
    `}>
      {isImage(imageURL) === true ? (
        <img src={imageURL} alt={imageURL} className='absolute w-full h-full rounded-2xl object-cover' />
      ) : (
        <img src={imgURL} alt={imageURL} className='absolute w-full h-full rounded-2xl object-cover' />
      )}
        <p className='
        max-lg:w-[40%] max-lg:bg-[#A2A3A5AA] max-lg:pl-2 max-lg:rounded-md max-lg:font-air max-lg:font-medium max-lg:text-[18px] max-lg:text-[#3F3A3A] max-lg:ml-7 max-lg:mb-7 max-lg:relative
        lg:max-w-[191px] lg:font-air lg:font-medium lg:text-[20px] lg:text-[#3F3A3A] lg:bg-[#A2A3A5AA] lg:pl-2 lg:rounded-lg lg:ml-5 lg:mb-14 lg:relative
        desktop:w-[191px] desktop:font-air desktop:font-medium desktop:text-[32px] desktop:text-[#3F3A3A] desktop:bg-[#A2A3A5AA] desktop:pl-2 desktop:rounded-lg desktop:ml-14 desktop:mb-14 desktop:relative
        '>{recipeName}</p>
    </div>
  )
}

export default RecipeCard