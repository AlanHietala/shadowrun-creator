import * as priorityActions from '../constants/priorityActionTypes'
import * as priorityValues from '../constants/priorityValues'
import { createAction } from 'redux-actions'

export const setMetatypePriority = createAction(priorityActions.SET_METATYPE_PRIORITY)
export const setAttributePriority = createAction(priorityActions.SET_ATTRIBUTE_PRIORITY)
export const setMagicOrResonancePriority =  createAction(priorityActions.SET_MAGIC_OR_RESONANCE_PRIORITY)
export const setResourcesPriority = createAction(priorityActions.SET_RESOURCES_PRIORITY)
export const setSkillsPriority = createAction(priorityActions.SET_SKILLS_PRIORITY)


export function savePriorities(metatypePriority, attributePriority, magicOrResonancePriority, resourcesPriority, skillsPriority) {
  var priorityMap = {}
  priorityMap[metatypePriority] = true
  priorityMap[attributePriority] = true
  priorityMap[magicOrResonancePriority] = true
  priorityMap[resourcesPriority] = true
  priorityMap[skillsPriority] = true

  const allPrioritiesPresent = priorityMap[priorityValues.PRIORITY_A]
   && priorityMap[priorityValues.PRIORITY_B]
   && priorityMap[priorityValues.PRIORITY_C]
   && priorityMap[priorityValues.PRIORITY_D]
   && priorityMap[priorityValues.PRIORITY_E]

  if(allPrioritiesPresent) {
    return createAction(priorityActions.SAVE_PRIORITIES)({
      metatypePriority,
      attributePriority,
      magicOrResonancePriority,
      resourcesPriority,
      skillsPriority,
    })
  } else {
    return createAction(priorityActions.ERROR_NOT_ALL_PRIORITIES_PRESENT)({
      metatypePriority,
      attributePriority,
      magicOrResonancePriority,
      resourcesPriority,
      skillsPriority,
    })
  }
}
export function setPriorityForPriorityName(priorityName, priority) {

  let action = null
  switch(priorityName) {
  case 'attributes':
    action = setAttributePriority(priority)
    break
  case 'skills':
    action = setSkillsPriority(priority)
    break
  case 'metatype':
    action = setMetatypePriority(priority)
    break
  case 'resources':
    action = setResourcesPriority(priority)
    break
  case 'magicOrResonance':
    action = setMagicOrResonancePriority(priority)
    break
  default:
    break

  }
  return action
}
