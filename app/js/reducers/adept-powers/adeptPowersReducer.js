import * as adeptPowerActionTypes from '../../constants/adeptPowerActionTypes'

export default (state, action) => {
  switch(action.type) {
  case adeptPowerActionTypes.ADD_POWER:
    return addPower(state, action)
    break
  case adeptPowerActionTypes.REMOVE_POWER:
    return removePower(state, action)
    case adeptPowerActionTypes.INCREASE_POWER:
      return updatePower(state, action, 1)
    case adeptPowerActionTypes.DECREASE_POWER:
      return updatePower(state, action, -1)

  default:
    return state
  }
}

const updatePower = (state, action, value) => {
  const adeptPower = state.adeptPowers[action.payload]
  const newAdeptPower = {
    ...adeptPower,
    level: adeptPower.level + value
  }

  let adeptPowers = [...state.adeptPowers]
  adeptPowers[action.payload] = newAdeptPower

  return {
    ...state,
    adeptPowers
  }
}

const removePower = (state, action) => {
  const removeIndex = action.payload
  const adeptPowers = state.adeptPowers.slice(0, removeIndex)
    .concat(state.adeptPowers.slice(removeIndex + 1))

  return {
    ...state,
    adeptPowers
  }
}

const addPower = (state, action) => {
  const power = action.payload
  if(canAddPower()) {
    state.adeptPowers.concat([{...power, level: 1}])
  } else {
    return state
  }
}

const canAddPower = (state, power) => {
  const usedPowerPoints = state.adeptPowers.reduce((sum, addedPower) => addedPower.level * addedPower.cost, 0)
  const magicRating = state.attributes.magic.value
  const canAddPower = !isPowerAdded(state, power) && magicRating >= usedPowerPoints + power.cost
  return canAddPower
}

const isPowerAdded = (state, power) => !!state.adeptPowers.find(addedPower => addedPower.key === power.key)
