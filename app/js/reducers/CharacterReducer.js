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
			return subtractAttribute(state, action);
			break;
		default:
			return state;

	}
};

function addAttribute(state, action) {
	const attributeToSet = state.attributes[action.payload.key];
	let newState = state;
	if(attributeToSet.value < attributeToSet.maxValue
			&& state.creation.availableAttributePoints > 0) {
		let value = attributeToSet.value + 1;
		newState = setAttribute(state, action, attributeToSet, value);
		newState = subtractAttributePoint(newState);
	}

	return newState;
}

function subtractAttribute(state, action) {
	const attributeToSet = state.attributes[action.payload.key];
	let newState = state;
	if(attributeToSet.value > attributeToSet.minValue) {
		let value = attributeToSet.value - 1;
		newState = setAttribute(state, action, attributeToSet, value);
		newState = addAttributePoint(newState);

	}

	return newState;
}

function subtractAttributePoint(state) {
	return {
		...state,
		creation: {
		...state.creation,
		availableAttributePoints: state.creation.availableAttributePoints - 1

		}
	}
}

function addAttributePoint(state) {
	return {
		...state,
		creation: {
			...state.creation,
			availableAttributePoints: state.creation.availableAttributePoints + 1

		}
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
				maxValue: 6
			}
		};
	} else if(magicType.resonance) {
		magicAttribute = {
			resonance: {
				key: 'resonance',
				minValue: magicType.resonance,
				value: magicType.resonance,
				maxValue: 6
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