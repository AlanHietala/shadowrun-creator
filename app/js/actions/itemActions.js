import * as itemActionTypes from '../constants/itemActionTypes';
import { createAction } from 'redux-actions';

export const addItem = createAction(itemActionTypes.ADD_ITEM);
export const removeItem = createAction(itemActionTypes.REMOVE_ITEM);
