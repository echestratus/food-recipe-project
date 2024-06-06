const initialState = {
    loading: false,
    error: null
}

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "LOGIN_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "LOGIN_FAILED":
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

export default loginReducer