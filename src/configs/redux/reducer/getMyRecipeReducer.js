const initialState = {
    recipes: [],
    loading: false,
    error: null
}

const getMyRecipeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_MY_RECIPE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_MY_RECIPES_SUCCEED":
            return {
                ...state,
                loading:false,
                recipes: action.payload
            }
            break
        case "GET_MY_RECIPES_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            break
    
        default:
            return state
            break;
    }
}

export default getMyRecipeReducer