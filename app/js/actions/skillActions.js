import * as skillActions from '../constants/skillActionTypes'
import { createAction } from 'redux-actions'


export const addSkillSpecialization = createAction(skillActions.ADD_SKILL_SPECIALIZATION, (skillIndex, specializationIndex) => {
  return {
    skillIndex,
    specializationIndex
  }
})

export const removeSkillSpecialization = createAction(skillActions.REMOVE_SKILL_SPECIALIZATION, (skillIndex, specializationIndex) => {
  return {
    skillIndex,
    specializationIndex
  }
})

export const modifySkill  = createAction(skillActions.MODIFY_SKILL, (skill, addValue) => {
  return {
    skill,
    addValue
  }
})

export const modifyBonusSkill  = createAction(skillActions.MODIFY_BONUS_SKILL, (skill, addValue) => {
  return {
    skill,
    addValue
  }
})

export const modifySkillGroup = createAction(skillActions.MODIFY_SKILL_GROUP, (skillGroup, addValue) => {
  return {
    skillGroup,
    addValue
  }
})

export const filterSkill = createAction(skillActions.FILTER_SKILL)


