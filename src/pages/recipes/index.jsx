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
      <div className="desktop:bg-[#FFFFFF] desktop:relative">
        <div className="desktop:container desktop:max-w-[1920px] desktop:mx-auto desktop:relative">
          <header className="desktop:flex desktop:justify-center desktop:relative desktop:z-10">
            <Navbar />
          </header>
        </div>
        {/* List Searched Recipes */}
        <div className="desktop:w-[1720px] desktop:h-auto desktop:min-h-[1210px] desktop:mx-auto desktop:flex desktop:flex-wrap desktop:gap-24 desktop:mt-10 desktop:leading-none">
          <Skeleton
            style={{ borderRadius: 10 }}
            containerClassName="desktop:flex-1"
            className="desktop:h-[500px]"
          />
        </div>
        {/* List Searched Recipes */}
        <div className="desktop:w-[1720px] desktop:h-auto desktop:mx-auto desktop:mt-20 desktop:flex desktop:justify-center">
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
          max-lg:w-[80%] max-lg:mx-auto max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-12
          lg:min-w-[1024px] lg:h-auto lg:mx-auto lg:flex lg:justify-center lg:flex-wrap lg:gap-24 lg:relative lg:pb-20 lg:mt-10
          desktop:min-w-[1536px] desktop:max-w-[1720px] desktop:mx-auto desktop:h-auto desktop:min-h-screen desktop:flex desktop:flex-wrap desktop:justify-center desktop:gap-24 desktop:relative desktop:pb-20 desktop:mt-10
          "
          >
              {recipeList.slice(pagination.start, pagination.end).map((recipe, index) => (
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
      desktop:w-[1536px] desktop:h-auto desktop:mx-auto desktop:mt-20 desktop:flex desktop:justify-center
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
