import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";
import tableReducer from "./tableReducer";
import alertReduser from "./alertReduser";

export const rootReducer = combineReducers({
    preloaderReducer,
    tableReducer, 
    alertReduser
})