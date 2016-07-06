import * as priorityActionTypes from "../constants/PriorityActionTypes";
import * as creationOptionActionTypes from '../constants/CreationOptionActionTypes'
import * as qualityActionTypes from '../constants/QualityActionTypes';
import individualSkills from "../constants/Skills";
import skillGroups from "../constants/SkillGroups";
import * as skillActionTypes from "../constants/SkillActionTypes";
import modifySkill from './ModifySkillReducer';
import modifySkillGroup from './ModifySkillGroupReducer';
import addAttribute from './AddAttributeReducer';
import addQuality from './AddQualityReducer';
import filterSkill from './FilterSkillReducer';
import setMagicOrResonanceOption from './MagicOrResonanceOptionReducer';
import setMetatype from './SetMetatypeReducer';
import setStats from './SetStatsReducer';
import removeQuality from './RemoveQualityReducer';
import modifyBonusSkill from './ModifyBonusSkillReducer';

const defaultState = {
	qualities: [],
	karma: 25,

	skills: {
		individualSkills: individualSkills.skillArray,
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
		case skillActionTypes.MODIFY_BONUS_SKILL:
			return modifyBonusSkill(state, action);
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

export default character;