import { createStore, applyMiddleware, combineReducers } from "redux";
import instaReducer from "./reducer/instaReducer";
import loginReducer from "./reducer/loginReducer";
import thunk from "redux-thunk";

const reducer = combineReducers(
    {
        signIn: instaReducer,
        login: loginReducer
    }
)

const store = createStore(reducer, applyMiddleware(thunk));

export default store;