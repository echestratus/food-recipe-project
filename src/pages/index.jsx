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
        desktop:container desktop:max-w-[1920px] desktop:mx-auto desktop:relative
        "
        >
          <header
            className="
          max-lg:flex max-lg:justify-center max-lg:relative max-lg:z-10
          lg:flex lg:justify-center lg:relative lg:z-10
          desktop:flex desktop:justify-center desktop:relative desktop:z-10
          "
          >
            <Navbar />
          </header>
        </div>
        <div
          className="
        max-lg:hidden
        lg:w-[25%]  lg:h-full lg:bg-[#EFC81A] lg:absolute lg:right-0 lg:top-0
        desktop:w-[25%]  desktop:h-full desktop:bg-[#EFC81A] desktop:absolute desktop:right-0 desktop:top-0
        "
        ></div>
        {/* List Searched Recipes */}
        {searchedList.length === 0 ? (
          <div
            className="
          max-lg:w-[80%] max-lg:flex max-lg:flex-col max-lg:mx-auto max-lg:container
          lg:min-w-[1024px] lg:min-h-screen lg:h-auto lg:mx-auto lg:pb-20 lg:mt-10
          desktop:min-w-[1536px] desktop:h-auto desktop:min-h-screen desktop:mx-auto desktop:pb-20 desktop:mt-10
          "
          >
            <p
              className="
            max-lg:font-air max-lg:font-medium max-lg:text-[28px] max-lg:text-[#2E266F]
            lg:font-air lg:font-medium lg:text-[72px] lg:text-[#2E266F]
            desktop:font-air desktop:font-medium desktop:text-[72px] desktop:text-[#2E266F]
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
          desktop:min-w-[1536px] desktop:max-w-[1720px] desktop:mx-auto desktop:h-auto desktop:min-h-screen desktop:flex desktop:flex-wrap desktop:justify-center desktop:gap-24 desktop:relative desktop:pb-20 desktop:mt-10
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
      lg:max-w-[1720px] lg:mx-auto lg:relative
      desktop:container desktop:max-w-[1920px] desktop:mx-auto desktop:relative
      "
      >
        <header
          className="
        max-lg:flex max-lg:justify-center max-lg:relative max-lg:z-10
        lg:flex lg:justify-center lg:relative lg:z-10
        desktop:flex desktop:justify-center desktop:relative desktop:z-10
        "
        >
          <Navbar />
        </header>
        <div
          className="
        max-lg:hidden
        lg:w-[25%] lg:h-[1210px] lg:bg-[#EFC81A] lg:absolute lg:right-0 lg:top-0
        desktop:w-[25%] desktop:h-[1210px] desktop:bg-[#EFC81A] desktop:absolute desktop:right-0 desktop:top-0
        "
        ></div>
      </div>
      <div
        className="
      max-lg:w-[80%] max-lg:flex max-lg:flex-col max-lg:mx-auto max-lg:container
      lg:w-[90%] lg:h-[1000px] lg:mb-40 lg:flex lg:justify-start lg:items-center lg:mx-auto
      desktop:w-[1720px] desktop:h-[1210px] desktop:flex desktop:mx-auto desktop:container
      "
      >
        {/* Discover Section */}
        <div
          className="
        max-lg:mt-12
        lg:mt-0 lg:w-[45%]
        desktop:mt-80
        "
        >
          <div
            className="
          max-lg:max-w-[1024px] max-lg:flex max-lg:flex-col
          lg:w-[100%] lg:h-auto lg:flex lg:flex-col
          desktop:w-[670px] desktop:h-auto desktop:flex desktop:flex-col
          "
          >
            <p
              className="
            max-lg:font-air max-lg:font-medium max-lg:text-[32px] max-lg:text-[#2E266F]
            lg:font-air lg:font-medium lg:text-[50px] lg:text-[#2E266F]
            desktop:font-air desktop:font-medium desktop:text-[72px] desktop:text-[#2E266F]
            "
            >
              Discover Recipe
            </p>
            <p
              className="
            max-lg:font-air max-lg:font-medium max-lg:text-[32px] max-lg:text-[#2E266F] max-lg:mb-3
            lg:font-air lg:font-medium lg:text-[50px] lg:text-[#2E266F]
            desktop:font-air desktop:font-medium desktop:text-[72px] desktop:text-[#2E266F]
            "
            >
              & Delicious Food
            </p>
            <div className="w-full lg:max-w-[670px]">
              <SearchField onChange={handleChange} onSubmit={handleSearch} />
            </div>
          </div>
        </div>
        {/* Discover Section */}

        {/* Image Section */}
        <div
          className="
        max-lg:relative max-lg:mt-3
        lg:relative lg:w-[50%] lg:flex lg:justify-center
        desktop:relative
        "
        >
          <img
            src="/food-logo.png"
            alt="food-logo"
            className="
            max-lg:w-[80%] max-lg:mx-auto
            lg:w-[100%] lg:h-auto lg:ml-32
            desktop:w-[878px] desktop:h-auto desktop:ml-32
            "
          />
        </div>
        {/* Image Section */}
      </div>

      <div
        className="
      max-lg:w-[80%] max-lg:flex max-lg:items-center max-lg:gap-6 max-lg:mx-auto
      lg:w-[90%] lg:h-auto lg:flex lg:items-center lg:gap-12 lg:mx-auto
      desktop:w-[1720px] desktop:h-auto desktop:flex desktop:items-center desktop:gap-12 desktop:mx-auto
      "
      >
        <div
          className="
        max-lg:w-[16px] max-lg:h-[55px] max-lg:bg-[#EFC81A]
        lg:w-[25px] lg:h-[120px] lg:bg-[#EFC81A]
        desktop:w-[25px] desktop:h-[140px] desktop:bg-[#EFC81A]
        "
        ></div>
        <p
          className="
        max-lg:font-air max-lg:font-medium max-lg:text-[18px] max-lg:text-[#3F3A3A]
        lg:font-air lg:font-medium lg:text-[40px] lg:text-[#3F3A3A]
        desktop:font-air desktop:font-medium desktop:text-[48px] desktop:text-[#3F3A3A]
        "
        >
          New Recipe
        </p>
      </div>

      <div
        className="
      max-lg:w-max-[640px] max-lg:w-[80%] max-lg:flex max-lg:flex-col max-lg:mx-auto
      lg:w-[90%] lg:flex lg:mx-auto lg:mt-40
      desktop:w-max-[1920px] desktop:w-[1720px] desktop:h-[1210px] desktop:flex desktop:items-center desktop:mx-auto
      "
      >
        {/* Image Section */}
        <div
          className="
        max-lg:mt-8
        lg:w-[60%] lg:relative lg:h-fit
        desktop:mt-80
        "
        >
          <div
            className="
          max-lg:w-[80%] max-lg:h-[80%] max-lg:relative max-lg:mx-auto
          lg:w-[100%] lg:h-fit lg:relative
          desktop:w-[935px] desktop:h-[881px] desktop:relative
          "
          >
            <div
              className="
            max-lg:hidden
            lg:absolute lg:bg-[#EFC81A] lg:w-[50%] lg:h-[85%] lg:top-0 lg:left-0
            desktop:absolute desktop:bg-[#EFC81A] desktop:w-[514px] desktop:h-[820px] desktop:top-0 desktop:left-0
            "
            ></div>
            <div className="w-full h-fit lg:flex lg:justify-end lg:pt-20">
              <img
                src={newRecipeImage}
                alt="newRecipe-image"
                className="
                max-lg:w-full max-lg:ml-auto max-lg:z-10 max-lg:relative max-lg:rounded-lg
                lg:w-[85%] lg:z-10 lg:right-0 lg:bottom-0 lg:rounded-lg
                desktop:w-[800px] desktop:h-[800px] desktop:absolute desktop:z-10 desktop:right-0 desktop:bottom-0 desktop:rounded-lg
                "
              />
            </div>
          </div>
        </div>
        {/* Image Section */}

        {/* Recipe Info Section */}
        <div
          className="
        max-lg:flex max-lg:items-center
        lg:relative lg:flex lg:items-start lg:w-[40%] lg:h-fit
        desktop:relative desktop:flex desktop:items-center
        "
        >
          <div
            className="
          max-lg:w-[80%] max-lg:flex max-lg:flex-col max-lg:mx-auto
          lg:w-[100%] lg:h-auto lg:flex lg:flex-col lg:mt-24 lg:px-10
          desktop:w-[570px] desktop:h-auto desktop:ml-36 desktop:flex desktop:flex-col desktop:mt-56
          "
          >
            <p
              className="
            max-lg:font-air max-lg:font-medium max-lg:text-[28px] max-lg:text-[#3F3A3A]
            lg:font-air lg:font-medium lg:text-[35px] lg:text-[#3F3A3A]
            desktop:font-air desktop:font-medium desktop:text-[56px] desktop:text-[#3F3A3A]
            "
            >
              {newRecipeMenu}
            </p>
            <div
              className="
            max-lg:border-t-2 max-lg:w-full max-lg:h-0 max-lg:border-[#6F6A40] max-lg:mt-3
            lg:border-t-2 lg:w-[100px] lg:h-0 lg:border-[#6F6A40] lg:mt-7
            desktop:border-t-2 desktop:w-[100px] desktop:h-0 desktop:border-[#6F6A40] desktop:mt-7
            "
            ></div>
            <p
              className="
            max-lg:font-inter max-lg:text-[18px] max-lg:text-[#3F3A3A] max-lg:mt-3
            lg:font-inter lg:text-[20px] lg:text-[#3F3A3A] lg:mt-8
            desktop:font-inter desktop:text-[24px] desktop:text-[#3F3A3A] desktop:mt-8
            "
            >
              {newRecipeDesc}
            </p>
            <div
              className="
            max-lg:w-[100%] max-lg:mt-6
            lg:w-[200px] lg:mt-14
            desktop:w-[200px] desktop:mt-14
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
      lg:w-[90%] lg:h-auto lg:flex lg:items-center lg:gap-12 lg:mx-auto lg:pb-52 lg:mt-32
      desktop:w-[1720px] desktop:h-auto desktop:flex desktop:items-center desktop:gap-12 desktop:mx-auto desktop:mt-52 desktop:pb-52
      "
      >
        <div
          className="
        max-lg:w-[16px] max-lg:h-[55px] max-lg:bg-[#EFC81A]
        lg:w-[25px] lg:h-[120px] lg:bg-[#EFC81A]
        desktop:w-[25px] desktop:h-[140px] desktop:bg-[#EFC81A]
        "
        ></div>
        <p
          className="
        max-lg:font-air max-lg:font-medium max-lg:text-[18px] max-lg:text-[#3F3A3A]
        lg:font-air lg:font-medium lg:text-[40px] lg:text-[#3F3A3A]
        desktop:font-air desktop:font-medium desktop:text-[48px] desktop:text-[#3F3A3A]
        "
        >
          Popular Recipe
        </p>
      </div>

      {/* List Recipe */}
      <div
        className="
      max-lg:w-[80%] max-lg:mx-auto max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-12
      lg:w-[90%] lg:h-auto lg:mx-auto lg:flex lg:flex-wrap lg:justify-center lg:gap-24
      desktop:w-[1720px] desktop:h-auto desktop:mx-auto desktop:flex desktop:flex-wrap desktop:gap-24
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
      lg:w-[90%] lg:max-w-[720px] lg:mx-auto lg:mt-40
      desktop:w-[720px] desktop:mx-auto desktop:mt-40
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
