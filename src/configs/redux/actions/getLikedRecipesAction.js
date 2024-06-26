import axios from "axios"
import Cookies from "js-cookie"

export const getLikedRecipesAction = () => (dispatch) => {
    dispatch({
        type: "GET_LIKED_RECIPES_REQUEST"
    })
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/like`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    })
    .then((res) => {
        dispatch({
            type: "GET_LIKED_RECIPES_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err) => {
        dispatch({
            type: "GET_LIKED_RECIPES_FAILED",
            payload: err.response
        })
    })
}