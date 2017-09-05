import { combineReducers } from 'redux'
import  priority from './priority'
import character from './character'
import visibility from './visibilityReducer'
import createItemsReducer from './items'
import { wareList } from './ware'
import { adeptPowerList } from './adept-powers'
import { routerReducer } from 'react-router-redux'
import * as itemTypes from '../constants/itemTypes'

const shadowrunApp = combineReducers({
  priority,
  character,
  wareList,
  adeptPowerList,
  visibility,
  characterWare: createItemsReducer(itemTypes.WARE),
  characterEquipment: createItemsReducer(itemTypes.EQUIPMENT),
  routing: routerReducer,
})

export default shadowrunApp
