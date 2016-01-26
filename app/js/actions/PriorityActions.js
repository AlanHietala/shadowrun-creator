import * as priorityActions from '../constants/PriorityActionTypes';
import * as priorityValues from '../constants/PriorityValues';
import _ from 'lodash';
export function setMetatypePriority(priorityValue) {
	return {
		type: priorityActions.SET_METATYPE_PRIORITY,
		priority: priorityValue
	};
}

export function setAttributePriority(priorityValue) {
	return {
		type: priorityActions.SET_ATTRIBUTE_PRIORITY,
		priority: priorityValue
	};
}

export function setMagicOrResonancePriority(priorityValue) {
	return {
		type: priorityActions.SET_MAGIC_OR_RESONANCE_PRIORITY,
		priority: priorityValue
	};
}

export function setResourcesPriority(priorityValue) {
	return {
		type: priorityActions.SET_RESOURCES_PRIORITY,
		priority: priorityValue
	};
}

export function setSkillsPriority(priorityValue) {
	return {
		type: priorityActions.SET_SKILLS_PRIORITY,
		priority: priorityValue
	};
}

export function savePriorities(metatypePriority, attributePriority, magicOrResonancePriority, resourcesPriority, skillsPriority) {
	var priorityMap = {};
	priorityMap[metatypePriority] = true;
	priorityMap[attributePriority] = true;
	priorityMap[magicOrResonancePriority] = true;
	priorityMap[resourcesPriority] = true;
	priorityMap[skillsPriority] = true;

	const allPrioritiesPresent = priorityMap[priorityValues.PRIORITY_A]
			&& priorityMap[priorityValues.PRIORITY_B]
			&& priorityMap[priorityValues.PRIORITY_C]
			&& priorityMap[priorityValues.PRIORITY_D]
			&& priorityMap[priorityValues.PRIORITY_E];

	if(allPrioritiesPresent) {

		return {
			type: priorityActions.SAVE_PRIORITIES,
			metatypePriority,
			attributePriority,
			magicOrResonancePriority,
			resourcesPriority,
			skillsPriority
		};
	} else {
		return {
			type: priorityActions.ERROR_NOT_ALL_PRIORITIES_PRESENT
		}
	}
}
export function setPriorityForPriorityName(priorityName, priority) {

	let action = null;
	switch(priorityName) {
		case 'attributes':
			action = setAttributePriority(priority);
			break;
		case 'skills':
			action = setSkillsPriority(priority);
			break;
		case 'metatype':
			action = setMetatypePriority(priority);
			break;
		case 'resources':
			action = setResourcesPriority(priority);
			break;
		case 'magicOrResonance':
			action = setMagicOrResonancePriority(priority);
			break;
		default:
			break;

	}
	return action;
};
