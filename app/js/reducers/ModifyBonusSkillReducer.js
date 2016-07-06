export default (state, action) => {

};


const updateAvailableBonusSkillPoints = (state, newBonusSkillPoints) => {
	return {
		...state,
		creation: {
			...state.creation,
			bonusSkills: {
				...state.creation.availableSkillPoints,
				count: newBonusSkillPoints
			}
		}
	}
};



