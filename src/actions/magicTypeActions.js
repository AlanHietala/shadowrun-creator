import * as creationActionTypes from "../constants/creationOptionActionTypes"
import { createAction } from 'redux-actions'

export const selectMagicType = createAction(creationActionTypes.PICK_MAGIC_OR_RESONANCE_OPTION)
