import { updateSkill, updateAvailableBonusSkillPoints } from './SkillReducerHelpers';

export default (state, action) => {
	const individualSkills = state.skills.individualSkills;
	const skillIndex = individualSkills.indexOf(action.payload.skill);
	const skillToModify = individualSkills[skillIndex];
	const newValue = state.creation.bonusSkills.rating;
	const newSkillPoints = state.creation.bonusSkills.count - action.payload.addValue;
	if(0 <= newSkillPoints) {

		const newState = updateSkill(state, individualSkills, skillIndex, skillToModify, newValue, true);
		return updateAvailableBonusSkillPoints(newState, newSkillPoints);

	} else {
		return state;
	}
};





