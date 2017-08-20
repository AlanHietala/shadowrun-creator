import * as itemActions from '../../constants/itemActionTypes'

const weaponsReducer = (state, action) => {
  switch(action.type) {
  case itemActions.ADD_WEAPON:
    return handleAddItem(state, action)

  case itemActions.REMOVE_WEAPON:
    return handleRemoveItem(state, action)
  case itemActions.SELECT_ACCESSORY:
    return handleSelectAccessory(state, action)
  default:
    return state
  }
}

function handleSelectAccessory(state, action) {

  const newWeapons = [
    ...state.weapons,
  ]
  let newAccessories = {
    ...state.weapons[action.payload.weaponIndex].accessories,
  }

  newAccessories[action.payload.accessoryPosition] = action.payload.accessory
  newWeapons[action.payload.weaponIndex] = {
    ...state.weapons[action.payload.weaponIndex],
    accessories: newAccessories,
  }

  return {...state,
    weapons: newWeapons,
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
