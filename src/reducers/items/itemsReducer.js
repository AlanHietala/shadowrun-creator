import * as itemActions from '../../constants/itemActionTypes'

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


const handleChangeRating = (state, action) => {
  let item = state.items[action.payload.itemIndex]
  const newItem = {
    ...item,
    ...item.ratings[action.payload.ratingIndex],
    selectedRatingIndex: action.payload.ratingIndex,
  }

  let newList = [...state.items]
  newList[action.payload.itemIndex] = newItem

  return {
    ...state,
    items: newList,
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
