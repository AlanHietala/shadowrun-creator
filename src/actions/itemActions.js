import * as itemActionTypes from '../constants/itemActionTypes'
import { createAction } from 'redux-actions'

export const addWeapon = createAction(itemActionTypes.ADD_WEAPON) 
export const removeWeapon = createAction(itemActionTypes.REMOVE_WEAPON)
export const addItem = createAction(itemActionTypes.ADD_ITEM)
export const removeItem = createAction(itemActionTypes.REMOVE_ITEM)
export const addWare = createAction(itemActionTypes.ADD_WARE)
export const removeWare = createAction(itemActionTypes.REMOVE_WARE)
