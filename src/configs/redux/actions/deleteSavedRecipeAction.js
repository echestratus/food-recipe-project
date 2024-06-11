import axios from "axios"

export const deleteSavedRecipeAction = (router) => (dispatch) => {
    dispatch({
        type: "DELETE_SAVED_RECIPE_REQUEST"
    })

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}recipes/save`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((saved) => {
        for (const index in saved.data.data) {
            if (saved.data.data[index].recipe_id === router.query.id) {
                axios.delete(`${process.env.NEXT_PUBLIC_API_URL}recipes/save/${saved.data.data[index].id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then((res) => {
                    dispatch({
                        type: "DELETE_SAVED_RECIPE_SUCCEED"
                    })
                    alert(res.data.message)
                })
                .catch((err) => {
                    dispatch({
                        type: "DELETE_SAVED_RECIPE_FAILED",
                        payload: err.response
                    })
                    alert(`Failed to delete saved recipe`)
                })
            }
        }
    })
    .catch((err) => {
        dispatch({
            type: "DELETE_SAVED_RECIPE_FAILED",
            payload: err.response
        })
        alert(`Failed to fetch saved recipes`)
    })
}