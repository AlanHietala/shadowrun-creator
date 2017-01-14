import * as skillActionTypes from  '../../constants/skillActionTypes';
import {updateAvailableSkillPoints} from './skillReducerHelpers';

export default (state, action) => {
	switch(action.type) {
		case skillActionTypes.ADD_SKILL_SPECIALIZATION:
			return addSkillSpecialization(state, action);
			break;
		case skillActionTypes.REMOVE_SKILL_SPECIALIZATION:
			return removeSkillSpecialization(state, action);
		default:
			return state;
	}
}

function addSkillSpecialization(state, action) {
	const newSkillPoints = state.creation.availableSkillPoints.points - 2;
	const selectedSkill = state.skills.individualSkills[action.payload.skillIndex];
	console.log(newSkillPoints, selectedSkill.points)
	if(newSkillPoints > -1 && selectedSkill.points > 0) {

		const specializations = selectedSkill.specializations;
		let selectedSpecializations = selectedSkill.selectedSpecializations;
		const specializationToAdd = specializations[action.payload.specializationIndex];

		let newSelectedSpecializations = [...selectedSpecializations];
		newSelectedSpecializations.push(specializationToAdd);

		selectedSkill.selectedSpecializations = newSelectedSpecializations;

		let newIndividualSkills = [...state.skills.individualSkills];
		newIndividualSkills[action.payload.skillIndex].selectedSpecializations = newSelectedSpecializations;
		console.log(selectedSpecializations)
		const newState =  {
			...state,
			skills: {
				...state.skills,
				individualSkills: newIndividualSkills
			}
		};

		return updateAvailableSkillPoints(newState, newSkillPoints);
	} else {
		return state;
	}


}

function removeSkillSpecialization(state, action) {
	return state;
}
