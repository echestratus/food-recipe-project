import axios from "axios"
import Cookies from "js-cookie"

export const getMyRecipeAction = () => (dispatch) => {
    dispatch({
        type: "GET_MY_RECIPE_REQUEST"
    })
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/self`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
    .then((res) => {
        dispatch({
            type: "GET_MY_RECIPES_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err) => {
        dispatch({
            type: "GET_MY_RECIPES_FAILED",
            payload: err.response
        })
    })
}