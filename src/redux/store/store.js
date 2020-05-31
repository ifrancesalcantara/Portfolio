import {combineReducers, createStore} from "redux"
import {themeReducer} from "../reducers/themeReducer"

const reducers = combineReducers({
    theme: themeReducer
})

export default createStore(reducers)
