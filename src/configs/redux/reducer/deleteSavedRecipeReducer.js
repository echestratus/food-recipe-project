const initialState = {
    loading: false,
    error: null
}

const deleteSavedRecipeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "DELETE_SAVED_RECIPE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "DELETE_SAVED_RECIPE_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "DELETE_SAVED_RECIPE_FAILED":
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

export default deleteSavedRecipeReducer