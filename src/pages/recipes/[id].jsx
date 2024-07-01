import BookmarkLogo from "@/components/base/BookmarkLogo";
import ButtonSubmit from "@/components/base/ButtonSubmit";
import LikeLogo from "@/components/base/LikeLogo";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import axios from "axios";
import Cookies from "js-cookie";
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
                  'Authorization': `Bearer ${Cookies.get('token')}`
              }
          }),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/like`, {
              headers: {
                  'Authorization': `Bearer ${Cookies.get('token')}`
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
  }, [isLogin, router.query.id]);
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
                  'Authorization': `Bearer ${Cookies.get('token')}`
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
                  'Authorization': `Bearer ${Cookies.get('token')}`
              }
          })
          .then((saved) => {
              for (const index in saved.data.data) {
                  if (saved.data.data[index].recipe_id === router.query.id) {
                      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}recipes/save/${saved.data.data[index].id}`, {
                          headers: {
                              'Authorization': `Bearer ${Cookies.get('token')}`
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
                  'Authorization': `Bearer ${Cookies.get('token')}`
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
                  'Authorization': `Bearer ${Cookies.get('token')}`
              }
          })
          .then((liked) => {
              for (const index in liked.data.data) {
                  if (liked.data.data[index].recipe_id === router.query.id) {
                      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}recipes/like/${liked.data.data[index].id}`, {
                          headers: {
                              'Authorization': `Bearer ${Cookies.get('token')}`
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
        max-desktop:w-[80%] max-desktop:h-auto max-desktop:min-h-[1210px] max-desktop:mx-auto max-desktop:mt-10
        lg:w-[90%] lg:h-auto lg:min-h-[1210px] lg:mx-auto lg:mt-10
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
      max-desktop:container max-desktop:max-w-[1720px] max-desktop:mx-auto
      container max-w-[1920px] mx-auto
      ">
        <header className="flex justify-center">
          <Navbar />
        </header>
      </div>
      <div className="
      max-desktop:w-[80%] max-desktop:h-auto max-desktop:min-h-[1210px] max-desktop:mx-auto max-desktop:mt-10
      w-[1720px] h-auto min-h-[1210px] mx-auto mt-10
      ">
        <p className="
        max-lg:font-air max-lg:font-medium max-lg:text-[30px] max-lg:text-[#2E266F] max-lg:text-center max-lg:mb-10
        lg:font-air lg:font-medium lg:text-[72px] lg:text-[#2E266F] lg:text-center lg:mb-10
        font-air font-medium text-[72px] text-[#2E266F] text-center mb-20
        ">
          {detailRecipe.title}
        </p>

        {/* Image Section */}
        {isImage(detailRecipe.image) === true ? (
          <div
            style={{ "--image-recipe": `url(${detailRecipe.image})` }}
            className="
            max-desktop:w-[100%] aspect-video max-desktop:flex max-desktop:justify-end max-desktop:items-end max-desktop:gap-4 max-desktop:bg-[image:var(--image-recipe)] max-desktop:bg-cover max-desktop:rounded-2xl max-desktop:mx-auto max-desktop:pb-5 max-desktop:pr-5
            desktop:w-[1082px] desktop:h-[700px] desktop:flex desktop:justify-end desktop:items-end desktop:gap-4 desktop:bg-[image:var(--image-recipe)] desktop:bg-cover desktop:rounded-2xl desktop:mx-auto desktop:pb-10 desktop:pr-10
            "
          >
            <BookmarkLogo isSaved={isSaved} onClick={handleClickSave} />
            <LikeLogo isLiked={isLiked} onClick={handleClickLike} />
          </div>
        ) : (
          <div
            style={{ "--image-recipe": `url(${imgURL})` }}
            className="
            max-desktop:w-[300px] max-desktop:h-[150px] max-desktop:flex max-desktop:justify-end max-desktop:items-end max-desktop:gap-4 max-desktop:bg-[image:var(--image-recipe)] max-desktop:bg-cover max-desktop:rounded-2xl max-desktop:mx-auto max-desktop:pb-10 max-desktop:pr-10
            desktop:w-[1082px] desktop:h-[700px] desktop:flex desktop:justify-end desktop:items-end desktop:gap-4 desktop:bg-[image:var(--image-recipe)] desktop:bg-cover desktop:rounded-2xl desktop:mx-auto desktop:pb-10 desktop:pr-10
            "
          >
            <BookmarkLogo isSaved={isSaved} onClick={handleClickSave} />
            <LikeLogo isLiked={isLiked} onClick={handleClickLike} />
          </div>
        )}
        {/* Image Section */}

        <div className="
        desktop:pl-52">
          <p className="
          max-lg:font-air max-lg:font-medium max-lg:text-[24px] max-lg:text-[#3F3A3A] max-lg:mt-24
          lg:font-air lg::font-medium lg:text-[48px] lg:text-[#3F3A3A] lg:mt-24
          font-air font-medium text-[48px] text-[#3F3A3A] mt-24
          ">
            Ingredients
          </p>
          <p className="
          max-lg:font-inter max-lg:font-light max-lg:text-[15px] max-lg:text-[#000000] max-lg:whitespace-pre-wrap max-lg:mt-10
          lg:font-inter lg:font-light lg:text-[36px] lg:text-[#000000] lg:whitespace-pre-wrap lg:mt-10
          font-inter font-light text-[36px] text-[#000000] whitespace-pre-wrap mt-10
          ">
            {detailRecipe.description}
          </p>
          <p className="
          max-lg:font-air max-lg:font-medium max-lg:text-[24px] max-lg:text-[#3F3A3A] max-lg:mt-24
          lg:font-air lg:font-medium lg:text-[48px] lg:text-[#3F3A3A] lg:mt-24
          font-air font-medium text-[48px] text-[#3F3A3A] mt-24
          ">
            Video Step
          </p>
          <div className="flex flex-col gap-12 mt-16">
            <button className="
            max-desktop:flex max-desktop:justify-center max-desktop:items-center max-desktop:bg-[#EFC81A] max-desktop:w-[200px] max-desktop:h-[80px] max-desktop:rounded-2xl
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
            max-desktop:flex max-desktop:justify-center max-desktop:items-center max-desktop:bg-[#EFC81A] max-desktop:w-[200px] max-desktop:h-[80px] max-desktop:rounded-2xl
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
            max-desktop:flex max-desktop:justify-center max-desktop:items-center max-desktop:bg-[#EFC81A] max-desktop:w-[200px] max-desktop:h-[80px] max-desktop:rounded-2xl
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
            max-desktop:flex max-desktop:justify-center max-desktop:items-center max-desktop:bg-[#EFC81A] max-desktop:w-[200px] max-desktop:h-[80px] max-desktop:rounded-2xl
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
        max-desktop:flex max-desktop:flex-col max-desktop:justify-center max-desktop:items-center max-desktop:mt-12 max-desktop:gap-10
        flex flex-col justify-center items-center mt-36 gap-10
        ">
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Comment"
            className="
            max-lg:pl-2 max-lg:pt-2 max-lg:w-[100%] max-lg:h-[380px] max-lg:bg-[#F6F5F4] max-lg:outline-none max-lg:rounded-2xl max-lg:mx-auto max-lg:font-air max-lg:font-medium max-lg:text-[15px] max-lg:text-[#666666] max-lg:placeholder:font-air max-lg:placeholder:font-medium max-lg:placeholder:text-[15px] max-lg:placeholder:text-[#666666]
            lg:pl-6 lg:pt-6 lg:w-[100%] lg:h-[380px] lg:bg-[#F6F5F4] lg:outline-none lg:rounded-2xl lg:mx-auto lg:font-air lg:font-medium lg:text-[24px] lg:text-[#666666] lg:placeholder:font-air lg:placeholder:font-medium lg:placeholder:text-[24px] lg:placeholder:text-[#666666]
            pl-6 pt-6 w-[1300px] h-[380px] bg-[#F6F5F4] outline-none rounded-2xl mx-auto font-air font-medium text-[24px] text-[#666666] placeholder:font-air placeholder:font-medium placeholder:text-[24px] placeholder:text-[#666666]"
          ></textarea>
          <div className="
          max-desktop:w-full max-desktop:max-w-[426px]
          w-[426px]
          ">
            <ButtonSubmit>Send</ButtonSubmit>
          </div>
        </div>
        {/* Send Comment Section */}

        {/* List of Comments */}
        <div className="
        max-desktop:pl-5
        pl-52
        ">
        <p className="
        max-desktop:font-air max-desktop:font-medium max-desktop:text-[24px] max-desktop:text-[#3F3A3A] max-desktop:mt-24
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
