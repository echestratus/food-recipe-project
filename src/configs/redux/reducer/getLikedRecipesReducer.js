const initialState = {
    recipes: [],
    loading: false,
    error: null
}

const getLikedRecipesReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_LIKED_RECIPES_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_LIKED_RECIPES_SUCCEED":
            return {
                ...state,
                loading: false,
                recipes: action.payload
            }
            break;
        case "GET_LIKED_RECIPES_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            break;
        default:
            return state
            break;
    }
}

export default getLikedRecipesReducer