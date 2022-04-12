import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {messagesReducer} from "./messagesReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    messages: messagesReducer
})