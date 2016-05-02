import * as priorityActionTypes from "../constants/PriorityActionTypes";
import * as creationOptionActionTypes from '../constants/CreationOptionActionTypes'
import * as initialAttributes from "../constants/InitialAttributes";
import statsForPriorities from "../constants/StatsForPriorities";
import * as priorityValues from "../constants/PriorityValues";

const defaultState = {};

const character = (state = defaultState, action) => {

	switch(action.type) {
		case priorityActionTypes.SAVE_PRIORITIES:
			return setStats(state, action);
			break;
		case creationOptionActionTypes.PICK_METATYPE_OPTION:
			return setMetatype(state, action);
			break;
		case creationOptionActionTypes.PICK_MAGIC_OR_RESONANCE_OPTION:
			return setMagicOrResonanceOption(state, action);
			break;
		case creationOptionActionTypes.ADD_ATTRIBUTE:
			return addAttribute(state, action);
			break;
		case creationOptionActionTypes.SUBTRACT_ATTRIBUTE:
			return addAttribute(state, action);
			break;
		default:
			return state;

	}
};

const isAttributeChangeValid = (state, attributeToSet, newAttributeValue, newAvailableAttributePoints) => {
	let isValid = false;
	const changeWithinRange = attributeToSet.minValue <= newAttributeValue
		&& newAttributeValue <= attributeToSet.maxValue
		&& newAvailableAttributePoints >= 0;

	if(changeWithinRange) {
		if(isAttributeBeingIncreasedToNaturalLimit(attributeToSet, newAttributeValue)) {
			isValid = !isAnyAttributeAtNaturalLimit(state);
		} else {
			isValid = true;
		}
	}

	return isValid;
};

const isAttributeBeingIncreasedToNaturalLimit = (attributeToSet, newAttributeValue) => {
	return attributeToSet.maxValue === newAttributeValue;
}

const isAnyAttributeAtNaturalLimit = (state) => {
	let foundAttributeAtNaturalLimit = false;
	for(let key in state.attributes) {
		const attribute = state.attributes[key];
		if(attribute.key !== 'essence' && attribute.key !== 'racial') {
			if(attribute.maxValue === attribute.value) {
				foundAttributeAtNaturalLimit = true;
				break;
			}
		}
	}

	return foundAttributeAtNaturalLimit;
}

function addAttribute(state, action) {
	const valueToAdd = action.type === creationOptionActionTypes.ADD_ATTRIBUTE ? 1 : -1;
	const attributeToSet = state.attributes[action.payload.key];
	const { creation } = state;
	const isSpecialAttribute = action.payload.isSpecialAttribute;
	const availableAttributePoints = isSpecialAttribute ?
		creation.availableSpecialAttributePoints : creation.availableAttributePoints ;
	const newAttributeValue = attributeToSet.value + valueToAdd;
	const newAvailableAttributePoints = availableAttributePoints - valueToAdd;
	let newState = state;
	if(isAttributeChangeValid(state, attributeToSet, newAttributeValue, newAvailableAttributePoints)) {
		newState = setAttribute(state, action, attributeToSet, newAttributeValue);
		newState = addAttributePoint(-valueToAdd, newState, isSpecialAttribute);
	}

	return newState;
}



function addAttributePoint(pointsToAdd, state, isSpecialAttribute) {
	let creation = null;

	if(isSpecialAttribute) {

		creation = {
			...state.creation,
			availableSpecialAttributePoints: state.creation.availableSpecialAttributePoints + pointsToAdd

		}
	} else {
		creation = {
			...state.creation,
			availableAttributePoints: state.creation.availableAttributePoints + pointsToAdd

		}
	}

	return {
		...state,
		creation
	}
}

function setAttribute(state, action, attributeToSet, value) {
	let newState = {
		...state,
		attributes: {
			...state.attributes
		}
	};

	newState.attributes[action.payload.key] = {
		...attributeToSet,
		value
	};
	return newState;
}

function setMagicOrResonanceOption(state, action) {
	return {
		...state,
		attributes: {
			...state.attributes,
			...getInitialAttributesForMagic(action.payload)
		}
	};
}

function getInitialAttributesForMagic(magicType) {
	let magicAttribute = {};
	if(magicType.magic) {
		magicAttribute = {
			magic: {
				key: 'magic',
				minValue: magicType.magic,
				value: magicType.magic,
				maxValue: 6,
				isSpecialAttribute: true
			}
		};
	} else if(magicType.resonance) {
		magicAttribute = {
			resonance: {
				key: 'resonance',
				minValue: magicType.resonance,
				value: magicType.resonance,
				maxValue: 6,
				isSpecialAttribute: true
			}
		};
	}

	return magicAttribute;
}

function getInitialAttributesForMetatype(metatypeId) {
	let attributes = {};
	initialAttributes[metatypeId].forEach((attribute) => {
		attributes[attribute.key] = attribute;
	});

	return attributes;


}

function setMetatype(state, action) {
	return {
		...state,
		metatype: action.metatype.metatype,
		attributes: {
			...state.attributes,
			...getInitialAttributesForMetatype(action.metatype.id)
		},
		creation: {
			...state.creation,
			availableSpecialAttributePoints: action.metatype.specialAttributePoints
		}
	};
}

function setStats(state, action) {
	return {
		...state,
		creation: {
			availableMetatypes: statsForPriorities[action.metatypePriority].metatype,
			availableSkillPoints: statsForPriorities[action.skillsPriority].skills,
			availableResources: statsForPriorities[action.resourcesPriority].resources,
			availableMagicOrResonanceClasses: statsForPriorities[action.magicOrResonancePriority].magicOrResonance,
			availableAttributePoints: statsForPriorities[action.attributePriority].attributes
		}
	}
}

export default character;