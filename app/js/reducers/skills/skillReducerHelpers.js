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

const updateSkill = (state, individualSkills, skillIndex, skillToModify, newValue, isBonus) => {
	individualSkills[skillIndex] = {
		...skillToModify,
		points: newValue,
		isBonus
	};

	return {
		...state,
		skills: {
			...state.skills,
			individualSkills: [...individualSkills]
		}
	};
};

const updateAvailableBonusSkillPoints = (state, newBonusSkillPoints) => {
	return {
		...state,
		creation: {
			...state.creation,
			bonusSkills: {
				...state.creation.bonusSkills,
				count: newBonusSkillPoints
			}
		}
	}
};

module.exports = {
	updateSkill,
	updateAvailableSkillPoints,
	updateAvailableBonusSkillPoints

};