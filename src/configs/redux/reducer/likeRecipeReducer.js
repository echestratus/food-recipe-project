const initialState = {
    loading: false,
    error: null
}

const likeRecipeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LIKE_RECIPE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "LIKE_RECIPE_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "LIKE_RECIPE_FAILED":
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

export default likeRecipeReducer