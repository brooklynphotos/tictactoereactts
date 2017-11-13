import { combineReducers } from 'redux'
import gameUpdate from './gameUpdate'
import playerStatus from './playerStatus'
import navigation from './navigation'

// this in effect is the app state
const todoApp = combineReducers({
    gameUpdate,
    navigation,
    playerStatus
}); 
  
export default todoApp