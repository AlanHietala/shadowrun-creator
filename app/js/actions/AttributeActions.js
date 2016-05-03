import * as creationActionTypes from "../constants/CreationOptionActionTypes";
import { createAction } from 'redux-actions';

export const addAttribute = createAction(creationActionTypes.ADD_ATTRIBUTE);
export const subtractAttribute = createAction(creationActionTypes.SUBTRACT_ATTRIBUTE);
