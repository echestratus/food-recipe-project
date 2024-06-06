import ButtonSubmit from "@/components/base/ButtonSubmit";
import SearchField from "@/components/base/SearchField";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import RecipeCard from "@/components/modules/RecipeCard";
import {
  getRecipesHomeAction,
  getSearchedRecipesHomeAction,
} from "@/configs/redux/actions/getRecipesHomeAction";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const newRecipeImage = "/newrecipe-dummy.png";
  const newRecipeMenu = "Healthy Bone Broth Ramen (Quick & Easy)";
  const newRecipeDesc =
    "Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!";
  // const [recipeList, setRecipeList] = useState([{}]);
  const {
    recipes: recipeList,
    searchedRecipes: searchedList,
    loading,
  } = useSelector((state) => state.getRecipesHome);
  // const [searchedList, setSearchedList] = useState([{}]);
  const [searching, setSearching] = useState("");
  const router = useRouter();
  const searchParam = useSearchParams();
  const URLSearchParam = searchParam.get("search") ?? "";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesHomeAction());
    // axios
    //   .get(`${process.env.NEXT_PUBLIC_API_URL}recipes?limit=6`)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     setRecipeList(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  }, []);
  const handleChange = (e) => {
    setSearching(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searching);
    dispatch(getSearchedRecipesHomeAction(setSearching, router, searching));
    // axios
    // .get(`${process.env.NEXT_PUBLIC_API_URL}recipes?search=${searching}&limit=10000`)
    // .then((res) => {
    //   console.log("Searching: ", res.data.data);
    //   setSearchedList(res.data.data);
    //   router.push({
    //     query: {search: searching}
    //   })
    //   console.log(router.query);
    //   setSearching('')
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };

  if (URLSearchParam) {
    return (
      <div className="bg-[#FFF5EC] relative">
        <div className="2xl:container 2xl:max-w-[1920px] 2xl:mx-auto 2xl:relative">
          <header className="2xl:flex 2xl:justify-center 2xl:relative 2xl:z-10">
            <Navbar />
          </header>
        </div>
        <div className="2xl:w-[25%]  2xl:h-full 2xl:bg-[#EFC81A] 2xl:absolute 2xl:right-0 2xl:top-0"></div>
        {/* List Searched Recipes */}
        {searchedList.length === 0 ? (
          <div className="2xl:w-[1720px] 2xl:h-auto 2xl:min-h-[1210px] 2xl:mx-auto 2xl:pb-20 2xl:mt-10">
            <p className="2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]">
              {searchParam.get("search")} Not Found
            </p>
          </div>
        ) : (
          <div className="2xl:w-[1720px] 2xl:h-auto 2xl:min-h-[1210px] 2xl:mx-auto 2xl:flex 2xl:flex-wrap 2xl:gap-24 2xl:relative 2xl:pb-20 2xl:mt-10">
            {searchedList.map((recipe, index) => (
              <RecipeCard
                recipeName={recipe.title}
                imageURL={recipe.image}
                key={index}
                id={recipe.id}
              />
            ))}
          </div>
        )}
        {/* List Searched Recipes */}
      </div>
    );
  }
  return (
    <main className="bg-[#FFF5EC]">
      <div className="
      max-sm:container max-sm:max-w-[640px] max-sm:mx-auto max-sm:relative
      2xl:container 2xl:max-w-[1920px] 2xl:mx-auto 2xl:relative
      ">
        <header className="
        max-sm:flex max-sm:justify-center max-sm:relative max-sm:z-10
        2xl:flex 2xl:justify-center 2xl:relative 2xl:z-10
        ">
          <Navbar />
        </header>
        <div className="
        max-sm:hidden
        2xl:w-[25%] 2xl:h-[1210px] 2xl:bg-[#EFC81A] 2xl:absolute 2xl:right-0 2xl:top-0
        "></div>
      </div>
      <div className="
      max-sm:w-[80%] max-sm:flex max-sm:flex-col max-sm:mx-auto max-sm:container
      2xl:w-[1720px] 2xl:h-[1210px] 2xl:flex 2xl:mx-auto 2xl:container
      ">
        {/* Discover Section */}
        <div className="
        max-sm:mt-12
        2xl:mt-80
        ">
          <div className="
          max-sm:max-w-[640px] max-sm:flex max-sm:flex-col
          2xl:w-[670px] 2xl:h-auto 2xl:flex 2xl:flex-col
          ">
            <p className="
            max-sm:font-air max-sm:font-medium max-sm:text-[32px] max-sm:text-[#2E266F]
            2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]
            ">
              Discover Recipe
            </p>
            <p className="
            max-sm:font-air max-sm:font-medium max-sm:text-[32px] max-sm:text-[#2E266F] max-sm:mb-3
            2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]
            ">
              & Delicious Food
            </p>
            <SearchField onChange={handleChange} onSubmit={handleSearch} />
          </div>
        </div>
        {/* Discover Section */}

        {/* Image Section */}
        <div className="
        max-sm:relative max-sm:mt-3
        2xl:relative
        ">
          <img
            src="/food-logo.png"
            alt="food-logo"
            className="
            max-sm:w-[70%] max-sm:mx-auto
            2xl:w-[878px] 2xl:h-auto 2xl:ml-32
            "
          />
        </div>
        {/* Image Section */}
      </div>

      <div className="
      max-sm:w-[80%] max-sm:flex max-sm:items-center max-sm:gap-6 max-sm:mx-auto
      2xl:w-[1720px] 2xl:h-auto 2xl:flex 2xl:items-center 2xl:gap-12 2xl:mx-auto
      ">
        <div className="
        max-sm:w-[16px] max-sm:h-[55px] max-sm:bg-[#EFC81A]
        2xl:w-[25px] 2xl:h-[140px] 2xl:bg-[#EFC81A]
        "></div>
        <p className="
        max-sm:font-air max-sm:font-medium max-sm:text-[18px] max-sm:text-[#3F3A3A]
        2xl:font-air 2xl:font-medium 2xl:text-[48px] 2xl:text-[#3F3A3A]
        ">
          New Recipe
        </p>
      </div>

      <div className="
      max-sm:w-max-[640px] max-sm:w-[80%] max-sm:flex max-sm:flex-col max-sm:mx-auto
      2xl:w-max-[1920px] 2xl:w-[1720px] 2xl:h-[1210px] 2xl:flex 2xl:mx-auto
      ">
        {/* Image Section */}
        <div className="
        max-sm:mt-8
        2xl:mt-80
        ">
          <div className="
          max-sm:w-[80%] max-sm:h-[80%] max-sm:relative max-sm:mx-auto
          2xl:w-[935px] 2xl:h-[881px] 2xl:relative
          ">
            <div className="
            max-sm:hidden
            2xl:absolute 2xl:bg-[#EFC81A] 2xl:w-[514px] 2xl:h-[820px] 2xl:top-0 2xl:left-0
            "></div>
            <img
              src={newRecipeImage}
              alt="newRecipe-image"
              className="
              max-sm:w-full max-sm:ml-auto max-sm:z-10 max-sm:relative max-sm:rounded-lg
              2xl:w-[800px] 2xl:h-[800px] 2xl:absolute 2xl:z-10 2xl:right-0 2xl:bottom-0 2xl:rounded-lg
              "
            />
          </div>
        </div>
        {/* Image Section */}

        {/* Recipe Info Section */}
        <div className="
        max-sm:flex max-sm:items-center
        2xl:relative 2xl:flex 2xl:items-center
        ">
          <div className="
          max-sm:w-[80%] max-sm:flex max-sm:flex-col max-sm:mx-auto
          2xl:w-[570px] 2xl:h-auto 2xl:ml-36 2xl:flex 2xl:flex-col 2xl:mt-56
          ">
            <p className="
            max-sm:font-air max-sm:font-medium max-sm:text-[28px] max-sm:text-[#3F3A3A]
            2xl:font-air 2xl:font-medium 2xl:text-[56px] 2xl:text-[#3F3A3A]
            ">
              {newRecipeMenu}
            </p>
            <div className="
            max-sm:border-t-2 max-sm:w-full max-sm:h-0 max-sm:border-[#6F6A40] max-sm:mt-3
            2xl:border-t-2 2xl:w-[100px] 2xl:h-0 2xl:border-[#6F6A40] 2xl:mt-7
            "></div>
            <p className="
            max-sm:font-inter max-sm:text-[18px] max-sm:text-[#3F3A3A] max-sm:mt-3
            2xl:font-inter 2xl:text-[24px] 2xl:text-[#3F3A3A] 2xl:mt-8
            ">
              {newRecipeDesc}
            </p>
            <div className="
            max-sm:w-[100%] max-sm:mt-6
            2xl:w-[200px] 2xl:mt-14
            ">
              <ButtonSubmit>Learn More</ButtonSubmit>
            </div>
          </div>
        </div>
        {/* Recipe Info Section */}
      </div>

      <div className="
      max-sm:w-[80%] max-sm:flex max-sm:items-center max-sm:gap-6 max-sm:mx-auto max-sm:mt-10 max-sm:pb-12
      2xl:w-[1720px] 2xl:h-auto 2xl:flex 2xl:items-center 2xl:gap-12 2xl:mx-auto 2xl:mt-52 2xl:pb-52
      ">
        <div className="
        max-sm:w-[16px] max-sm:h-[55px] max-sm:bg-[#EFC81A]
        2xl:w-[25px] 2xl:h-[140px] 2xl:bg-[#EFC81A]
        "></div>
        <p className="
        max-sm:font-air max-sm:font-medium max-sm:text-[18px] max-sm:text-[#3F3A3A]
        2xl:font-air 2xl:font-medium 2xl:text-[48px] 2xl:text-[#3F3A3A]
        ">
          Popular Recipe
        </p>
      </div>

      {/* List Recipe */}
      <div className="
      max-sm:w-[80%] max-sm:mx-auto max-sm:flex max-sm:flex-wrap max-sm:gap-12
      2xl:w-[1720px] 2xl:h-auto 2xl:mx-auto 2xl:flex 2xl:flex-wrap 2xl:gap-24
      ">
        {recipeList.map((recipe, index) => (
          <RecipeCard
            recipeName={recipe.title}
            imageURL={recipe.image}
            key={index}
            id={recipe.id}
          />
        ))}
      </div>
      {/* List Recipe */}

      <div className="
      max-sm:w-[80%] max-sm:mx-auto max-sm:mt-14
      2xl:w-[720px] 2xl:mx-auto 2xl:mt-40
      ">
        <ButtonSubmit onClick={() => router.push("/recipes")}>
          See More Recipes
        </ButtonSubmit>
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
