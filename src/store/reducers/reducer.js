import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import UserReducer from './userReducer'
import LoaderReducer from './LoaderReducer'
const rootReducer = combineReducers({
  loginReducer,
  UserReducer,
  LoaderReducer,
})

export default rootReducer
