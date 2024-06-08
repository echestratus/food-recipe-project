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
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const {login: isLogin} = useSelector((state) => state.getProfile)
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
    if (isLogin === true) {
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
    } else {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/${router.query.id}`)
      .then((res) => {
        setDetailRecipe(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false)
      })
    }
  }, []);
  function isImage(url) {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  const handleClickSave = () => {
    if (isLogin === true) {
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
    } else {
      router.push('/auth/login')
    }
  }

  const handleClickLike = () => {
    if (isLogin === true) {
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
    } else {
      router.push('/auth/login')
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
        <div className="
        max-sm:w-[80%] max-sm:h-auto max-sm:min-h-[1210px] max-sm:mx-auto max-sm:mt-10
        w-[1720px] h-auto min-h-[1210px] mx-auto mt-10
        ">
          <Skeleton className="h-[700px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF]">
      <div className="
      max-sm:container max-sm:max-w-[640px] max-sm:mx-auto
      container max-w-[1920px] mx-auto
      ">
        <header className="flex justify-center">
          <Navbar />
        </header>
      </div>
      <div className="
      max-sm:w-[80%] max-sm:h-auto max-sm:min-h-[1210px] max-sm:mx-auto max-sm:mt-10
      w-[1720px] h-auto min-h-[1210px] mx-auto mt-10
      ">
        <p className="
        max-sm:font-air max-sm:font-medium max-sm:text-[30px] max-sm:text-[#2E266F] max-sm:text-center max-sm:mb-10
        font-air font-medium text-[72px] text-[#2E266F] text-center mb-20
        ">
          {detailRecipe.title}
        </p>

        {/* Image Section */}
        {isImage(detailRecipe.image) === true ? (
          <div
            style={{ "--image-recipe": `url(${detailRecipe.image})` }}
            className="
            max-sm:w-[100%] max-sm:h-[300px] max-sm:flex max-sm:justify-end max-sm:items-end max-sm:gap-4 max-sm:bg-[image:var(--image-recipe)] max-sm:bg-cover max-sm:rounded-2xl max-sm:mx-auto max-sm:pb-5 max-sm:pr-5
            2xl:w-[1082px] 2xl:h-[700px] 2xl:flex 2xl:justify-end 2xl:items-end 2xl:gap-4 2xl:bg-[image:var(--image-recipe)] 2xl:bg-cover 2xl:rounded-2xl 2xl:mx-auto 2xl:pb-10 2xl:pr-10
            "
          >
            <BookmarkLogo isSaved={isSaved} onClick={handleClickSave} />
            <LikeLogo isLiked={isLiked} onClick={handleClickLike} />
          </div>
        ) : (
          <div
            style={{ "--image-recipe": `url(${imgURL})` }}
            className="
            max-sm:w-[300px] max-sm:h-[150px] max-sm:flex max-sm:justify-end max-sm:items-end max-sm:gap-4 max-sm:bg-[image:var(--image-recipe)] max-sm:bg-cover max-sm:rounded-2xl max-sm:mx-auto max-sm:pb-10 max-sm:pr-10
            2xl:w-[1082px] 2xl:h-[700px] 2xl:flex 2xl:justify-end 2xl:items-end 2xl:gap-4 2xl:bg-[image:var(--image-recipe)] 2xl:bg-cover 2xl:rounded-2xl 2xl:mx-auto 2xl:pb-10 2xl:pr-10
            "
          >
            <BookmarkLogo isSaved={isSaved} onClick={handleClickSave} />
            <LikeLogo isLiked={isLiked} onClick={handleClickLike} />
          </div>
        )}
        {/* Image Section */}

        <div className="
        2xl:pl-52">
          <p className="
          max-sm:font-air max-sm:font-medium max-sm:text-[24px] max-sm:text-[#3F3A3A] max-sm:mt-24
          font-air font-medium text-[48px] text-[#3F3A3A] mt-24
          ">
            Ingredients
          </p>
          <p className="
          max-sm:font-inter max-sm:font-light max-sm:text-[15px] max-sm:text-[#000000] max-sm:whitespace-pre-wrap max-sm:mt-10
          font-inter font-light text-[36px] text-[#000000] whitespace-pre-wrap mt-10
          ">
            {detailRecipe.description}
          </p>
          <p className="
          max-sm:font-air max-sm:font-medium max-sm:text-[24px] max-sm:text-[#3F3A3A] max-sm:mt-24
          font-air font-medium text-[48px] text-[#3F3A3A] mt-24
          ">
            Video Step
          </p>
          <div className="flex flex-col gap-12 mt-16">
            <button className="
            max-sm:flex max-sm:justify-center max-sm:items-center max-sm:bg-[#EFC81A] max-sm:w-[200px] max-sm:h-[80px] max-sm:rounded-2xl
            flex justify-center items-center bg-[#EFC81A] w-[411.27px] h-[93.01px] rounded-2xl
            ">
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
            <button className="
            max-sm:flex max-sm:justify-center max-sm:items-center max-sm:bg-[#EFC81A] max-sm:w-[200px] max-sm:h-[80px] max-sm:rounded-2xl
            flex justify-center items-center bg-[#EFC81A] w-[411.27px] h-[93.01px] rounded-2xl
            ">
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
            <button className="
            max-sm:flex max-sm:justify-center max-sm:items-center max-sm:bg-[#EFC81A] max-sm:w-[200px] max-sm:h-[80px] max-sm:rounded-2xl
            flex justify-center items-center bg-[#EFC81A] w-[411.27px] h-[93.01px] rounded-2xl
            ">
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
            <button className="
            max-sm:flex max-sm:justify-center max-sm:items-center max-sm:bg-[#EFC81A] max-sm:w-[200px] max-sm:h-[80px] max-sm:rounded-2xl
            flex justify-center items-center bg-[#EFC81A] w-[411.27px] h-[93.01px] rounded-2xl
            ">
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
        <div className="
        max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:mt-12 max-sm:gap-10
        flex flex-col justify-center items-center mt-36 gap-10
        ">
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Comment"
            className="
            max-sm:pl-2 max-sm:pt-2 max-sm:w-[100%] max-sm:h-[380px] max-sm:bg-[#F6F5F4] max-sm:outline-none max-sm:rounded-2xl max-sm:mx-auto max-sm:font-air max-sm:font-medium max-sm:text-[15px] max-sm:text-[#666666] max-sm:placeholder:font-air max-sm:placeholder:font-medium max-sm:placeholder:text-[15px] max-sm:placeholder:text-[#666666]
            pl-6 pt-6 w-[1300px] h-[380px] bg-[#F6F5F4] outline-none rounded-2xl mx-auto font-air font-medium text-[24px] text-[#666666] placeholder:font-air placeholder:font-medium placeholder:text-[24px] placeholder:text-[#666666]"
          ></textarea>
          <div className="
          max-sm:w-full
          w-[426px]
          ">
            <ButtonSubmit>Send</ButtonSubmit>
          </div>
        </div>
        {/* Send Comment Section */}

        {/* List of Comments */}
        <div className="
        max-sm:pl-5
        pl-52
        ">
        <p className="
        max-sm:font-air max-sm:font-medium max-sm:text-[24px] max-sm:text-[#3F3A3A] max-sm:mt-24
        font-air font-medium text-[48px] text-[#3F3A3A] mt-24">
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
