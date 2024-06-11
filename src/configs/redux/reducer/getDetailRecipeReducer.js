const initialState = {
    recipe: {},
    loading: false,
    error: null
}

const getDetailRecipeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_RECIPE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_RECIPE_SUCCEED":
            return {
                ...state,
                loading: false,
                recipe: action.payload
            }
            break;
        case "GET_RECIPE_FAILED":
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

export default getDetailRecipeReducer