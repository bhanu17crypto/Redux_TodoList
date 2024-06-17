import {combineReducers,legacy_createStore} from 'redux'
import { reducer as todoReducer} from './reducer/TodoReducer'

const rootReducer = combineReducers({
    todoReducer
})

export const store = legacy_createStore(rootReducer)