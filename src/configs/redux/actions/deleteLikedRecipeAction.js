import axios from "axios";
import Cookies from "js-cookie";

export const deleteLikedRecipeAction = (router) => (dispatch) => {
    dispatch({
        type: "DELETE_LIKED_RECIPE_REQUEST" 
    })
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/like`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    })
    .then((liked) => {
        for (const index in liked.data.data) {
            if (liked.data.data[index].recipe_id === router.query.id) {
                axios.delete(`${process.env.NEXT_PUBLIC_API_URL}recipes/like/${liked.data.data[index].id}`, {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('token')}`
                    }
                })
                .then((res) => {
                    dispatch({
                        type: "DELETE_LIKED_RECIPE_SUCCEED"
                    })
                    alert(res.data.message)
                })
                .catch((err) => {
                    dispatch({
                        type: "DELETE_LIKED_RECIPE_FAILED",
                        payload: err.response
                    })
                    alert(`Failed to unlike recipe`)
                })
            }
        }
    })
    .catch((err) => {
        dispatch({
            type: "DELETE_LIKED_RECIPE_FAILED",
            payload: err.response
        })
        alert(`Failed to fetch liked recipes`)
    })
}