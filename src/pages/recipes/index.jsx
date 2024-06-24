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
  await store.dispatch(getAllRecipesAction());
  const { recipes: allRecipes } = store.getState().getAllRecipes;
  return {
    props: { recipesProps: allRecipes },
  };
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
      <div className="2xl:bg-[#FFFFFF] 2xl:relative">
        <div className="2xl:container 2xl:max-w-[1920px] 2xl:mx-auto 2xl:relative">
          <header className="2xl:flex 2xl:justify-center 2xl:relative 2xl:z-10">
            <Navbar />
          </header>
        </div>
        {/* List Searched Recipes */}
        <div className="2xl:w-[1720px] 2xl:h-auto 2xl:min-h-[1210px] 2xl:mx-auto 2xl:flex 2xl:flex-wrap 2xl:gap-24 2xl:mt-10 2xl:leading-none">
          <Skeleton
            style={{ borderRadius: 10 }}
            containerClassName="2xl:flex-1"
            className="2xl:h-[500px]"
          />
        </div>
        {/* List Searched Recipes */}
        <div className="2xl:w-[1720px] 2xl:h-auto 2xl:mx-auto 2xl:mt-20 2xl:flex 2xl:justify-center">
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
      <div className="
      max-lg:container max-lg:max-w-[1024px] max-lg:mx-auto max-lg:relative
      2xl:container 2xl:max-w-[1920px] 2xl:mx-auto 2xl:relative
      ">
        <header className="
        max-lg:flex max-lg:justify-center max-lg:relative max-lg:z-10
        2xl:flex 2xl:justify-center 2xl:relative 2xl:z-10
        ">
          <Navbar />
        </header>
      </div>

      <div className="
      max-lg:w-[80%] max-lg:mx-auto max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-12
      2xl:w-[1720px] 2xl:h-auto 2xl:min-h-[1210px] 2xl:mx-auto 2xl:flex 2xl:flex-wrap 2xl:gap-24 2xl:mt-10
      ">
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

      <div className="
      max-lg:w-[80%] max-lg:mx-auto max-lg:mt-12 max-lg:flex max-lg:justify-center
      lg:w-[1024px] lg:h-auto lg:mx-auto lg:mt-20 lg:flex lg:justify-center
      2xl:w-[1536px] 2xl:h-auto 2xl:mx-auto 2xl:mt-20 2xl:flex 2xl:justify-center
      ">
        <Pagination pagination={pagination} setPagination={setPagination} />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default recipes;
