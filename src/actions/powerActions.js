
import * as powerActions from '../constants/adeptPowerActionTypes'
import { createAction } from 'redux-actions'

export const addPower = createAction(powerActions.ADD_POWER)
export const removePower = createAction(powerActions.REMOVE_POWER)
export const increasePower = createAction(powerActions.INCREASE_POWER)
export const decreasePower = createAction(powerActions.DECREASE_POWER)
