import * as priorityActionTypes from "../constants/PriorityActionTypes";
import * as creationOptionActionTypes from '../constants/CreationOptionActionTypes';
import * as priorityValues from '../constants/PriorityValues';
const defaultState = {
	priorityVisible: true,
	metatypeVisible: false,
	atributesVisible: false,
	magicTypesVisible: false
}
const visibility = (state = defaultState, action) => {
	switch(action.type) {
		case priorityActionTypes.SAVE_PRIORITIES:
			if(action.payload.magicOrResonancePriority === priorityValues.PRIORITY_E){
				return {
					...state,
					metatypeVisible: true,
					magicTypesVisible: false
				}
			} else {
				return {
					...state,
					metatypeVisible: true,
					magicTypesVisible: true
				}
			}
			break;
		case creationOptionActionTypes.PICK_METATYPE_OPTION:
			if(state.magicTypesVisible) {
				return {
					...state,
					metatypeVisible: false
				}

			} else {
				return {
					...state,
					metatypeVisible: false,
					attributesVisible: true
				}
			}
			break;
		case creationOptionActionTypes.PICK_MAGIC_OR_RESONANCE_OPTION:
			if(state.metatypeVisible) {
				return {
					...state,
					magicTypesVisible: false
				}

			} else {
				return {
					...state,
					magicTypesVisible: false,
					attributesVisible: true
				}
			}
			break;
		default:
			return state;
	}

};

export default visibility;