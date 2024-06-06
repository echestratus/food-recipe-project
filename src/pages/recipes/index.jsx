import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import Pagination from "@/components/modules/Pagination";
import RecipeCard from "@/components/modules/RecipeCard";
import { getAllRecipesAction } from "@/configs/redux/actions/getAllRecipesAction";
import { store } from "@/configs/redux/store";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";

export async function getServerSideProps() {
  await store.dispatch(getAllRecipesAction())
  const {recipes: allRecipes} = store.getState().getAllRecipes
  return {
    props: { recipesProps: allRecipes },
  };
  // try {
  //   const res = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API_URL}recipes?limit=60000`
  //   );
  //   return {
  //     props: { recipesProps: res.data.data },
  //   };
  // } catch (error) {
  //   console.log(error.response);
  // }
}

const recipes = ({ recipesProps }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [recipeList, setRecipeList] = useState(recipesProps);
  const [pageSearchParams, setPageSearchParams] = useState(
    searchParams.get("page") ?? "1"
  );
  const [limitSearchParams, setLimitSearchParams] = useState(
    searchParams.get("limit") ?? "6"
  );
  const [pagination, setPagination] = useState({
    totalData: recipesProps.length,
    limit: parseInt(limitSearchParams),
    currentPage: parseInt(pageSearchParams),
    start: (parseInt(pageSearchParams) - 1) * parseInt(limitSearchParams),
    end:
      (parseInt(pageSearchParams) - 1) * parseInt(limitSearchParams) +
      parseInt(limitSearchParams),
    totalPage: Math.ceil(recipesProps.length / parseInt(limitSearchParams)),
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    router.push({
      query: { page: pagination.currentPage, limit: pagination.limit },
    });
    setPagination({
      ...pagination,
      start: (pagination.currentPage - 1) * pagination.limit,
      end: (pagination.currentPage - 1) * pagination.limit + pagination.limit,
    });
    setLoading(false);
  }, [pagination.currentPage]);

  if (loading === true) {
    return (
      <div className="bg-[#FFFFFF] relative">
        <div className="container max-w-[1920px] mx-auto relative">
          <header className="flex justify-center relative z-10">
            <Navbar />
          </header>
        </div>
        {/* List Searched Recipes */}
        <div className="w-[1720px] h-auto min-h-[1210px] mx-auto flex flex-wrap gap-24 mt-10 leading-none">
          <Skeleton
            style={{ borderRadius: 10 }}
            containerClassName="flex-1"
            className="h-[500px]"
          />
        </div>
        {/* List Searched Recipes */}
        <div className="w-[1720px] h-auto mx-auto mt-20 flex justify-center">
          <Pagination pagination={pagination} setPagination={setPagination} />
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="bg-[#FFFFFF] relative">
      <div className="container max-w-[1920px] mx-auto relative">
        <header className="flex justify-center relative z-10">
          <Navbar />
        </header>
      </div>
      {/* List Searched Recipes */}
      <div className="w-[1720px] h-auto  min-h-[1210px] mx-auto flex flex-wrap gap-24 mt-10">
        {recipeList
          .slice(pagination.start, pagination.end)
          .map((recipe, index) => (
            <RecipeCard
              recipeName={recipe.title}
              imageURL={recipe.image}
              key={index}
              id={recipe.id}
            />
          ))}
      </div>
      {/* List Searched Recipes */}
      <div className="w-[1720px] h-auto mx-auto mt-20 flex justify-center">
        <Pagination pagination={pagination} setPagination={setPagination} />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default recipes;
