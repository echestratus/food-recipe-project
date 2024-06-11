import axios from "axios"

export const likeRecipeAction = (router) => (dispatch) => {
    dispatch({
        type: "LIKE_RECIPE_REQUEST"
    })
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}recipes/like`, {
        recipe_id: router.query.id
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res) => {
        dispatch({
            type: "LIKE_RECIPE_SUCCEED"
        })
        alert(res.data.message)
    })
    .catch((err) => {
        dispatch({
            type: "LIKE_RECIPE_FAILED",
            payload: err.response
        })
        alert(`Failed to liked recipe`)
    })
}