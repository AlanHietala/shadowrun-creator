import { updateAvailableSkillPoints, updateSkill } from './SkillReducerHelpers';

export default (state, action) => {
	const individualSkills = state.skills.individualSkills;
	const skillIndex = individualSkills.indexOf(action.payload.skill);
	const skillToModify = individualSkills[skillIndex];
	const newValue = skillToModify.points + action.payload.addValue;
	const newSkillPoints = state.creation.availableSkillPoints.points - action.payload.addValue;
	if(0 <= newValue && newValue <= 6 && 0 <= newSkillPoints) {

		const newState = updateSkill(state, individualSkills, skillIndex, skillToModify, newValue);
		return updateAvailableSkillPoints(newState, newSkillPoints);

	} else {
		return state;
	}
};


