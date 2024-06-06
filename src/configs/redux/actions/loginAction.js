import axios from "axios";

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
        dispatch({
            type: "LOGIN_SUCCEED"
        })
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('refreshToken', res.data.data.refreshToken);
        alert(`${res.data.message}`);
        router.push('/');
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