import appReducer from './appReducer.js'
import {Data} from './listingsDataReducer.js'
import {combineReducers} from 'redux'


export default combineReducers({
    Data,
    globalState: appReducer

  
    
    
})

