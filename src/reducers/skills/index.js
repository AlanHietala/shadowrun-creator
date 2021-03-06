import * as skillActionTypes from '../../constants/skillActionTypes'
import modifyBonusSkill from './modifyBonusSkillReducer'
import modifySkillGroup from './modifySkillGroupReducer'
import skillSpecialization from './skillSpecializationReducer'
import modifySkill from './modifySkillReducer'
import filterSkill from './filterSkillReducer'

export default (state, action) => {
  switch (action.type) {
  case skillActionTypes.MODIFY_SKILL:
    return modifySkill(state, action)

  case skillActionTypes.ADD_SKILL_SPECIALIZATION:
    return skillSpecialization(state, action)

  case skillActionTypes.REMOVE_SKILL_SPECIALIZATION:
    return skillSpecialization(state, action)

  case skillActionTypes.MODIFY_BONUS_SKILL:
    return modifyBonusSkill(state, action)

  case skillActionTypes.MODIFY_SKILL_GROUP:
    return modifySkillGroup(state, action)

  case skillActionTypes.FILTER_SKILL:
    return filterSkill(state, action)

  default:
    return state
  }
}
