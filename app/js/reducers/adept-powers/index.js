import * as adeptPowerActionTypes from '../../constants/adeptPowerActionTypes'

export default (state, action) => {
  switch(action.type) {
  case adeptPowerActionTypes.ADD_POWER:
    return addPower(state, action)
    break
  case adeptPowerActionTypes.REMOVE_POWER:
    return removePower(state, action)

  default:
    return state
  }
}

const removePower = (state, action) => {

}

const addPower = (state, action) => {
  const power = action.payload
  if(canAddPower()) {

  } else {
    return state
  }
}

const canAddPower = (state, power) => {
  const newPowerPoints = state.powerPoints - power.cost
  return newPowerPoints >= 0
}