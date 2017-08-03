import * as priorityActions from './priorityActions'
import * as actionTypes from '../constants/priorityActionTypes'
import * as priorityValues from '../constants/priorityValues'

describe('Priority Action Creators', () => {
  describe('savePriorities Action Creator', () => {
    it('should create a SAVE_PRIORITIES action when all priorities are present', () => {

      const expectedAction =  {payload: { attributePriority: 'B', magicOrResonancePriority: 'C', metatypePriority: 'A', resourcesPriority: 'D', skillsPriority: 'E' }, type: 'SAVE_PRIORITIES' }
      const savePriorityAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
        priorityValues.PRIORITY_B,
        priorityValues.PRIORITY_C,
        priorityValues.PRIORITY_D,
        priorityValues.PRIORITY_E)

      expect(savePriorityAction).toEqual(expectedAction)

    })

    it('should return an error action if not all priorities are present', () => {
      const expectedAction = { payload: { attributePriority: 'B', magicOrResonancePriority: 'C', metatypePriority: 'A', resourcesPriority: 'D', skillsPriority: 'A' }, type: 'ERROR_NOT_ALL_PRIORITIES_PRESENT' }
      const savePriorityAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
        priorityValues.PRIORITY_B,
        priorityValues.PRIORITY_C,
        priorityValues.PRIORITY_D,
        priorityValues.PRIORITY_A)

      expect(savePriorityAction).toEqual(expectedAction)
    })

  })
})
describe('Priority Actions', () => {
  it('should create an action to set metatype PrioritiesList', () => {
    const expectedAction = {
      type: actionTypes.SET_METATYPE_PRIORITY,
      payload: priorityValues.PRIORITY_A,
    }

    expect(priorityActions.setMetatypePriority(priorityValues.PRIORITY_A)).toEqual(expectedAction)
  })

  it('should create an action to set attribute PrioritiesList', () => {
    const expectedAction = {
      type: actionTypes.SET_ATTRIBUTE_PRIORITY,
      payload: priorityValues.PRIORITY_A,
    }

    expect(priorityActions.setAttributePriority(priorityValues.PRIORITY_A)).toEqual(expectedAction)
  })

  it('should create an action to set skills PrioritiesList', () => {
    const expectedAction = {
      type: actionTypes.SET_SKILLS_PRIORITY,
      payload: priorityValues.PRIORITY_A,
    }

    expect(priorityActions.setSkillsPriority(priorityValues.PRIORITY_A)).toEqual(expectedAction)
  })

  it('should create an action to set resources PrioritiesList', () => {
    const expectedAction = {
      type: actionTypes.SET_RESOURCES_PRIORITY,
      payload: priorityValues.PRIORITY_A,
    }

    expect(priorityActions.setResourcesPriority(priorityValues.PRIORITY_A)).toEqual(expectedAction)
  })
})
