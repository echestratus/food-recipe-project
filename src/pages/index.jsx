import ButtonSubmit from "@/components/base/ButtonSubmit";
import SearchField from "@/components/base/SearchField";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import RecipeCard from "@/components/modules/RecipeCard";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const newRecipeImage = "/newrecipe-dummy.png";
  const newRecipeMenu = "Healthy Bone Broth Ramen (Quick & Easy)";
  const newRecipeDesc =
    "Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!";
  const [recipeList, setRecipeList] = useState([{}]);
  const [searchedList, setSearchedList] = useState([{}]);
  const [searching, setSearching] = useState("");
  const router = useRouter()
  const searchParam = useSearchParams()
  const URLSearchParam = searchParam.get('search') ?? ''
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}recipes?limit=6`)
      .then((res) => {
        console.log(res.data.data);
        setRecipeList(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  const handleChange = (e) => {
    setSearching(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searching);
    axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}recipes?search=${searching}&limit=10000`)
    .then((res) => {
      console.log("Searching: ", res.data.data);
      setSearchedList(res.data.data);
      router.push({
        query: {search: searching}
      })
      console.log(router.query);
      setSearching('')
      })
      .catch((err) => {
        console.log(err.response);
      });
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
            <p className="2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]">{searchParam.get('search')} Not Found</p>
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
    <main className="2xl:bg-[#FFF5EC]">
      <div className="2xl:container 2xl:max-w-[1920px] 2xl:mx-auto 2xl:relative">
        <header className="2xl:flex 2xl:justify-center 2xl:relative 2xl:z-10">
          <Navbar />
        </header>
        <div className="2xl:w-[25%] 2xl:h-[1210px] 2xl:bg-[#EFC81A] 2xl:absolute 2xl:right-0 2xl:top-0"></div>
      </div>
      <div className="2xl:w-[1720px] 2xl:h-[1210px] 2xl:flex 2xl:mx-auto 2xl:container">
        {/* Discover Section */}
        <div className="2xl:mt-80">
          <div className="2xl:w-[670px] 2xl:h-auto 2xl:flex 2xl:flex-col">
            <p className="2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]">
              Discover Recipe
            </p>
            <p className="2xl:font-air 2xl:font-medium 2xl:text-[72px] 2xl:text-[#2E266F]">
              & Delicious Food
            </p>
            <SearchField onChange={handleChange} onSubmit={handleSearch} />
          </div>
        </div>
        {/* Discover Section */}

        {/* Image Section */}
        <div className="2xl:relative">
          <img
            src="/food-logo.png"
            alt="food-logo"
            className="2xl:w-[878px] 2xl:h-auto 2xl:ml-32"
          />
        </div>
        {/* Image Section */}
      </div>

      <div className="2xl:w-[1720px] 2xl:h-auto 2xl:flex 2xl:items-center 2xl:gap-12 2xl:mx-auto">
        <div className="2xl:w-[25px] 2xl:h-[140px] 2xl:bg-[#EFC81A]"></div>
        <p className="2xl:font-air 2xl:font-medium 2xl:text-[48px] 2xl:text-[#3F3A3A]">
          New Recipe
        </p>
      </div>

      <div className="2xl:w-max-[1920px] 2xl:w-[1720px] 2xl:h-[1210px] 2xl:flex 2xl:mx-auto">
        {/* Image Section */}
        <div className="2xl:mt-80">
          <div className="2xl:w-[935px] 2xl:h-[881px] 2xl:relative">
            <div className="2xl:absolute 2xl:bg-[#EFC81A] 2xl:w-[514px] 2xl:h-[820px] 2xl:top-0 2xl:left-0"></div>
            <img
              src={newRecipeImage}
              alt="newRecipe-image"
              className="2xl:w-[800px] 2xl:h-[800px] 2xl:absolute 2xl:z-10 2xl:right-0 2xl:bottom-0 2xl:rounded-lg"
            />
          </div>
        </div>
        {/* Image Section */}

        {/* Recipe Info Section */}
        <div className="2xl:relative 2xl:flex 2xl:items-center">
          <div className="2xl:w-[570px] 2xl:h-auto 2xl:ml-36 2xl:flex 2xl:flex-col 2xl:mt-56">
            <p className="2xl:font-air 2xl:font-medium 2xl:text-[56px] 2xl:text-[#3F3A3A]">
              {newRecipeMenu}
            </p>
            <div className="2xl:border-t-2 2xl:w-[100px] 2xl:h-0 2xl:border-[#6F6A40] 2xl:mt-7"></div>
            <p className="2xl:font-inter 2xl:text-[24px] 2xl:text-[#3F3A3A] 2xl:mt-8">
              {newRecipeDesc}
            </p>
            <div className="2xl:w-[200px] 2xl:mt-14">
              <ButtonSubmit>Learn More</ButtonSubmit>
            </div>
          </div>
        </div>
        {/* Recipe Info Section */}
      </div>

      <div className="2xl:w-[1720px] 2xl:h-auto 2xl:flex 2xl:items-center 2xl:gap-12 2xl:mx-auto 2xl:mt-52 2xl:pb-52">
        <div className="2xl:w-[25px] 2xl:h-[140px] 2xl:bg-[#EFC81A]"></div>
        <p className="2xl:font-air 2xl:font-medium 2xl:text-[48px] 2xl:text-[#3F3A3A]">
          Popular Recipe
        </p>
      </div>

      {/* List Recipe */}
      <div className="2xl:w-[1720px] 2xl:h-auto 2xl:mx-auto 2xl:flex 2xl:flex-wrap 2xl:gap-24">
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

      <div className="2xl:w-[720px] 2xl:mx-auto 2xl:mt-40">
        <ButtonSubmit onClick={() => router.push('/recipes')}>See More Recipes</ButtonSubmit>
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
