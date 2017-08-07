import * as itemActions from '../../constants/itemActionTypes'

const weaponsReducer = (state, action) => {
  switch(action.type) {
  case itemActions.ADD_WEAPON:
    return handleAddItem(state, action)

  case itemActions.REMOVE_WEAPON:
    return handleRemoveItem(state, action)

  default:
    return state
  }
}

function handleRemoveItem(state, action) {
  const weapons = [
    ...state.weapons.slice(0, action.payload),
    ...state.weapons.slice(action.payload + 1),
  ]

  return {
    ...state,
    weapons,
  }
}

function handleAddItem(state, action) {

  const weapons = state.weapons.concat([action.payload])
  return {
    ...state,
    weapons,
  }
}

export default weaponsReducer
