const initialState = {
    imageURL: "",
    loading: false,
    error: null
}

const uploadImageReducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPLOAD_IMAGE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "UPLOAD_IMAGE_SUCCEED":
            return {
                ...state,
                loading: false,
                imageURL: action.payload
            }
            break;
        case "UPLOAD_IMAGE_FAILED":
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

export default uploadImageReducer

