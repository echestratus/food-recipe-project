const initialState = {
    recipes: [],
    loading: false,
    error: null
}

const getAllRecipesReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_ALL_RECIPES_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_ALL_RECIPES_SUCCEED":
            return {
                ...state,
                loading: false,
                recipes: action.payload
            }
        case "GET_ALL_RECIPES_FAILED":
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

export default getAllRecipesReducer;