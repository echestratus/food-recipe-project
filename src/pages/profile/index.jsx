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
        <div className="container max-w-[1920px] mx-auto">
          <header className="flex justify-center">
            <Navbar />
          </header>
        </div>
        <div className="w-[1720px] h-auto min-h-[1210px] mx-auto mt-10">
          <Skeleton className="h-[700px]" />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#FFFFFF]">
      <div className="container max-w-[1920px] mx-auto">
        <header className="flex justify-center">
          <Navbar />
        </header>
      </div>
      <div className="w-[1720px] h-auto mx-auto mt-10">
        {/* Photo Profile Section */}
        <div>
          <div className="w-[172px] h-[172px] mx-auto relative">
            <img
              src="/IconUser.svg"
              alt="UserIcon"
              className="w-[172px] h-[172px] rounded-full"
            />
            <img
              src="/EditIcon.svg"
              alt="EditIcon"
              className="absolute bottom-0 right-0 hover:cursor-pointer"
            />
          </div>
          <p className="text-center font-air font-medium text-[24px] text-[#000000] mt-10">
            {formProfile.name}
          </p>
        </div>
        {/* Photo Profile Section */}

        <ul className="flex items-center gap-20 font-air text-[24px] font-medium text-[#666666] pl-5 mt-36">
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
      <div className="pl-5 w-[1720px] h-auto mx-auto mt-10">
        {switchShowedRecipe()}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default profile;
