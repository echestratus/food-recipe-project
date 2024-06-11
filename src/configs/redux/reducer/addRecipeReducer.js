const initialState = {
    loading: false,
    error: null
}

const addRecipeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_RECIPE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "ADD_RECIPE_SUCCEED":
            return {
                ...state,
                loading:false
            }
            break;
        case "ADD_RECIPE_FAILED":
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

export default addRecipeReducer