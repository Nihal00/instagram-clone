import axios from "axios";
import * as type from "./actionType";


export const login = (data) => {
    return {
        type: type.LOGIN_START,
        payload: data
    }
}

export const loginSuccess = (data) => {
    return {
        type: type.LOGIN_START,
        payload: data,
    }
}

export const loginError = (err) => {
    return {
        type: type.LOGIN_ERROR,
        payload: err
    }
}


export function fetchLogin (email, password) {
    return function(dispatch){
        dispatch(login());
        axios.post("https://instagram-express-app.vercel.app/api/auth/login", {email, password})
        .then(response => {
            console.log(response.data);
            dispatch(loginSuccess(response.data))
            localStorage.setItem("token", JSON.stringify(response.data.data.token))
        })
        .catch(err => {
            console.log(err.response.data.message);
            dispatch(loginError(err.response.data.message));
        })
    }
}