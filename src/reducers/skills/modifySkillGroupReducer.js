export default (state, action) => {
  const skillGroups = state.skills.skillGroups
  const skillGroupIndex = skillGroups.indexOf(action.payload.skillGroup)
  const skillGroupToModify = skillGroups[skillGroupIndex]
  const newValue = skillGroupToModify.points + action.payload.addValue
  const newSkillGroupPoints = state.creation.availableSkillPoints.groupPoints - action.payload.addValue
  if(0 <= newValue && newValue <= 6 && 0 <= newSkillGroupPoints) {
    skillGroups[skillGroupIndex] = {
      ...skillGroupToModify,
      points: newValue,
    }

    return {
      ...state,
      creation: {
        ...state.creation,
        availableSkillPoints: {
          ...state.creation.availableSkillPoints,
          groupPoints: newSkillGroupPoints,
        },
      },
      skills: {
        ...state.skills,
        skillGroups: [...skillGroups],
      },
    }

  } else {
    return state
  }
}