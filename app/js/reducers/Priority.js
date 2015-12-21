import * as priorityActionTypes from '../constants/PriorityActionTypes';
import * as priorityValues from '../constants/PriorityValues';

const defaultState = {
	attribute: priorityValues.PRIORITY_NONE,
	magicOrResonance: priorityValues.PRIORITY_NONE,
	metatype: priorityValues.PRIORITY_NONE,
	resources: priorityValues.PRIORITY_NONE,
	skills: priorityValues.PRIORITY_NONE,
	saved: false,
  valid: false
};

const isAddPriorityValid = (action) => {

};

const handleSavePriorities = (action) => {
  if(isAddPriorityValid(action)) {

  } else {

  }

}

const priority = (state = defaultState, action) => {
	switch (action.type) {
		case priorityActionTypes.SET_ATTRIBUTE_PRIORITY:

			break;
		case priorityActionTypes.SET_MAGIC_OR_RESONANCE_PRIORITY:
			break;
		case priorityActionTypes.SET_METATYPE_PRIORITY:
			break;
		case priorityActionTypes.SET_RESOURCES_PRIORITY:
			break;

		case priorityActionTypes.SET_SKILLS_PRIORITY:
			break;
		case priorityActionTypes.SAVE_PRIORITIES:
			return handleSavePriorities(action);
			break;
		default:
			return state;

	}
};


export default priority;