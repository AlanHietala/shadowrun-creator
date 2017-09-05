import * as itemActions from '../../constants/itemActionTypes'
import {changeRating, changeCapacityRating, toggleCapacityOption } from '../itemHelpers'

const getDefaultState = () => []

export const itemsReducer = (state = getDefaultState(), action, itemType) => {
  if (action && action.payload && itemType !== action.payload.itemType) {
    return state
  }

  switch(action.type) {
  case itemActions.ADD_ITEM:
    return handleAddItem(state, action)

  case itemActions.REMOVE_ITEM:
    return handleRemoveItem(state, action)

  case itemActions.CHANGE_ITEM_RATING:
    return handleChangeRating(state, action)

  case itemActions.CHANGE_ITEM_COUNT:
    return handleChangeCount(state, action)

  case itemActions.TOGGLE_ITEM_CAPACITY_OPTION:
    return handleToggleCapacityOption(state, action)

  case itemActions.CHANGE_ITEM_CAPACITY_RATING:
    return handleChangeItemCapacityRating(state, action)

  case itemActions.CHANGE_ITEM_GRADE:
    return handleChangeItemGrade(state, action)

  default:
    return state
  }
}
const handleChangeItemGrade = (state, action) => {
  const { grade, wareIndex } = action.payload
  const wareItem = state[wareIndex]
  const newWareItem = {
    ...wareItem,
    grade,
  }
  let newWareList = [...state]
  newWareList[wareIndex] = newWareItem
  return newWareList
}

const handleChangeCount = (state, action) => {
  let item = state[action.payload.itemIndex]
  const newItem = {
    ...item,
    count: action.payload.count,
  }

  let newList = [...state]
  newList[action.payload.itemIndex] = newItem

  return newList
}

const handleToggleCapacityOption = (state, action) => {
  const itemIndex = action.payload.itemIndex
  const capacityIndex = action.payload.capacityIndex

  const items = toggleCapacityOption(state, itemIndex, capacityIndex)

  return items
}


const handleChangeItemCapacityRating = (state, action) => {
  const capacityIndex = action.payload.capacityIndex
  const itemIndex = action.payload.itemIndex
  const ratingIndex = action.payload.ratingIndex

  const items = changeCapacityRating(state, itemIndex, capacityIndex, ratingIndex)

  return items
}

const handleChangeRating = (state, action) => {
  const itemIndex = action.payload.itemIndex
  const ratingIndex = action.payload.ratingIndex

  const items = changeRating(state, itemIndex, ratingIndex)

  return items
}

const handleRemoveItem = (state, action) => {
  const items = [
    ...state.slice(0, action.payload.item),
    ...state.slice(action.payload.item + 1),
  ]

  return items
}

const handleAddItem = (state, action) => {
  const items = state.concat([action.payload.item])
  return items
}

const createItemsReducer = itemType => (state, action) => itemsReducer(state, action, itemType)

export default createItemsReducer
