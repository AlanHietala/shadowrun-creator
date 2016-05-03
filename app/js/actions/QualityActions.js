import * as qualityActions from '../constants/QualityActionTypes';
import { createAction } from 'redux-actions';

export const addQuality  = createAction(qualityActions.ADD_QUALITY);
export const removeQuality = createAction(qualityActions.REMOVE_QUALITY);