import * as metatypeActionTypes from "../constants/creationOptionActionTypes"
import { createAction } from 'redux-actions'

export const selectMetatype = createAction(metatypeActionTypes.PICK_METATYPE_OPTION)
