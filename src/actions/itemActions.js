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
export const addItem = createAction(itemActionTypes.ADD_ITEM, (item, itemType) => {
  return {
    item,
    itemType,
  }
})
export const removeItem = createAction(itemActionTypes.REMOVE_ITEM, (item, itemType) => {
  return {
    item,
    itemType,
  }
})

export const changeItemRating = createAction(itemActionTypes.CHANGE_ITEM_RATING, (itemIndex, ratingIndex, itemType) => {
  return {
    itemIndex,
    ratingIndex,
    itemType,
  }
})

export const toggleItemCapacityOption = createAction(itemActionTypes.TOGGLE_ITEM_CAPACITY_OPTION, (itemIndex, capacityIndex, itemType) => {
  return  {
    itemIndex,
    capacityIndex,
    itemType,
  }
})

export const changeCount = createAction(itemActionTypes.CHANGE_ITEM_COUNT, (itemIndex, count, itemType) => {
  return {
    itemIndex,
    count,
    itemType,
  }
})
export const changeItemGrade = createAction(itemActionTypes.CHANGE_ITEM_GRADE, (itemIndex, grade, itemType) => {
  return {
    itemIndex,
    grade,
    itemType,
  }
})

export const changeItemCapacityRating = createAction(itemActionTypes.CHANGE_ITEM_CAPACITY_RATING, (itemIndex, capacityIndex, ratingIndex, itemType) => {
  return {
    itemIndex,
    capacityIndex,
    ratingIndex,
    itemType,
  }
})

export const addWare = createAction(itemActionTypes.ADD_WARE)
export const removeWare = createAction(itemActionTypes.REMOVE_WARE)
export const toggleCapacityOption = createAction(itemActionTypes.TOGGLE_CAPACITY_OPTION, (wareIndex, capacityIndex) => {
  return  {
    wareIndex,
    capacityIndex,
  }
})

export const changeWareRating = createAction(itemActionTypes.CHANGE_WARE_RATING, (wareIndex, ratingIndex) => {
  return {
    wareIndex,
    ratingIndex,
  }
})

export const changeWareCapacityRating = createAction(itemActionTypes.CHANGE_WARE_CAPACITY_RATING, (wareIndex, capacityIndex, ratingIndex) => {
  return {
    wareIndex,
    capacityIndex,
    ratingIndex,
  }
})

export const changeWareGrade = createAction(itemActionTypes.CHANGE_WARE_GRADE, (wareIndex, grade) => {
  return {
    wareIndex,
    grade,
  }
})
