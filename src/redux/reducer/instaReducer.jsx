import * as type from "../action/actionType";



const initialeState = {
    isAuthenticating: false,
    loading: false,
    data: {},
    error: null
}

 const instaReducer = (state = initialeState, action) => {
    switch (action.type) {
        case type.SIGN_START:
            return {
                ...state, loading: true
            }
        case type.SIGN_SUCCESS:
            return {
                ...state, isAuthenticating: true, loading: false, data: action.payload, error: null
            }
        case type.SIGN_ERROR:
            return {
                ...state,  loading: false, error: action.payload
            }
        default:
            return {
                ...state
            }        
    }
}

export default instaReducer