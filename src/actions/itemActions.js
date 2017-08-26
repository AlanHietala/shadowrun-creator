import * as itemActionTypes from '../constants/itemActionTypes'
import { createAction } from 'redux-actions'

export const addWeapon = createAction(itemActionTypes.ADD_WEAPON)
export const removeWeapon = createAction(itemActionTypes.REMOVE_WEAPON)
export const selectAccessory = createAction(itemActionTypes.SELECT_ACCESSORY, (weaponIndex, accessoryPosition, accessory) => {
  return {
    weaponIndex,
    accessoryPosition,
    accessory,
  }
})
export const addItem = createAction(itemActionTypes.ADD_ITEM)
export const removeItem = createAction(itemActionTypes.REMOVE_ITEM)
export const addWare = createAction(itemActionTypes.ADD_WARE)
export const removeWare = createAction(itemActionTypes.REMOVE_WARE)
export const toggleCapacityOption = createAction(itemActionTypes.TOGGLE_CAPACITY_OPTION, (wareIndex, capacityIndex) => {
  return  {
    wareIndex,
    capacityIndex,
  }
})
