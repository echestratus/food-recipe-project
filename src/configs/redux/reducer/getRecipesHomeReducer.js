const initialState = {
    recipes: [],
    searchedRecipes: [],
    loading: false,
    error: null
}

const getRecipesHomeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_RECIPES_HOME_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_RECIPES_HOME_SUCCEED":
            return {
                ...state,
                loading: false,
                recipes: action.payload
            }
            break;
        case "GET_SEARCHED_RECIPES_HOME_SUCCEED":
            return {
                ...state,
                loading: false,
                searchedRecipes: action.payload
            }
            break;
        case "GET_RECIPES_HOME_FAILED":
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

export default getRecipesHomeReducer;