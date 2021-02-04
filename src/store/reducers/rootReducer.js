import { combineReducers } from "redux";
import admin from "./adminReducer";
import auth from './authReducer'

export default combineReducers({
    auth : auth ,
    admin : admin
})