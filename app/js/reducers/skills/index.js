import * as skillActionTypes from '../../constants/skillActionTypes';
import modifyBonusSkill from './modifyBonusSkillReducer';
import modifySkillGroup from './modifySkillGroupReducer';
import skillSpecialization from './skillSpecializationReducer';
import modifySkill from './modifySkillReducer';
import filterSkill from './filterSkillReducer';

export default (state, action) => {
	switch (action.type) {
		case skillActionTypes.MODIFY_SKILL:
			return modifySkill(state, action);
			break;
		case skillActionTypes.ADD_SKILL_SPECIALIZATION:
			return skillSpecialization(state, action);
			break;
		case skillActionTypes.MODIFY_BONUS_SKILL:
			return modifyBonusSkill(state, action);
			break;
		case skillActionTypes.MODIFY_SKILL_GROUP:
			return modifySkillGroup(state, action);
			break;
		case skillActionTypes.FILTER_SKILL:
			return filterSkill(state, action);
			break;
		default:
			return state;
	}
}