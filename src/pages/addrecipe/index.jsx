import ButtonSubmit from "@/components/base/ButtonSubmit";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import axios from "axios";
import React, { useState } from "react";

const addrecipe = () => {
  const [formRecipe, setFormRecipe] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleUploadImage = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const { file_url } = res.data.data;
        console.log(file_url);
        setFormRecipe({
          ...formRecipe,
          image: file_url,
        });
      })
      .catch((err) => {
        console.log(err.response);
        alert(`Failed to upload image`);
      });
  };
  const handleChangeTitle = (e) => {
    setFormRecipe({
      ...formRecipe,
      [e.target.name]: e.target.value
    })
  }
  const handleChangeDescription = (e) => {
    setFormRecipe({
      ...formRecipe,
      [e.target.name]: e.target.value
    })
  }
  const handleClickPost = () => {
    console.log(formRecipe);
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}recipes/`, {
      title: formRecipe.title,
      description: formRecipe.description,
      image: formRecipe.image
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      console.log(res.data.message);
      alert(res.data.message)
      setFormRecipe({
        title: "",
        description: "",
        image: "",
      })
    })
    .catch((err) => {
      console.log(err.response);
      alert(`Failed to post recipe`)
    })
  }
  return (
    <div className="bg-[#FFFFFF]">
      <div className="container max-w-[1920px] mx-auto">
        <header className="flex justify-center">
          <Navbar />
        </header>
      </div>
      <div className="w-[1720px] h-auto min-h-[1210px] mx-auto mt-10">
        <label className="w-[1300px] h-[480px] mx-auto bg-[#F6F5F4] rounded-2xl flex justify-center items-center relative">
          {formRecipe.image ? (
            <img
              src={formRecipe.image}
              alt="recipeImage"
              className="w-full h-full object-cover rounded-2xl absolute"
            />
          ) : (
            <div className="flex flex-col items-center hover:cursor-pointer">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.6667 26.6666C24.8759 26.6666 26.6667 24.8758 26.6667 22.6666C26.6667 20.4575 24.8759 18.6666 22.6667 18.6666C20.4576 18.6666 18.6667 20.4575 18.6667 22.6666C18.6667 24.8758 20.4576 26.6666 22.6667 26.6666Z"
                  stroke="#666666"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M55.9999 40L42.6666 26.6666L13.3333 56"
                  stroke="#666666"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="font-air font-medium text-[24px] text-[#666666]">
                Add Photo
              </p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUploadImage}
          />
        </label>
        <div className="mx-auto w-[1300px] h-[100px] mt-12 rounded-2xl">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full h-full bg-[#F6F5F4] pl-8 font-air font-medium text-[24px] text-[#666666] rounded-2xl outline-none"
            value={formRecipe.title}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="mx-auto w-[1300px] h-[380px] mt-12 rounded-2xl">
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="100"
            placeholder="Ingredients"
            value={formRecipe.description}
            onChange={handleChangeDescription}
            className="w-full h-full bg-[#F6F5F4] pl-8 pt-8 font-air font-medium text-[24px] text-[#666666] rounded-2xl outline-none"
          ></textarea>
        </div>
        <div className="mx-auto w-[426px] h-auto mt-12 rounded-2xl">
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
