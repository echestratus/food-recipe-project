const initialState = {
    loading: false,
    error: null
}

const registerReducer = (state=initialState, action) => {
    switch (action.type) {
        case "REGISTER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "REGISTER_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break
        case "REGISTER_FAILED":
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        default:
            return state
            break;
    }
}

export default registerReducer