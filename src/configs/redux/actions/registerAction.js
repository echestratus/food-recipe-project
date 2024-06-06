import axios from "axios";

export const registerAction = (userForm, router) => (dispatch) => {
    dispatch({
        type: "REGISTER_REQUEST"
    })
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/register`, {
        email: userForm.email,
        password: userForm.password,
        name: userForm.name,
        phone: userForm.phone
      })
      .then((res) => {
        dispatch({
            type: "REGISTER_SUCCEED"
        })
        console.log(res);
        alert(`${res.data.message}`)
        router.push('/auth/login')
      })
      .catch((err) => {
        dispatch({
            type: "REGISTER_FAILED",
            payload: err.response.data.message
        })
        console.log(err.response.data.message);
        alert(`${err.response.data.message}`)
      })
}