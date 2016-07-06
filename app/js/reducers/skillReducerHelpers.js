const updateAvailableSkillPoints =  (state, newSkillPoints) => {

	return {
		...state,
		creation: {
			...state.creation,
			availableSkillPoints: {
				...state.creation.availableSkillPoints,
				points: newSkillPoints
			}
		}
	}
};

const updateSkill = (state, individualSkills, skillIndex, skillToModify, newValue) => {
	individualSkills[skillIndex] = {
		...skillToModify,
		points: newValue
	};

	return {
		...state,
		skills: {
			...state.skills,
			individualSkills: [...individualSkills]
		}
	};
};


module.exports = {
	updateSkill,
	updateAvailableSkillPoints

};