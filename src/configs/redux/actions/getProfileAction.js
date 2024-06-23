import axios from "axios";
import Cookies from "js-cookie";

export const getProfileAction = () => (dispatch) => {
    dispatch({
        type: "GET_PROFILE_REQUEST"
    })
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}users/profile`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
      .then((res)=>{
        console.log(res.data.data);
        dispatch({
            type: "GET_PROFILE_SUCCEED",
            payload: res.data.data
        })
      })
      .catch((err)=>{
        console.log(err.response);
        dispatch({
            type: "GET_PROFILE_FAILED",
            payload: err.response
        })
      })
}