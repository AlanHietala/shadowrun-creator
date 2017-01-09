import * as priorityActionTypes from "../constants/priorityActionTypes";
import * as creationOptionActionTypes from '../constants/creationOptionActionTypes'
import * as qualityActionTypes from '../constants/qualityActionTypes';
import individualSkills from "../constants/skills";
import skillGroups from "../constants/skillGroups";
import * as skillActionTypes from "../constants/skillActionTypes";
import * as spellActionTypes from "../constants/spellActionTypes";
import modifySkill from './modifySkillReducer';
import modifySkillGroup from './modifySkillGroupReducer';
import addAttribute from './AddAttributeReducer';
import addQuality from './AddQualityReducer';
import filterSkill from './FilterSkillReducer';
import setMagicOrResonanceOption from './MagicOrResonanceOptionReducer';
import setMetatype from './setMetatypeReducer';
import setStats from './setStatsReducer';
import removeQuality from './removeQualityReducer';
import modifyBonusSkill from './ModifyBonusSkillReducer';
import {addSpell, removeSpell} from './spellReducers';

const defaultState = {
	qualities: [],
	karma: 25,

	skills: {
		individualSkills: individualSkills.skillArray,
		skillGroups,
		textFilter: ''
	},
	spells: []
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
		case spellActionTypes.ADD_SPELL:
			return addSpell(state, action);
		case spellActionTypes.REMOVE_SPELL:
			return removeSpell(state, action);
		default:
			return state;
	}
};

export default character;