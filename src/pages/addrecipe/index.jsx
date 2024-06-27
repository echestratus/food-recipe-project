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
    if (isLogin === false) {
      router.push('/auth/login')
    } else {
      setFormRecipe({
        ...formRecipe,
        image: imageURL
      })
    }
  },[imageURL])

  const handleUploadImage = (e) => {
    dispatch(uploadImageAction(e, getImage))

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
      lg:container lg:max-w-[1720px] lg:mx-auto
      desktop:container desktop:max-w-[1920px] desktop:mx-auto
      ">
        <header className="
        max-lg:flex max-lg:justify-center
        lg:flex lg:justify-center
        desktop:flex desktop:justify-center
        ">
          <Navbar />
        </header>
      </div>
      <div className="
      max-lg:w-[80%] max-lg:mx-auto max-lg:mt-10
      lg:w-[90%] lg:mx-auto lg:mt-10
      desktop:w-[1720px] desktop:h-auto desktop:min-h-[1210px] desktop:mx-auto desktop:mt-10
      ">
        <label className="
        max-lg:w-[100%] max-lg:mx-auto max-lg:bg-[#F6F5F4] max-lg:rounded-xl max-lg:flex max-lg:justify-center max-lg:items-center max-lg:relative
        lg:w-[100%] aspect-video lg:mx-auto lg:bg-[#F6F5F4] lg:rounded-2xl lg:flex lg:justify-center lg:items-center lg:relative
        desktop:w-[1300px] desktop:mx-auto desktop:bg-[#F6F5F4] desktop:rounded-2xl desktop:flex desktop:justify-center desktop:items-center desktop:relative
        ">
          {formRecipe.image ? (
            <img
              src={formRecipe.image}
              alt="recipeImage"
              className="
              max-lg:w-full max-lg:h-full max-lg:object-cover max-lg:rounded-2xl max-lg:absolute
              lg:w-full lg:h-full lg:object-cover lg:rounded-2xl lg:absolute aspect-video
              desktop:w-full desktop:h-full desktop:object-cover desktop:rounded-2xl desktop:absolute
              "
            />
          ) : (
            <div className="
            max-lg:flex max-lg:flex-col max-lg:items-center max-lg:hover:cursor-pointer
            lg:flex lg:flex-col lg:items-center lg:hover:cursor-pointer
            desktop:flex desktop:flex-col desktop:items-center desktop:hover:cursor-pointer
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
              lg:font-air lg:font-medium lg:text-[24px] lg:text-[#666666]
              desktop:font-air desktop:font-medium desktop:text-[24px] desktop:text-[#666666]
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
            hidden
            desktop:hidden
            "
            onChange={handleUploadImage}
          />
        </label>
        <div className="
        max-lg:mx-auto max-lg:w-[100%] max-lg:h-[50px] max-lg:mt-10 max-lg:rounded-2xl
        lg:mx-auto lg:w-[100%] lg:h-[100px] lg:mt-12 lg:rounded-2xl
        desktop:mx-auto desktop:w-[1300px] desktop:h-[100px] desktop:mt-12 desktop:rounded-2xl
        ">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="
            max-lg:w-full max-lg:h-full max-lg:bg-[#F6F5F4] max-lg:pl-5 max-lg:font-air max-lg:font-medium max-lg:text-[14px] max-lg:text-[#666666] max-lg:rounded-2xl max-lg:outline-none
            lg:w-full lg:h-full lg:bg-[#F6F5F4] lg:pl-8 lg:font-air lg:font-medium lg:text-[24px] lg:text-[#666666] lg:rounded-2xl lg:outline-none
            desktop:w-full desktop:h-full desktop:bg-[#F6F5F4] desktop:pl-8 desktop:font-air desktop:font-medium desktop:text-[24px] desktop:text-[#666666] desktop:rounded-2xl desktop:outline-none
            "
            value={formRecipe.title}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="
        max-lg:mx-auto max-lg:w-[100%] max-lg:h-[240px] max-lg:mt-10 max-lg:rounded-2xl
        lg:mx-auto lg:w-[100%] lg:aspect-video lg:mt-12 lg:rounded-2xl
        desktop:mx-auto desktop:w-[1300px] desktop:h-[380px] desktop:mt-12 desktop:rounded-2xl
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
            lg:w-full lg:h-full lg:bg-[#F6F5F4] lg:pl-8 lg:pt-8 lg:font-air lg:font-medium lg:text-[24px] lg:text-[#666666] lg:rounded-2xl lg:outline-none
            desktop:w-full desktop:h-full desktop:bg-[#F6F5F4] desktop:pl-8 desktop:pt-8 desktop:font-air desktop:font-medium desktop:text-[24px] desktop:text-[#666666] desktop:rounded-2xl desktop:outline-none
            "
          ></textarea>
        </div>
        <div className="
        max-lg:mx-auto max-lg:w-[100%] max-lg:mt-10 max-lg:rounded-2xl
        lg:mx-auto lg:w-[100%] lg:max-w-[426px] lg:h-auto lg:mt-12 lg:rounded-2xl
        desktop:mx-auto desktop:w-[426px] desktop:h-auto desktop:mt-12 desktop:rounded-2xl
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
