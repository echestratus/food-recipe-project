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
        <div
          className="
        max-lg:container max-lg:max-w-[1024px] max-lg:mx-auto max-lg:relative
        lg:container lg:max-w-[1536px] lg:mx-auto lg:relative
        2xl:container 2xl:max-w-[1920px] 2xl:mx-auto 2xl:relative
        "
        >
          <header
            className="
          max-lg:flex max-lg:justify-center max-lg:relative max-lg:z-10
          lg:flex lg:justify-center lg:relative lg:z-10
          2xl:flex 2xl:justify-center 2xl:relative 2xl:z-10
          "
          >
            <Navbar />
          </header>
        </div>
        <div
          className="
        max-lg:hidden
        lg:w-[25%]  lg:h-full lg:bg-[#EFC81A] lg:absolute lg:right-0 lg:top-0
        2xl:w-[25%]  2xl:h-full 2xl:bg-[#EFC81A] 2xl:absolute 2xl:right-0 2xl:top-0
        "
        ></div>
        {/* List Searched Recipes */}
        {searchedList.length === 0 ? (
          <div
            className="
          max-lg:w-[80%] max-lg:flex max-lg:flex-col max-lg:mx-auto max-lg:container
          lg:min-w-[1024px] lg:min-h-screen lg:h-auto lg:mx-auto lg:pb-20 lg:mt-10
          2xl:min-w-[1536px] 2xl:h-auto 2xl:min-h-screen 2xl:mx-auto 2xl:pb-20 2xl:mt-10
          "
          >
            <p
              className="
            max-lg:font-air max-lg:font-medium max-lg:text-[28px] max-lg:text-[#2E266F]
            lg:font-air lg:font-medium lg:text-[72px] lg:text-[#2E266F]
            2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]
            "
            >
              {searchParam.get("search")} Not Found
            </p>
          </div>
        ) : (
          <div
            className="
          max-lg:w-[80%] max-lg:mx-auto max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-12
          lg:min-w-[1024px] lg:h-auto lg:min-h-screen lg:mx-auto lg:flex lg:justify-center lg:flex-wrap lg:gap-24 lg:relative lg:pb-20 lg:mt-10
          2xl:min-w-[1536px] 2xl:max-w-[1720px] 2xl:mx-auto 2xl:h-auto 2xl:min-h-screen 2xl:flex 2xl:flex-wrap 2xl:justify-center 2xl:gap-24 2xl:relative 2xl:pb-20 2xl:mt-10
          "
          >
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

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <main className="bg-[#FFF5EC]">
      <div
        className="
      max-lg:container max-lg:max-w-[1024px] max-lg:mx-auto max-lg:relative
      lg:container lg:max-w-[1536px] lg:mx-auto lg:relative
      2xl:container 2xl:max-w-[1920px] 2xl:mx-auto 2xl:relative
      "
      >
        <header
          className="
        max-lg:flex max-lg:justify-center max-lg:relative max-lg:z-10
        lg:flex lg:justify-center lg:relative lg:z-10
        2xl:flex 2xl:justify-center 2xl:relative 2xl:z-10
        "
        >
          <Navbar />
        </header>
        <div
          className="
        max-lg:hidden
        lg:w-[25%] lg:h-[1210px] lg:bg-[#EFC81A] lg:absolute lg:right-0 lg:top-0
        2xl:w-[25%] 2xl:h-[1210px] 2xl:bg-[#EFC81A] 2xl:absolute 2xl:right-0 2xl:top-0
        "
        ></div>
      </div>
      <div
        className="
      max-lg:w-[80%] max-lg:flex max-lg:flex-col max-lg:mx-auto max-lg:container
      2xl:w-[1720px] 2xl:h-[1210px] 2xl:flex 2xl:mx-auto 2xl:container
      "
      >
        {/* Discover Section */}
        <div
          className="
        max-lg:mt-12
        2xl:mt-80
        "
        >
          <div
            className="
          max-lg:max-w-[1024px] max-lg:flex max-lg:flex-col
          2xl:w-[670px] 2xl:h-auto 2xl:flex 2xl:flex-col
          "
          >
            <p
              className="
            max-lg:font-air max-lg:font-medium max-lg:text-[32px] max-lg:text-[#2E266F]
            2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]
            "
            >
              Discover Recipe
            </p>
            <p
              className="
            max-lg:font-air max-lg:font-medium max-lg:text-[32px] max-lg:text-[#2E266F] max-lg:mb-3
            2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]
            "
            >
              & Delicious Food
            </p>
            <SearchField onChange={handleChange} onSubmit={handleSearch} />
          </div>
        </div>
        {/* Discover Section */}

        {/* Image Section */}
        <div
          className="
        max-lg:relative max-lg:mt-3
        2xl:relative
        "
        >
          <img
            src="/food-logo.png"
            alt="food-logo"
            className="
            max-lg:w-[80%] max-lg:mx-auto
            2xl:w-[878px] 2xl:h-auto 2xl:ml-32
            "
          />
        </div>
        {/* Image Section */}
      </div>

      <div
        className="
      max-lg:w-[80%] max-lg:flex max-lg:items-center max-lg:gap-6 max-lg:mx-auto
      2xl:w-[1720px] 2xl:h-auto 2xl:flex 2xl:items-center 2xl:gap-12 2xl:mx-auto
      "
      >
        <div
          className="
        max-lg:w-[16px] max-lg:h-[55px] max-lg:bg-[#EFC81A]
        2xl:w-[25px] 2xl:h-[140px] 2xl:bg-[#EFC81A]
        "
        ></div>
        <p
          className="
        max-lg:font-air max-lg:font-medium max-lg:text-[18px] max-lg:text-[#3F3A3A]
        2xl:font-air 2xl:font-medium 2xl:text-[48px] 2xl:text-[#3F3A3A]
        "
        >
          New Recipe
        </p>
      </div>

      <div
        className="
      max-lg:w-max-[640px] max-lg:w-[80%] max-lg:flex max-lg:flex-col max-lg:mx-auto
      2xl:w-max-[1920px] 2xl:w-[1720px] 2xl:h-[1210px] 2xl:flex 2xl:mx-auto
      "
      >
        {/* Image Section */}
        <div
          className="
        max-lg:mt-8
        2xl:mt-80
        "
        >
          <div
            className="
          max-lg:w-[80%] max-lg:h-[80%] max-lg:relative max-lg:mx-auto
          2xl:w-[935px] 2xl:h-[881px] 2xl:relative
          "
          >
            <div
              className="
            max-lg:hidden
            2xl:absolute 2xl:bg-[#EFC81A] 2xl:w-[514px] 2xl:h-[820px] 2xl:top-0 2xl:left-0
            "
            ></div>
            <img
              src={newRecipeImage}
              alt="newRecipe-image"
              className="
              max-lg:w-full max-lg:ml-auto max-lg:z-10 max-lg:relative max-lg:rounded-lg
              2xl:w-[800px] 2xl:h-[800px] 2xl:absolute 2xl:z-10 2xl:right-0 2xl:bottom-0 2xl:rounded-lg
              "
            />
          </div>
        </div>
        {/* Image Section */}

        {/* Recipe Info Section */}
        <div
          className="
        max-lg:flex max-lg:items-center
        2xl:relative 2xl:flex 2xl:items-center
        "
        >
          <div
            className="
          max-lg:w-[80%] max-lg:flex max-lg:flex-col max-lg:mx-auto
          2xl:w-[570px] 2xl:h-auto 2xl:ml-36 2xl:flex 2xl:flex-col 2xl:mt-56
          "
          >
            <p
              className="
            max-lg:font-air max-lg:font-medium max-lg:text-[28px] max-lg:text-[#3F3A3A]
            2xl:font-air 2xl:font-medium 2xl:text-[56px] 2xl:text-[#3F3A3A]
            "
            >
              {newRecipeMenu}
            </p>
            <div
              className="
            max-lg:border-t-2 max-lg:w-full max-lg:h-0 max-lg:border-[#6F6A40] max-lg:mt-3
            2xl:border-t-2 2xl:w-[100px] 2xl:h-0 2xl:border-[#6F6A40] 2xl:mt-7
            "
            ></div>
            <p
              className="
            max-lg:font-inter max-lg:text-[18px] max-lg:text-[#3F3A3A] max-lg:mt-3
            2xl:font-inter 2xl:text-[24px] 2xl:text-[#3F3A3A] 2xl:mt-8
            "
            >
              {newRecipeDesc}
            </p>
            <div
              className="
            max-lg:w-[100%] max-lg:mt-6
            2xl:w-[200px] 2xl:mt-14
            "
            >
              <ButtonSubmit>Learn More</ButtonSubmit>
            </div>
          </div>
        </div>
        {/* Recipe Info Section */}
      </div>

      <div
        className="
      max-lg:w-[80%] max-lg:flex max-lg:items-center max-lg:gap-6 max-lg:mx-auto max-lg:mt-10 max-lg:pb-12
      2xl:w-[1720px] 2xl:h-auto 2xl:flex 2xl:items-center 2xl:gap-12 2xl:mx-auto 2xl:mt-52 2xl:pb-52
      "
      >
        <div
          className="
        max-lg:w-[16px] max-lg:h-[55px] max-lg:bg-[#EFC81A]
        2xl:w-[25px] 2xl:h-[140px] 2xl:bg-[#EFC81A]
        "
        ></div>
        <p
          className="
        max-lg:font-air max-lg:font-medium max-lg:text-[18px] max-lg:text-[#3F3A3A]
        2xl:font-air 2xl:font-medium 2xl:text-[48px] 2xl:text-[#3F3A3A]
        "
        >
          Popular Recipe
        </p>
      </div>

      {/* List Recipe */}
      <div
        className="
      max-lg:w-[80%] max-lg:mx-auto max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-12
      2xl:w-[1720px] 2xl:h-auto 2xl:mx-auto 2xl:flex 2xl:flex-wrap 2xl:gap-24
      "
      >
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

      <div
        className="
      max-lg:w-[80%] max-lg:mx-auto max-lg:mt-14
      2xl:w-[720px] 2xl:mx-auto 2xl:mt-40
      "
      >
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
