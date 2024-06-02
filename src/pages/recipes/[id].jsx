import BookmarkLogo from "@/components/base/BookmarkLogo";
import ButtonSubmit from "@/components/base/ButtonSubmit";
import InputField from "@/components/base/InputField";
import LikeLogo from "@/components/base/LikeLogo";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  let imgURL = "/default-recipeimg.png";
  const [detailRecipe, setDetailRecipe] = useState({
    author: {
      email: "",
      name: "",
      phone: "",
    },
    author_id: "",
    created_at: "",
    description: "",
    id: "",
    image: "",
    title: "",
    updated_at: "",
  });
  useEffect(() => {
    axios.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/${router.query.id}`),
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
    .then(axios.spread(function (recipe, saved, liked) {
        console.log(recipe.data.data);
        setDetailRecipe(recipe.data.data);

    // Search saved recipe id if any
    for (const index in saved.data.data) {
        if (saved.data.data[index].recipe_id === router.query.id) {
            setIsSaved(true) 
        }
    }
    // Search liked recipe id if any
    for (const index in liked.data.data) {
        if (liked.data.data[index].recipe_id === router.query.id) {
            setIsLiked(true) 
        }
    }

        setLoading(false);
    }))
    .catch((err) => {
        console.log(err.response);
        setLoading(false)
    })
  }, []);
  function isImage(url) {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  const handleClickSave = () => {
    if (isSaved === false) {
        setIsSaved(true)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}recipes/save`, {
            recipe_id: router.query.id
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            console.log(res.data.message);
            alert(res.data.message)
        })
        .catch((err) => {
            console.log(err.response);
            alert(`Failed to save recipe`)
        })
    } else {
        setIsSaved(false)
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/save`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((saved) => {
            for (const index in saved.data.data) {
                if (saved.data.data[index].recipe_id === router.query.id) {
                    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}recipes/save/${saved.data.data[index].id}`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                    .then((res) => {
                        console.log(res.data.message);
                        alert(res.data.message)
                    })
                    .catch((err) => {
                        console.log(err.response);
                        alert(`Failed to delete saved recipe`)
                    })
                }
            }
        })
        .catch((err) => {
            console.log(err.response);
            alert(`Failed to fetch saved recipes`)
        })
    }
  }

  const handleClickLike = () => {
    if (isLiked === false) {
        setIsLiked(true)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}recipes/like`, {
            recipe_id: router.query.id
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            console.log(res.data.message);
            alert(res.data.message)
        })
        .catch((err) => {
            console.log(err.response);
            alert(`Failed to liked recipe`)
        })
    } else {
        setIsLiked(false)
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/like`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((liked) => {
            for (const index in liked.data.data) {
                if (liked.data.data[index].recipe_id === router.query.id) {
                    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}recipes/like/${liked.data.data[index].id}`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                    .then((res) => {
                        console.log(res.data.message);
                        alert(res.data.message)
                    })
                    .catch((err) => {
                        console.log(err.response);
                        alert(`Failed to unlike recipe`)
                    })
                }
            }
        })
        .catch((err) => {
            console.log(err.response);
            alert(`Failed to fetch liked recipes`)
        })
    }
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
      <div className="w-[1720px] h-auto min-h-[1210px] mx-auto mt-10">
        <p className="font-air font-medium text-[72px] text-[#2E266F] text-center mb-20">
          {detailRecipe.title}
        </p>

        {/* Image Section */}
        {isImage(detailRecipe.image) === true ? (
          <div
            style={{ "--image-recipe": `url(${detailRecipe.image})` }}
            className="w-[1082px] h-[700px] flex justify-end items-end gap-4 bg-[image:var(--image-recipe)] bg-cover rounded-2xl mx-auto pb-10 pr-10"
          >
            <BookmarkLogo isSaved={isSaved} onClick={handleClickSave} />
            <LikeLogo isLiked={isLiked} onClick={handleClickLike} />
          </div>
        ) : (
          <div
            style={{ "--image-recipe": `url(${imgURL})` }}
            className="w-[1082px] h-[700px] flex justify-end items-end gap-4 bg-[image:var(--image-recipe)] bg-cover rounded-2xl mx-auto pb-10 pr-10"
          >
            <BookmarkLogo isSaved={isSaved} onClick={handleClickSave} />
            <LikeLogo isLiked={isLiked} onClick={handleClickLike} />
          </div>
        )}
        {/* Image Section */}

        <div className="pl-52">
          <p className="font-air font-medium text-[48px] text-[#3F3A3A] mt-24">
            Ingredients
          </p>
          <p className="font-inter font-light text-[36px] text-[#000000] whitespace-pre-wrap mt-10">
            {detailRecipe.description}
          </p>
          <p className="font-air font-medium text-[48px] text-[#3F3A3A] mt-24">
            Video Step
          </p>
          <div className="flex flex-col gap-12 mt-16">
            <button className="flex justify-center items-center bg-[#EFC81A] w-[411.27px] h-[93.01px] rounded-2xl">
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center bg-[#EFC81A] w-[411.27px] h-[93.01px] rounded-2xl">
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center bg-[#EFC81A] w-[411.27px] h-[93.01px] rounded-2xl">
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center bg-[#EFC81A] w-[411.27px] h-[93.01px] rounded-2xl">
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Send Comment Section */}
        <div className="flex flex-col justify-center items-center mt-36 gap-10">
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Comment"
            className="pl-6 pt-6 w-[1300px] h-[380px] bg-[#F6F5F4] outline-none rounded-2xl mx-auto font-air font-medium text-[24px] text-[#666666] placeholder:font-air placeholder:font-medium placeholder:text-[24px] placeholder:text-[#666666]"
          ></textarea>
          <div className="w-[426px]">
            <ButtonSubmit>Send</ButtonSubmit>
          </div>
        </div>
        {/* Send Comment Section */}

        {/* List of Comments */}
        <div className="pl-52">
        <p className="font-air font-medium text-[48px] text-[#3F3A3A] mt-24">
            Comment
          </p>
        </div>
        {/* List of Comments */}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetail;
