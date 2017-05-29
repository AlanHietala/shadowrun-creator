import * as skillActionTypes from  '../../constants/skillActionTypes'
import {updateAvailableSkillPoints} from './skillReducerHelpers'

export default (state, action) => {
  switch(action.type) {
  case skillActionTypes.ADD_SKILL_SPECIALIZATION:
    return addSkillSpecialization(state, action)

  case skillActionTypes.REMOVE_SKILL_SPECIALIZATION:
    return removeSkillSpecialization(state, action)
  default:
    return state
  }
}

function isSkillAddedAlready(existingSpecializations, specializationToAdd) {
  return existingSpecializations.indexOf(specializationToAdd) > -1
}

function addSkillSpecialization(state, action) {
  const newSkillPoints = state.creation.availableSkillPoints.points - 2
  const selectedSkill = state.skills.individualSkills[action.payload.skillIndex]

  const specializations = selectedSkill.specializations
  const specializationToAdd = specializations[action.payload.specializationIndex]
  const isNotAddedAlready = !isSkillAddedAlready(selectedSkill.selectedSpecializations, specializationToAdd)

  if(newSkillPoints > -1 && selectedSkill.points > 0 && isNotAddedAlready) {

    let selectedSpecializations = selectedSkill.selectedSpecializations
    let newSelectedSpecializations = [...selectedSpecializations]
    newSelectedSpecializations.push(specializationToAdd)
    return createNewSkillState(selectedSkill, newSelectedSpecializations, newSkillPoints, state, action)
  } else {
    return state
  }
}

function removeSkillSpecialization(state, action) {
  const newSkillPoints = state.creation.availableSkillPoints.points + 2
  const selectedSkill = state.skills.individualSkills[action.payload.skillIndex]

  const specializationToRemoveIndex = action.payload.specializationIndex

  let selectedSpecializations = selectedSkill.selectedSpecializations
  let newSelectedSpecializations = [...selectedSpecializations.slice(0, specializationToRemoveIndex)
		, ...selectedSpecializations.slice(specializationToRemoveIndex + 1)]

  return createNewSkillState(selectedSkill, newSelectedSpecializations, newSkillPoints, state, action)

}

function createNewSkillState(selectedSkill, newSelectedSpecializations, newSkillPoints, state, action) {
  selectedSkill.selectedSpecializations = newSelectedSpecializations

  let newIndividualSkills = [...state.skills.individualSkills]
  newIndividualSkills[action.payload.skillIndex].selectedSpecializations = newSelectedSpecializations

  const newState =  {
    ...state,
    skills: {
      ...state.skills,
      individualSkills: newIndividualSkills
    }
  }

  return updateAvailableSkillPoints(newState, newSkillPoints)
}
