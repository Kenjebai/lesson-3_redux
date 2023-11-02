import { types } from "../types";

const initialState = {
    alert: false
}

export default function alertReduser(state = initialState, action){
    switch(action.type){
        case types.ALERT_ON:
            return{...state, alert: true}
        case types.ALERT_OFF: 
            return {...state, alert: false}
        default: return state
    }
}