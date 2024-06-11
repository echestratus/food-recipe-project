import axios from "axios"

export const getDetailRecipeAction = (router) => (dispatch) => {
    dispatch({
        type: "GET_RECIPE_REQUEST"
    })
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/${router.query.id}`)
    .then((res) => {
        dispatch({
            type: "GET_RECIPE_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err) => {
        dispatch({
            type: "GET_RECIPE_FAILED",
            payload: err.response
        })
    })
}