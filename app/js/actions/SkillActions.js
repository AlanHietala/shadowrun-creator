import * as skillActions from '../constants/SkillActionTypes';
import { createAction } from 'redux-actions';

export const modifySkill  = createAction(skillActions.MODIFY_SKILL, (skill, addValue) => {
	return {
		skill,
		addValue
	}
});
export const modifySkillGroup = createAction(skillActions.MODIFY_SKILL_GROUP, (skillGroup, addValue) => {
	return {
		skillGroup,
		addValue
	}
});

export const filterSkill = createAction(skillActions.FILTER_SKILL);
