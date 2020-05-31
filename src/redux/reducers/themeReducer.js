import {themeInitState} from "../initState.js"

export function themeReducer(state = themeInitState, action){
    switch(action.type){
        case "TOGGLE_THEME": 
            let {theme, togglerAngle} = state 
            if(theme==="light"){theme="dark"}else{theme="light"}
            togglerAngle+=180
            return {...state, theme, togglerAngle}
        default:
            return state
    }
}