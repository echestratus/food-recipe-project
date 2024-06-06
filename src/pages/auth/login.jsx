import ButtonSubmit from "@/components/base/ButtonSubmit";
import InputField from "@/components/base/InputField";
import AuthBackground from "@/components/modules/AuthBackground";
import { loginAction } from "@/configs/redux/actions/loginAction";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const login = () => {
  const [userForm, setUserForm] = useState({
    email: "",
    password: ""
  });
  const router = useRouter();
  const {loading, error} = useSelector((state)=>state.login)
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    dispatch(loginAction(userForm, router))
    // axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
    //   email: userForm.email,
    //   password: userForm.password
    // })
    // .then((res) => {
    //   console.log(res.data.data);
    //   localStorage.setItem('token', res.data.data.token);
    //   localStorage.setItem('refreshToken', res.data.data.refreshToken);
    //   alert(`${res.data.message}`);
    //   router.push('/');
    // })
    // .catch((err) => {
    //   console.log(err);
    //   alert(`${err.response.data.message}`);
    // });
  };

  const afterSubmission = (e) => {
    e.preventDefault();
  };

  return (
    <div className="
    w-[100%] h-auto flex justify-center items-center 
    lg:w-[100%] lg:h-auto lg:flex lg:justify-center lg:items-center
    ">
      <AuthBackground />
      <div className="
      mt-36 w-[80%] max-w-[640px]
      lg:w-[55%] lg:h-[1600px] lg:max-w-none lg:mt-0 lg:flex lg:justify-center lg:items-center lg:bg-white
      ">
        <div className="
        flex flex-col justify-center 
        lg:w-[426px] lg:h-auto lg:flex lg:flex-col lg:p-0 lg:justify-center
        ">
          <p className="
          font-inter font-bold text-[30px] text-[#EFC81A] text-center 
          lg:font-inter lg:font-bold lg:text-[30px] lg:text-[#EFC81A] lg:text-center
          ">
            Welcome
          </p>
          <p className="
          font-inter font-normal text-[18px] text-[#8692A6] mt-5 text-center 
          lg:font-inter lg:font-normal lg:text-[18px] lg:text-[#8692A6] lg:mt-5 lg:text-center
          ">
            Log in into your existing account
          </p>
          <form className="
          mt-12 flex flex-col gap-8
          lg:mt-12 lg:flex lg:flex-col lg:gap-8
          " 
          onSubmit={afterSubmission}>
            <InputField
              type="email"
              name="email"
              id="email-login"
              placeholder="E-mail"
              label="E-mail"
              onChange={handleChange}
              required={true}
            />
            <InputField
              type="password"
              name="password"
              id="password-login"
              placeholder="Password"
              label="Password"
              onChange={handleChange}
              required={true}
            />
            <div className="
            flex items-center mb-3
            lg:flex lg:items-center lg:mb-3
            ">
              <input
                type="checkbox"
                id="checkbox-agree"
                value="agree"
                required
                className="
                w-[20px] h-[20px] appearance-none checked:bg-[#EFC81A] checked:text-white checked:border-none border border-[#8692A6] rounded-[4px] peer relative left-0 shrink-0 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-['']
                lg:w-[20px] lg:h-[20px] lg:appearance-none lg:checked:bg-[#EFC81A] lg:checked:text-white lg:checked:border-none lg:border lg:border-[#8692A6] lg:rounded-[4px] lg:peer lg:relative lg:left-0 lg:shrink-0 lg:after:absolute lg:after:left-0 lg:after:top-0 lg:after:h-full lg:after:w-full lg:after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] lg:after:bg-[length:40px] lg:after:bg-center lg:after:bg-no-repeat lg:after:content-['']
                "
              />
              <label
                htmlFor="checkbox-agree"
                className="
                font-inter font-medium text-[16px] text-[#696F79] pl-3
                lg:font-inter lg:font-medium lg:text-[16px] lg:text-[#696F79] lg:pl-3
                "
              >
                I agree to terms & conditions
              </label>
            </div>
            <ButtonSubmit onClick={handleSubmit}>Log in</ButtonSubmit>
          </form>
          <p className="
          text-right font-air font-medium text-[12px] text-[#999999] p-0 mt-5
          lg:text-right lg:font-air lg:font-medium lg:text-[12px] lg:text-[#999999] lg:p-0 lg:mt-5
          ">Forgot Password ?</p>
          <p className="
          font-air font-medium text-[13px] text-[#999999] text-center mt-6
          lg:font-air lg:font-medium lg:text-[13px] lg:text-[#999999] lg:text-center lg:mt-6
          ">Don’t have an account yet? <Link className="
          text-[#EFC81A]
          lg:text-[#EFC81A]
          " 
          href='/auth/register'>Sign Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default login;
