import * as actionTypes from "../constants/PriorityActionTypes";
import * as initialAttributes from "../constants/InitialAttributes";
import statsForPriorities from "../constants/StatsForPriorities";
import * as priorityValues from "../constants/PriorityValues";
const defaultState = {};

const character = (state = defaultState, action) => {

	switch(action.type) {
		case actionTypes.SAVE_PRIORITIES:
			return setStats(state, action);

	}
};

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