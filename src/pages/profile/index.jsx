import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import ProfileRecipeCard from "@/components/modules/ProfileRecipeCard";
import RecipeCard from "@/components/modules/RecipeCard";
import { getLikedRecipesAction } from "@/configs/redux/actions/getLikedRecipesAction";
import { getMyRecipeAction } from "@/configs/redux/actions/getMyRecipeAction";
import { getProfileAction } from "@/configs/redux/actions/getProfileAction";
import { getSavedRecipesAction } from "@/configs/redux/actions/getSavedRecipesAction";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";

const profile = () => {
  const router = useRouter()
  // const [formProfile, setFormProfile] = useState({});
  const {profile:formProfile, loading:loadingProfile} = useSelector((state) => state.getProfile)
  // const [myRecipe, setMyRecipe] = useState([])
  const {recipes:myRecipe, loading:loadingMyRecipe} = useSelector((state) => state.getMyRecipe)
  // const [savedRecipe, setSavedRecipe] = useState([])
  const {recipes:savedRecipe, loading:loadingSavedRecipe} = useSelector((state) => state.getSavedRecipes)
  // const [likedRecipe, setLikedRecipe] = useState([])
  const {recipes:likedRecipe, loading:loadingLikedRecipe} = useSelector((state) => state.getLikedRecipes)
  // const [loading, setLoading] = useState(true);
  const [switchRecipe, setSwitchRecipe] = useState("")
  const {login: isLogin} = useSelector((state) => state.getProfile)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLogin) {
      dispatch(getProfileAction())
      dispatch(getMyRecipeAction())
      dispatch(getSavedRecipesAction())
      dispatch(getLikedRecipesAction())
    } else {
      router.push('/auth/login')
    }
  //   axios.all([
  //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}users/profile`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     }),
  //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/self`, {
  //       headers: {
  //         'Authorization': `Bearer ${Cookies.get('token')}`
  //       }
  //     }),
  //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/save`, {
  //         headers: {
  //             'Authorization': `Bearer ${Cookies.get('token')}`
  //         }
  //     }),
  //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/like`, {
  //         headers: {
  //             'Authorization': `Bearer ${Cookies.get('token')}`
  //         }
  //     })
  // ])
  // .then(axios.spread(function (profile, recipe, saved, liked) {
  //     console.log(profile.data.data);
  //     setFormProfile(profile.data.data)

  // // Search for myRecipe based on author id
  //   console.log(recipe.data.data);
  //   setMyRecipe(recipe.data.data)

  //   console.log(saved.data.data);
  //   setSavedRecipe(saved.data.data)

  //   console.log(liked.data.data);
  //   setLikedRecipe(liked.data.data)
    
    
  //   setLoading(false);
  // }))
  // .catch((err) => {
  //     console.log(err.response);
  //     setLoading(false)
  // })
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
  if (loadingProfile || loadingMyRecipe || loadingLikedRecipe || loadingSavedRecipe) {
    return (
      <div className="bg-[#FFFFFF]">
        <div className="
        max-lg:container max-lg:max-w-[1024px] max-lg:mx-auto
        container max-w-[1920px] mx-auto
        ">
          <header className="flex justify-center">
            <Navbar />
          </header>
        </div>
        <div className="
        max-lg:w-[80%] max-lg:mx-auto max-lg:mt-10
        lg:w-[90%] lg:h-auto lg:mx-auto lg:min-h-screen lg:mt-10
        w-[1720px] h-auto min-h-[1210px] mx-auto mt-10
        ">
          <Skeleton className="
          max-lg:h-[300px]
          lg:h-[700px]
          desktop:h-[700px]
          " />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#FFFFFF]">
      <div className="
      max-lg:container max-lg:max-w-[1024px] max-lg:mx-auto
      lg:container lg:max-w-[1920px] lg:mx-auto
      desktop:container desktop:max-w-[1920px] desktop:mx-auto
      ">
        <header className="flex justify-center">
          <Navbar />
        </header>
      </div>
      <div className="
      max-lg:w-[80%] max-lg:mx-auto max-lg:mt-10
      lg:w-[90%] lg:h-auto lg:mx-auto lg:mt-10
      desktop:w-[1720px] desktop:h-auto desktop:mx-auto desktop:mt-10
      ">
        {/* Photo Profile Section */}
        <div>
          <div className="
          max-lg:w-[80px] max-lg:h-[80px] max-lg:mx-auto max-lg:relative
          lg:w-[172px] lg:h-[172px] lg:mx-auto lg:relative
          desktop:w-[172px] desktop:h-[172px] desktop:mx-auto desktop:relative
          ">
            <img
              src="/IconUser.svg"
              alt="UserIcon"
              className="
              max-lg:w-[80px] max-lg:h-[80px] max-lg:rounded-full
              w-[172px] h-[172px] rounded-full
              "
            />
            <img
              src="/EditIcon.svg"
              alt="EditIcon"
              className="
              max-lg:absolute max-lg:bottom-0 max-lg:right-0 max-lg:hover:cursor-pointer max-lg:w-[14px] max-lg:h-[14px]
              absolute bottom-0 right-0 hover:cursor-pointer
              "
            />
          </div>
          <p className="
          max-lg:text-center max-lg:font-air max-lg:font-medium max-lg:text-[14px] max-lg:text-[#000000] max-lg:mt-4
          text-center font-air font-medium text-[24px] text-[#000000] mt-10
          ">
            {formProfile.name}
          </p>
        </div>
        {/* Photo Profile Section */}

        <ul className="
        max-lg:flex max-lg:items-center max-lg:gap-10 max-lg:font-air max-lg:text-[14px] max-lg:font-medium max-lg:text-[#666666] max-lg:pl-1 max-lg:mt-12
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
      max-lg:pl-5 max-lg:w-[80%] max-lg:max-w-[1024px] max-lg:h-auto max-lg:mx-auto max-lg:mt-10
      pl-5 w-[1720px] lg:w-[90%] h-auto mx-auto mt-10
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
