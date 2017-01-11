import * as skillActionTypes from  '../../constants/skillActionTypes';
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
	const specializations = state.skills.individualSkills[action.payload.skillIndex].specializations;
	let selectedSpecializations = state.skills.individualSkills[action.payload.skillIndex].selectedSpecializations;
	const specializationToAdd = specializations[action.payload.specializationIndex];

	let newSelectedSpecializations = [...selectedSpecializations];
	newSelectedSpecializations.push(specializationToAdd);


	selectedSpecializations = [
		...newSelectedSpecializations
	]
	state.skills.individualSkills[action.payload.skillIndex].selectedSpecializations = selectedSpecializations;

	let newIndividualSkills = [...state.skills.individualSkills];
	newIndividualSkills[action.payload.skillIndex].selectedSpecializations = selectedSpecializations;
	return {
		...state,
		skills: {
			...state.skills,
			individualSkills: newIndividualSkills
		}
	};


}

function removeSkillSpecialization(state, action) {
	return state;
}
