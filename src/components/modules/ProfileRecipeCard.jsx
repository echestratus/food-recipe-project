import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ProfileRecipeCard = ({imageURL, recipeName="Recipe Name", id}) => {
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
    <div onClick={handleClick} className={`w-[370px] h-[250px] flex items-end justify-start rounded-2xl relative shadow-2xl hover:cursor-pointer hover:scale-110 ease-in duration-500`}>
      {isImage(imageURL) === true ? (
        <img src={imageURL} alt={imageURL} className='absolute w-full h-full rounded-2xl object-cover' />
      ) : (
        <img src={imgURL} alt={imageURL} className='absolute w-full h-full rounded-2xl object-cover' />
      )}
        <p className='w-[130px] font-air font-medium text-[28px] text-[#FFFFFF] ml-8 mb-8 relative bg-[#A2A3A5AA] rounded-lg'>{recipeName}</p>
    </div>
  )
}

export default ProfileRecipeCard