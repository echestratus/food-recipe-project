const { default: axios } = require("axios")

export const getSavedRecipesAction = () => (dispatch) => {
    dispatch({
        type: "GET_SAVED_RECIPES_REQUEST"
    })
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/save`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res) => {
        dispatch({
            type: "GET_SAVED_RECIPES_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err) => {
        dispatch({
            type: "GET_SAVED_RECIPES_FAILED",
            payload: err.response
        })
    })
}