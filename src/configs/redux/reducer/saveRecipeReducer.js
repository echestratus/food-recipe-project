const initialState = {
    loading: false,
    error: null
}

const saveRecipeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SAVE_RECIPE_REQUEST":
            return {
                loading: true
            }
            break;
        case "SAVE_RECIPE_SUCCEED":
            return {
                loading: false
            }
            break
        case "SAVE_RECIPE_FAILED":
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
            break;
    }
}

export default saveRecipeReducer