import * as metatypeActionTypes from "../constants/CreationOptionActionTypes";
import { createAction } from 'redux-actions';

export const selectMetatype = createAction(metatypeActionTypes.PICK_METATYPE_OPTION);