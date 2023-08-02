import * as type from "./actionType";
import axios from "axios"

export const signIn = (data) => {
    return{
        type:type.SIGN_START,
        payload: data
    }
}

export const signSuccess = (data) => {
    return {
        type: type.SIGN_SUCCESS,
        payload: data
    }
}

export const signError = (err) => {
    return {
        type: type.SIGN_ERROR,
        payload: err
    }
}

export const fetchSignIn = (name, email, password) => {
    console.log("fetching")
    return function(dispatch){
        dispatch(signIn())
        axios.post("https://instagram-express-app.vercel.app/api/auth/signup", {name, email, password})
        .then(response => {
            console.log(response.data);
            dispatch(signSuccess(response.data));
            // localStorage.setItem("token", response.data.token);
        })
        .catch(err => {
            console.log(err.response.data.message);
            dispatch(signError(err.response.data.message));
        })
    }
}