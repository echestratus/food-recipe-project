const initialState = {
    profile: [],
    loading: false,
    login: false,
    error: null
}

const getProfileReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_PROFILE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_PROFILE_SUCCEED":
            return {
                ...state,
                loading: false,
                login: true,
                profile: action.payload
            }
            break
        case "GET_PROFILE_FAILED":
            return {
                ...state,
                loading: false,
                login: false,
                error: action.payload
            }
            break
        default:
            return state
            break;
    }
}

export default getProfileReducer