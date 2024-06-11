const initialState = {
    loading: false,
    error: null
}

const deleteLikedRecipeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "DELETE_LIKED_RECIPE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "DELETE_LIKED_RECIPE_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break
        case "DELETE_LIKED_RECIPE_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
            break;
    }
}

export default deleteLikedRecipeReducer