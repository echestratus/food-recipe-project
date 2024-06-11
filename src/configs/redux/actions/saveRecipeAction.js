import axios from "axios";

export const saveRecipeAction = (router) => (dispatch) => {
    dispatch({
        type: "SAVE_RECIPE_REQUEST"
    })
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}recipes/save`, {
        recipe_id: router.query.id
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res) => {
        dispatch({
            type: "SAVE_RECIPE_SUCCEED"
        })
        alert(res.data.message)
    })
    .catch((err) => {
        dispatch({
            type: "SAVE_RECIPE_FAILED",
            payload: err.response
        })
        alert(`Failed to save recipe`)
    })
}