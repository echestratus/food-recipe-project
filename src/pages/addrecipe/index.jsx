import ButtonSubmit from "@/components/base/ButtonSubmit";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import { addRecipeAction } from "@/configs/redux/actions/addRecipeAction";
import { uploadImageAction } from "@/configs/redux/actions/uploadImageAction";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const addrecipe = () => {
  const {imageURL} = useSelector((state) => state.uploadImage)
  const {login: isLogin} = useSelector((state) => state.getProfile)
  const router = useRouter()
  const [formRecipe, setFormRecipe] = useState({
    title: "",
    description: "",
    image: "",
  });
  const dispatch = useDispatch()

  useEffect(()=>{
    if (isLogin) {
      setFormRecipe({
        ...formRecipe,
        image: imageURL
      })
    } else {
      router.push('/auth/login')
    }
  },[imageURL])

  const handleUploadImage = (e, setFormRecipe) => {
    dispatch(uploadImageAction(e, setFormRecipe))

    // const file = e.target.files[0];
    // const formData = new FormData();
    // formData.append("file", file);
    // axios
    //   .post(`${process.env.NEXT_PUBLIC_API_URL}upload`, formData, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((res) => {
    //     const { file_url } = res.data.data;
    //     setFormRecipe({
    //       ...formRecipe,
    //       image: file_url,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     alert(`Failed to upload image`);
    //   });
  };

  const handleChangeTitle = (e) => {
    setFormRecipe({
      ...formRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDescription = (e) => {
    setFormRecipe({
      ...formRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickPost = () => {
    dispatch(addRecipeAction(formRecipe, setFormRecipe))
    // axios
    //   .post(
    //     `${process.env.NEXT_PUBLIC_API_URL}recipes/`,
    //     {
    //       title: formRecipe.title,
    //       description: formRecipe.description,
    //       image: formRecipe.image,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     alert(res.data.message);
    //     setFormRecipe({
    //       title: "",
    //       description: "",
    //       image: "",
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     alert(`Failed to post recipe`);
    //   });
  };

  return (
    <div className="bg-[#FFFFFF]">
      <div className="
      max-lg:container max-lg:max-w-[1024px] max-lg:mx-auto
      2xl:container 2xl:max-w-[1920px] 2xl:mx-auto
      ">
        <header className="
        max-lg:flex max-lg:justify-center
        2xl:flex 2xl:justify-center
        ">
          <Navbar />
        </header>
      </div>
      <div className="
      max-lg:w-[80%] max-lg:mx-auto max-lg:mt-10
      2xl:w-[1720px] 2xl:h-auto 2xl:min-h-[1210px] 2xl:mx-auto 2xl:mt-10
      ">
        <label className="
        max-lg:w-[100%] max-lg:h-[240px] max-lg:mx-auto max-lg:bg-[#F6F5F4] max-lg:rounded-xl max-lg:flex max-lg:justify-center max-lg:items-center max-lg:relative
        2xl:w-[1300px] 2xl:h-[480px] 2xl:mx-auto 2xl:bg-[#F6F5F4] 2xl:rounded-2xl 2xl:flex 2xl:justify-center 2xl:items-center 2xl:relative
        ">
          {formRecipe.image ? (
            <img
              src={formRecipe.image}
              alt="recipeImage"
              className="
              max-lg:w-full max-lg:h-full max-lg:object-cover max-lg:rounded-2xl max-lg:absolute
              2xl:w-full 2xl:h-full 2xl:object-cover 2xl:rounded-2xl 2xl:absolute
              "
            />
          ) : (
            <div className="
            max-lg:flex max-lg:flex-col max-lg:items-center max-lg:hover:cursor-pointer
            2xl:flex 2xl:flex-col 2xl:items-center 2xl:hover:cursor-pointer
            ">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.6667 8H13.3333C10.3878 8 8 10.3878 8 13.3333V50.6667C8 53.6122 10.3878 56 13.3333 56H50.6667C53.6122 56 56 53.6122 56 50.6667V13.3333C56 10.3878 53.6122 8 50.6667 8Z"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.6667 26.6666C24.8759 26.6666 26.6667 24.8758 26.6667 22.6666C26.6667 20.4575 24.8759 18.6666 22.6667 18.6666C20.4576 18.6666 18.6667 20.4575 18.6667 22.6666C18.6667 24.8758 20.4576 26.6666 22.6667 26.6666Z"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M55.9999 40L42.6666 26.6666L13.3333 56"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="
              max-lg:font-air max-lg:font-medium max-lg:text-[24px] max-lg:text-[#666666]
              2xl:font-air 2xl:font-medium 2xl:text-[24px] 2xl:text-[#666666]
              ">
                Add Photo
              </p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="
            max-lg:hidden
            2xl:hidden
            "
            onChange={handleUploadImage}
          />
        </label>
        <div className="
        max-lg:mx-auto max-lg:w-[100%] max-lg:h-[50px] max-lg:mt-10 max-lg:rounded-2xl
        2xl:mx-auto 2xl:w-[1300px] 2xl:h-[100px] 2xl:mt-12 2xl:rounded-2xl
        ">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="
            max-lg:w-full max-lg:h-full max-lg:bg-[#F6F5F4] max-lg:pl-5 max-lg:font-air max-lg:font-medium max-lg:text-[14px] max-lg:text-[#666666] max-lg:rounded-2xl max-lg:outline-none
            2xl:w-full 2xl:h-full 2xl:bg-[#F6F5F4] 2xl:pl-8 2xl:font-air 2xl:font-medium 2xl:text-[24px] 2xl:text-[#666666] 2xl:rounded-2xl 2xl:outline-none
            "
            value={formRecipe.title}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="
        max-lg:mx-auto max-lg:w-[100%] max-lg:h-[240px] max-lg:mt-10 max-lg:rounded-2xl
        2xl:mx-auto 2xl:w-[1300px] 2xl:h-[380px] 2xl:mt-12 2xl:rounded-2xl
        ">
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="100"
            placeholder="Ingredients"
            value={formRecipe.description}
            onChange={handleChangeDescription}
            className="
            max-lg:w-full max-lg:h-full max-lg:bg-[#F6F5F4] max-lg:pl-5 max-lg:pt-5 max-lg:font-air max-lg:font-medium max-lg:text-[14px] max-lg:text-[#666666] max-lg:rounded-2xl max-lg:outline-none
            2xl:w-full 2xl:h-full 2xl:bg-[#F6F5F4] 2xl:pl-8 2xl:pt-8 2xl:font-air 2xl:font-medium 2xl:text-[24px] 2xl:text-[#666666] 2xl:rounded-2xl 2xl:outline-none
            "
          ></textarea>
        </div>
        <div className="
        max-lg:mx-auto max-lg:w-[100%] max-lg:mt-10 max-lg:rounded-2xl
        2xl:mx-auto 2xl:w-[426px] 2xl:h-auto 2xl:mt-12 2xl:rounded-2xl
        ">
          <ButtonSubmit onClick={handleClickPost}>Post</ButtonSubmit>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default addrecipe;
