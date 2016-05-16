import * as priorityActionTypes from "../constants/PriorityActionTypes";
import * as creationOptionActionTypes from '../constants/CreationOptionActionTypes'
import * as initialAttributes from "../constants/InitialAttributes";
import statsForPriorities from "../constants/StatsForPriorities";
import * as qualityActionTypes from '../constants/QualityActionTypes';
import individualSkills from "../constants/Skills";
import skillGroups from "../constants/SkillGroups";
import * as skillActionTypes from "../constants/SkillActionTypes";

const defaultState = {
	qualities: [],
	karma: 25,

	skills: {
		individualSkills,
		skillGroups,
		textFilter: ''
	}
};

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
		case qualityActionTypes.ADD_QUALITY:
			return addQuality(state, action);
			break;
		case qualityActionTypes.REMOVE_QUALITY:
			return removeQuality(state, action);
			break;
		case skillActionTypes.MODIFY_SKILL:
			return modifySkill(state, action);
			break;
		case skillActionTypes.MODIFY_SKILL_GROUP:
			return modifySkillGroup(state, action);
			break;
		case skillActionTypes.FILTER_SKILL:
			return filterSkill(state, action);
		default:
			return state;

	}
};

const filterSkill = (state, action) => {
	return {
		state,
		skills: {
			...state.skills,
				textFilter: action.payload
		}
	}
}

const modifySkill = (state, action) => {
	const individualSkills = state.skills.individualSkills;
	const skillIndex = individualSkills.indexOf(action.payload.skill);
	const skillToModify = individualSkills[skillIndex];
	const newValue = skillToModify.points + action.payload.addValue;
	if(0 <= newValue && newValue <= 6) {
		individualSkills[skillIndex] = {
		...skillToModify,
			points: newValue
		};

		return {
			...state,
			skills: {
				...state.skills,
				individualSkills: [...individualSkills]
			}
		};

	} else {
		return state;
	}

};

const addQuality = (state, action) => {
	const qualityToAddCost = action.payload.karmaCost;
	const karma = state.karma;
	const newKarma = karma - qualityToAddCost;

	if(0 <= newKarma && newKarma <= 50) {
		const qualities = state.qualities.concat([action.payload]);

		return {
			...state,
			qualities,
			karma: newKarma
		};
	} else {
		return state;
	}
}

const removeQuality = (state, action) => {
	const qualityToRemoveCost = state.qualities[action.payload].karmaCost;
	const karma = state.karma;
	const qualities = [
		...state.qualities.slice(0, action.payload),
		...state.qualities.slice(action.payload + 1)
	];
	return {
		...state,
		qualities,
		karma: karma + qualityToRemoveCost
	};
}

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
};

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
		metatype: action.payload.metatype,
		attributes: {
			...state.attributes,
			...getInitialAttributesForMetatype(action.payload.id)
		},
		creation: {
			...state.creation,
			availableSpecialAttributePoints: action.payload.specialAttributePoints
		}
	};
}

function setStats(state, action) {
	return {
		...state,
		creation: {
			availableMetatypes: statsForPriorities[action.payload.metatypePriority].metatype,
			availableSkillPoints: statsForPriorities[action.payload.skillsPriority].skills,
			availableResources: statsForPriorities[action.payload.resourcesPriority].resources,
			availableMagicOrResonanceClasses: statsForPriorities[action.payload.magicOrResonancePriority].magicOrResonance,
			availableAttributePoints: statsForPriorities[action.payload.attributePriority].attributes
		}
	}
}

export default character;