import * as itemActions from '../../constants/itemActionTypes'

const wareReducer = (state, action) => {
  switch(action.type) {
  case itemActions.ADD_WARE:
    return handleAddWare(state, action)
  case itemActions.REMOVE_WARE:
    return handleRemoveWare(state, action)
  case itemActions.TOGGLE_CAPACITY_OPTION:
    return handleToggleCapacityOption(state, action)
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

  const ware = state.ware.concat([action.payload])
  return {
    ...state,
    ware,
  }
}

export default wareReducer
