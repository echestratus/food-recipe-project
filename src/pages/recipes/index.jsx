import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import Pagination from "@/components/modules/Pagination";
import RecipeCard from "@/components/modules/RecipeCard";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const recipes = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [recipeList, setRecipeList] = useState([]);
  const [pageSearchParams, setPageSearchParams] = useState(searchParams.get("page") ?? '1');
  const [limitSearchParams, setLimitSearchParams] = useState(searchParams.get("limit") ?? '6');
  const [pagination, setPagination] = useState({
    totalData: null,
    limit: parseInt(limitSearchParams),
    currentPage: parseInt(pageSearchParams),
    start: null,
    end: null,
    totalPage: null,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (recipeList.length === 0) {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}recipes?limit=60000`)
          .then((res) => {
            console.log(res.data.data);
            setRecipeList(res.data.data);
            setPagination({
              ...pagination,
              totalData: res.data.data.length,
              start: (pagination.currentPage - 1) * pagination.limit,
              end:
                (pagination.currentPage - 1) * pagination.limit + pagination.limit,
              totalPage: Math.ceil(res.data.data.length / pagination.limit),
            });
            router.push({
              query: { page: pagination.currentPage, limit: pagination.limit },
            });
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.response);
            setLoading(false);
          });
    } else {
        setPagination({
            ...pagination,
            start: (pagination.currentPage - 1) * pagination.limit,
            end: (pagination.currentPage - 1) * pagination.limit + pagination.limit,
          });
          router.push({
            query: { page: pagination.currentPage, limit: pagination.limit },
          });
          setLoading(false);
    }
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
            <Skeleton style={{borderRadius: 10}} containerClassName="flex-1" className="h-[500px]" />
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
