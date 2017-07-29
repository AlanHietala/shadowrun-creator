import * as itemActions from '../../constants/itemActionTypes'

const wareReducer = (state, action) => {
  switch(action.type) {
  case itemActions.ADD_WARE:
    return handleAddWare(state, action)
  case itemActions.REMOVE_WARE:
    return handleRemoveWare(state, action)
  default:
    return state
  }
}

function handleRemoveWare(state, action) {
  const ware = [
    ...state.ware.slice(0, action.payload),
    ...state.ware.slice(action.payload + 1)
  ]

  return {
    ...state,
    ware
  }
}

function handleAddWare(state, action) {

  const ware = state.ware.concat([action.payload])
  return {
    ...state,
    ware
  }
}

export default wareReducer
