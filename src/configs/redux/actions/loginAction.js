import axios from "axios";
import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export const loginAction = (userForm, router) => (dispatch) => {
    dispatch({
        type: "LOGIN_REQUEST"
    })
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
        email: userForm.email,
        password: userForm.password
      })
      .then((res) => {
        console.log(res.data.data);
        const response = NextResponse.next()
        dispatch({
            type: "LOGIN_SUCCEED"
        })
        Cookies.set('token', res.data.data.token, { expires: 1 })
        Cookies.set('refreshToken', res.data.data.refreshToken, { expires: 1 })
        alert(`${res.data.message}`);
        router.push('/');
        return response
      })
      .catch((err) => {
        console.log(err);
        dispatch({
            type: "LOGIN_FAILED",
            payload: err.response.data.message
        })
        alert(`${err.response.data.message}`);
      });
}