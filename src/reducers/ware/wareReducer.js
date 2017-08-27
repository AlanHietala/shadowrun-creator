import * as itemActions from '../../constants/itemActionTypes'

const wareReducer = (state, action) => {
  switch(action.type) {
  case itemActions.ADD_WARE:
    return handleAddWare(state, action)
  case itemActions.REMOVE_WARE:
    return handleRemoveWare(state, action)
  case itemActions.TOGGLE_CAPACITY_OPTION:
    return handleToggleCapacityOption(state, action)
  case itemActions.CHANGE_WARE_RATING:
    return handleChangeWareRating(state, action)
  case itemActions.CHANGE_WARE_CAPACITY_RATING:
    return handleChangeWareCapacityRating(state, action)
  default:
    return state
  }
}
const handleToggleCapacityOption = (state, action) => {
  const wareIndex = action.payload.wareIndex
  const capacityIndex = action.payload.capacityIndex

  const ware = [...state.ware]
  const capacityItem = ware[wareIndex].availableOptions[capacityIndex]
  capacityItem.isInstalled = !capacityItem.isInstalled

  return {
    ...state,
    ware,
  }
}

const handleChangeWareCapacityRating = (state, action) => {
  const capacityIndex = action.payload.capacityIndex
  const wareIndex = action.payload.wareIndex
  const ratingIndex = action.payload.ratingIndex

  const wareItem = state.ware[wareIndex]
  const capacityItem = wareItem.availableOptions[capacityIndex]

  const newCapacityItem = {
    ...capacityItem,
    ...capacityItem.ratings[ratingIndex],
    selectedRatingIndex: ratingIndex,
  }
  let newCapacityList = [...wareItem.availableOptions]
  newCapacityList[capacityIndex] = newCapacityItem

  const newWareItem = {
    ...wareItem,
    availableOptions: newCapacityList,
  }

  let newWareList = [...state.ware]
  newWareList[action.payload.wareIndex] = newWareItem

  return {
    ...state,
    ware: newWareList,
  }
}

const handleChangeWareRating = (state, action) => {
  let wareItem = state.ware[action.payload.wareIndex]
  const newWareItem = {
    ...wareItem,
    ...wareItem.ratings[action.payload.ratingIndex],
    selectedRatingIndex: action.payload.ratingIndex,
  }

  let newWareList = [...state.ware]
  newWareList[action.payload.wareIndex] = newWareItem

  return {
    ...state,
    ware: newWareList,
  }
}

const handleRemoveWare = (state, action) => {
  const ware = [
    ...state.ware.slice(0, action.payload),
    ...state.ware.slice(action.payload + 1),
  ]

  return {
    ...state,
    ware,
  }
}

const handleAddWare = (state, action) => {
  let addWare = action.payload
  if(action.payload.ratings) {
    addWare = {
      ...addWare,
      ...addWare.ratings[0],
      selectedRatingIndex: 0,
    }
  }
  const ware = state.ware.concat([addWare])
  return {
    ...state,
    ware,
  }
}

export default wareReducer
