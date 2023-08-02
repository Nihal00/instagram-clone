import * as type from "../action/actionType";



const initialState = {
    loading: false,
    error: null,
    userToken: "",
    data: {}
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN_START:
            return {
                ...state, loading: true
            }
        case type.LOGIN_SUCCESS:
            return {
                ...state, loading: false, error: null, userToken: action.payload.token, data: action.payload
            }
        case type.LOGIN_ERROR:
            return {
                ...state, error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default loginReducer;