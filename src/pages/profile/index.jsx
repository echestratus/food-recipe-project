import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import ProfileRecipeCard from "@/components/modules/ProfileRecipeCard";
import RecipeCard from "@/components/modules/RecipeCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const profile = () => {
  const [formProfile, setFormProfile] = useState({});
  const [myRecipe, setMyRecipe] = useState([])
  const [savedRecipe, setSavedRecipe] = useState([])
  const [likedRecipe, setLikedRecipe] = useState([])
  const [loading, setLoading] = useState(true);
  const [switchRecipe, setSwitchRecipe] = useState("")
  useEffect(() => {
    axios.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/self`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/save`, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      }),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/like`, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      })
  ])
  .then(axios.spread(function (profile, recipe, saved, liked) {
      console.log(profile.data.data);
      setFormProfile(profile.data.data)

  // Search for myRecipe based on author id
    console.log(recipe.data.data);
    setMyRecipe(recipe.data.data)

    console.log(saved.data.data);
    setSavedRecipe(saved.data.data)

    console.log(liked.data.data);
    setLikedRecipe(liked.data.data)
    
    
    setLoading(false);
  }))
  .catch((err) => {
      console.log(err.response);
      setLoading(false)
  })
  }, []);

  const switchShowedRecipe = () => {
    switch (switchRecipe) {
      case "myrecipe":
        return <ShowMyRecipe />
      case "savedrecipe":
        return <ShowSavedRecipe />
      case "likedrecipe":
        return <ShowLikedRecipe />
      default:
        break;
    }
  }

  function ShowMyRecipe() {
    return(
      <div className="flex flex-wrap gap-10">
        {myRecipe.map((recipe, index)=>(
          <ProfileRecipeCard recipeName={recipe.title} imageURL={recipe.image} id={recipe.id} key={index} />
        ))}
      </div>
    )
  }
  
  function ShowSavedRecipe() {
    return(
      <div className="flex flex-wrap gap-10">
        {savedRecipe.map((recipe, index)=>(
          <ProfileRecipeCard recipeName={recipe.recipe.title} imageURL={recipe.recipe.image} id={recipe.recipe.id} key={index} />
        ))}
      </div>
    )
  }
  
  function ShowLikedRecipe() {
    return(
      <div className="flex flex-wrap gap-10">
        {likedRecipe.map((recipe, index)=>(
          <ProfileRecipeCard recipeName={recipe.recipe.title} imageURL={recipe.recipe.image} id={recipe.recipe.id} key={index} />
        ))}
      </div>
    )
  }
  if (loading) {
    return (
      <div className="bg-[#FFFFFF]">
        <div className="
        max-sm:container max-sm:max-w-[640px] max-sm:mx-auto
        container max-w-[1920px] mx-auto
        ">
          <header className="flex justify-center">
            <Navbar />
          </header>
        </div>
        <div className="
        max-sm:w-[80%] max-sm:mx-auto max-sm:mt-10
        w-[1720px] h-auto min-h-[1210px] mx-auto mt-10
        ">
          <Skeleton className="
          max-sm:h-[300px]
          2xl:h-[700px]
          " />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#FFFFFF]">
      <div className="
      max-sm:container max-sm:max-w-[640px] max-sm:mx-auto
      2xl:container 2xl:max-w-[1920px] 2xl:mx-auto
      ">
        <header className="flex justify-center">
          <Navbar />
        </header>
      </div>
      <div className="
      max-sm:w-[80%] max-sm:mx-auto max-sm:mt-10
      2xl:w-[1720px] 2xl:h-auto 2xl:mx-auto 2xl:mt-10
      ">
        {/* Photo Profile Section */}
        <div>
          <div className="
          max-sm:w-[80px] max-sm:h-[80px] max-sm:mx-auto max-sm:relative
          2xl:w-[172px] 2xl:h-[172px] 2xl:mx-auto 2xl:relative
          ">
            <img
              src="/IconUser.svg"
              alt="UserIcon"
              className="
              max-sm:w-[80px] max-sm:h-[80px] max-sm:rounded-full
              w-[172px] h-[172px] rounded-full
              "
            />
            <img
              src="/EditIcon.svg"
              alt="EditIcon"
              className="
              max-sm:absolute max-sm:bottom-0 max-sm:right-0 max-sm:hover:cursor-pointer max-sm:w-[14px] max-sm:h-[14px]
              absolute bottom-0 right-0 hover:cursor-pointer
              "
            />
          </div>
          <p className="
          max-sm:text-center max-sm:font-air max-sm:font-medium max-sm:text-[14px] max-sm:text-[#000000] max-sm:mt-4
          text-center font-air font-medium text-[24px] text-[#000000] mt-10
          ">
            {formProfile.name}
          </p>
        </div>
        {/* Photo Profile Section */}

        <ul className="
        max-sm:flex max-sm:items-center max-sm:gap-10 max-sm:font-air max-sm:text-[14px] max-sm:font-medium max-sm:text-[#666666] max-sm:pl-1 max-sm:mt-12
        flex items-center gap-20 font-air text-[24px] font-medium text-[#666666] pl-5 mt-36
        ">
          <li>
            <input type="radio" id="myrecipe" value="myrecipe" name="recipes" className="hidden peer" onClick={(e) => setSwitchRecipe(e.target.value)} />
            <label htmlFor="myrecipe" className="peer-checked:text-[#000000] peer-hover:cursor-pointer">My Recipe</label>
          </li>
          <li>
            <input type="radio" id="savedrecipe" value="savedrecipe" name="recipes" className="hidden peer" onClick={(e) => setSwitchRecipe(e.target.value)} />
            <label htmlFor="savedrecipe" className="peer-checked:text-[#000000] peer-hover:cursor-pointer">Saved Recipe</label>
          </li>
          <li>
            <input type="radio" id="likedrecipe" value="likedrecipe" name="recipes" className="hidden peer" onClick={(e) => setSwitchRecipe(e.target.value)} />
            <label htmlFor="likedrecipe" className="peer-checked:text-[#000000] peer-hover:cursor-pointer">Liked Recipe</label>
          </li>
        </ul>
      </div>
      <div className="w-full h-0 border-t border-[#DFDFDF] mt-10"></div>
      <div className="
      max-sm:pl-5 max-sm:w-[80%] max-sm:max-w-[640px] max-sm:h-auto max-sm:mx-auto max-sm:mt-10
      pl-5 w-[1720px] h-auto mx-auto mt-10
      ">
        {switchShowedRecipe()}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default profile;
