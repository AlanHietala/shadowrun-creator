import { combineReducers } from 'redux'
import  priority from './priority'
import character from './character'
import visibility from './visibilityReducer'
import { wareList } from './ware'
import equipmentList from './equipment-list'
import { adeptPowerList } from './adept-powers'
import { routerReducer } from 'react-router-redux'

const shadowrunApp = combineReducers({
  priority,
  character,
  wareList,
  equipmentList,
  adeptPowerList,
  visibility,
  routing: routerReducer,
})

export default shadowrunApp
