import * as itemActions from '../../constants/itemActionTypes'
import {changeRating, changeCapacityRating, toggleCapacityOption } from '../itemHelpers'

const itemsReducer = (state, action) => {
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

  default:
    return state
  }
}

const handleChangeCount = (state, action) => {
  let item = state.items[action.payload.itemIndex]
  const newItem = {
    ...item,
    count: action.payload.count,
  }

  let newList = [...state.items]
  newList[action.payload.itemIndex] = newItem

  return {
    ...state,
    items: newList,
  }
}

const handleToggleCapacityOption = (state, action) => {
  const itemIndex = action.payload.itemIndex
  const capacityIndex = action.payload.capacityIndex

  const items = toggleCapacityOption(state.items, itemIndex, capacityIndex)

  return {
    ...state,
    items,
  }
}


const handleChangeItemCapacityRating = (state, action) => {
  const capacityIndex = action.payload.capacityIndex
  const itemIndex = action.payload.itemIndex
  const ratingIndex = action.payload.ratingIndex

  const items = changeCapacityRating(state.items, itemIndex, capacityIndex, ratingIndex)

  return {
    ...state,
    items,
  }
}

const handleChangeRating = (state, action) => {
  const itemIndex = action.payload.itemIndex
  const ratingIndex = action.payload.ratingIndex

  const items = changeRating(state.items, itemIndex, ratingIndex)

  return {
    ...state,
    items,
  }
}

const handleRemoveItem = (state, action) => {
  const items = [
    ...state.items.slice(0, action.payload),
    ...state.items.slice(action.payload + 1),
  ]

  return {
    ...state,
    items,
  }
}

const handleAddItem = (state, action) => {
  const items = state.items.concat([action.payload])
  return {
    ...state,
    items,
  }
}

export default itemsReducer
