import { types } from "../types";

const initialState = {
    tables: []
}

export default function tableReducer(state = initialState, action){
    switch(action.type){
        case types.TABLE_FILL:
            return{...state, tables: action.payload}
        default: return state
    }
}