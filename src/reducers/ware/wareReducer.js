import * as itemActions from '../../constants/itemActionTypes'
import {STANDARD} from '../../constants/ware/wareGrades'
import {changeRating, changeCapacityRating, toggleCapacityOption } from '../itemHelpers'

const getInitialState = () => {
  return []
}
const wareReducer = (state = getInitialState(), action) => {
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
  case itemActions.CHANGE_WARE_GRADE:
    return handleChangeWareGrade(state, action)
  default:
    return state
  }
}

const handleChangeWareGrade = (state, action) => {
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

const handleToggleCapacityOption = (state, action) => {
  const wareIndex = action.payload.wareIndex
  const capacityIndex = action.payload.capacityIndex

  const ware = toggleCapacityOption(state, wareIndex, capacityIndex)

  return ware
}

const handleChangeWareCapacityRating = (state, action) => {
  const capacityIndex = action.payload.capacityIndex
  const wareIndex = action.payload.wareIndex
  const ratingIndex = action.payload.ratingIndex

  const ware = changeCapacityRating(state, wareIndex, capacityIndex, ratingIndex)

  return ware
}

const handleChangeWareRating = (state, action) => {
  let wareIndex = action.payload.wareIndex
  let ratingIndex = action.payload.ratingIndex

  const ware = changeRating(state, wareIndex, ratingIndex)

  return ware
}

const handleRemoveWare = (state, action) => {
  const ware = [
    ...state.slice(0, action.payload),
    ...state.slice(action.payload + 1),
  ]

  return ware
}

const handleAddWare = (state, action) => {
  let addWare = action.payload
  if(action.payload.ratings) {
    addWare = {
      ...addWare,
      ...addWare.ratings[0],
      selectedRatingIndex: 0,
      grade: STANDARD,
    }
  }
  const ware = state.concat([addWare])
  return ware
}

export default wareReducer
