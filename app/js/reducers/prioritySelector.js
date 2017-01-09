import * as priorityActionTypes from '../constants/priorityActionTypes';
import * as priorityValues from '../constants/priorityValues';

const defaultState = {
	attributes: priorityValues.PRIORITY_NONE,
	magicOrResonance: priorityValues.PRIORITY_NONE,
	metatype: priorityValues.PRIORITY_NONE,
	resources: priorityValues.PRIORITY_NONE,
	skills: priorityValues.PRIORITY_NONE,
	saved: false,
	valid: false
};

function setAttributeUniquely(attribute, attributeValue, currentState) {
	let newState = {
		...currentState
	};

	for(let key in newState) {
		if (newState[key] !== priorityValues.PRIORITY_NONE
				&& newState[key] === attributeValue) {
			newState[key] = priorityValues.PRIORITY_NONE;
		}
	}

	newState[attribute] = attributeValue;

	newState.valid = (newState.attributes !== priorityValues.PRIORITY_NONE
		&& newState.magicOrResonance !== priorityValues.PRIORITY_NONE
		&& newState.metatype !== priorityValues.PRIORITY_NONE
		&& newState.resources !== priorityValues.PRIORITY_NONE
		&& newState.skills !== priorityValues.PRIORITY_NONE);

	return newState;

}

const priority = (state = defaultState, action) => {
	switch (action.type) {
		case priorityActionTypes.SET_ATTRIBUTE_PRIORITY:
			return setAttributeUniquely('attributes', action.payload, state);
			break;
		case priorityActionTypes.SET_MAGIC_OR_RESONANCE_PRIORITY:
			return setAttributeUniquely('magicOrResonance', action.payload, state);
			break;
		case priorityActionTypes.SET_METATYPE_PRIORITY:
			return setAttributeUniquely('metatype', action.payload, state);
			break;
		case priorityActionTypes.SET_RESOURCES_PRIORITY:
			return setAttributeUniquely('resources', action.payload, state);
			break;
		case priorityActionTypes.SET_SKILLS_PRIORITY:
			return setAttributeUniquely('skills', action.payload, state);
			break;
		default:
			return state;

	}
};


export default priority;