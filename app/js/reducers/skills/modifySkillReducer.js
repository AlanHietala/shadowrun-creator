import { updateAvailableSkillPoints, updateAvailableBonusSkillPoints, updateSkill } from './skillReducerHelpers'

export default (state, action) => {
  const individualSkills = state.skills.individualSkills
  const skillIndex = individualSkills.indexOf(action.payload.skill)
  const skillToModify = individualSkills[skillIndex]
  const newValue = skillToModify.points + action.payload.addValue
  const newSkillPoints = state.creation.availableSkillPoints.points - action.payload.addValue
  const isBonus = skillToModify.isBonus

  let startingBonusValue = -1

  if(state.creation.bonusSkills) {
    startingBonusValue = state.creation.bonusSkills.rating
  }

  if(isBonus && newValue < startingBonusValue) {
    return removeBonusSkill(state, individualSkills, skillIndex, skillToModify)

  } else if(0 <= newValue && newValue <= 6 && 0 <= newSkillPoints) {
    const newState = updateSkill(state, individualSkills, skillIndex, skillToModify, newValue, isBonus)
    return updateAvailableSkillPoints(newState, newSkillPoints)

  } else {
    return state
  }


}

const removeBonusSkill = (state, individualSkills, skillIndex, skillToModify) => {
  const newBonusSkillPoints = state.creation.bonusSkills.count + 1
  let newState = updateSkill(state, individualSkills, skillIndex, skillToModify, 0, false)
  return updateAvailableBonusSkillPoints(newState, newBonusSkillPoints)
}


