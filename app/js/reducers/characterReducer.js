import * as priorityActionTypes from "../constants/priorityActionTypes";
import * as creationOptionActionTypes from '../constants/creationOptionActionTypes'
import * as qualityActionTypes from '../constants/qualityActionTypes';
import individualSkills from "../constants/skills";
import skillGroups from "../constants/skillGroups";
import * as skillActionTypes from "../constants/skillActionTypes";
import * as spellActionTypes from "../constants/spellActionTypes";
import skills from './skills';
import attribute from './attributes';
import quality from './quality';
import setMagicOrResonanceOption from './MagicOrResonanceOptionReducer';
import setMetatype from './setMetatypeReducer';
import setStats from './setStatsReducer';
import spells from './spells';

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

const skillActions = [
	skillActionTypes.MODIFY_SKILL,
	skillActionTypes.ADD_SKILL_SPECIALIZATION,
	skillActionTypes.MODIFY_BONUS_SKILL,
	skillActionTypes.MODIFY_SKILL_GROUP,
	skillActionTypes.FILTER_SKILL
];

const attributeActions = [
	creationOptionActionTypes.ADD_ATTRIBUTE,
	creationOptionActionTypes.SUBTRACT_ATTRIBUTE
];

const spellActions = [
	spellActionTypes.ADD_SPELL,
	spellActionTypes.REMOVE_SPELL
];

const character = (state = defaultState, action) => {

	if(skillActions.includes(action.type)) {
		return skills(state, action);
	} else if(attributeActions.includes(action.type)) {
		return attribute(state, action);
	} else if(spellActions.includes(action.type)) {
		return spells(state, action);
	} else {
		switch (action.type) {
			case priorityActionTypes.SAVE_PRIORITIES:
				return setStats(state, action);
				break;
			case creationOptionActionTypes.PICK_METATYPE_OPTION:
				return setMetatype(state, action);
				break;
			case creationOptionActionTypes.PICK_MAGIC_OR_RESONANCE_OPTION:
				return setMagicOrResonanceOption(state, action);
				break;
			case qualityActionTypes.ADD_QUALITY:
				return quality(state, action);
				break;
			case qualityActionTypes.REMOVE_QUALITY:
				return quality(state, action);
				break;

			default:
				return state;
		}
	}
};

export default character;