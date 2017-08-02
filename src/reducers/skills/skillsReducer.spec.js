import {addSkillSpecialization, removeSkillSpecialization} from '../../actions/skillActions'
import * as attributesTypes from '../../constants/attributeTypes'
import skillSpecializationReducer from './skillSpecializationReducer'

describe('Skills Reducer', function () {
  describe('Specialization Reducer', function () {
    describe('ADD_SKILL_SPECIALIZATION action', function () {
      it('should add a specialization to a skill referenced by the passed in index and subtract 2 skill points', function () {
        const initialState = {
          creation: {
            availableSkillPoints: {
              points: 5
            }
          },
          skills: {
            individualSkills: [
              {
                name: 'foo',
                points: 2,
                attribute: attributesTypes.AGILITY,
                canDefault: true,
                specializations: [
                  'bar'
                ],
                selectedSpecializations: []
              }
            ]
          }
        }

        const stateAfter = {
          creation: {
            availableSkillPoints: {
              points: 3
            }
          },
          skills: {
            individualSkills: [{
              name: 'foo',
              points: 2,
              attribute: attributesTypes.AGILITY,
              canDefault: true,
              specializations: [
                'bar'
              ],
              selectedSpecializations: ['bar']
            }]
          }
        }

        const action = addSkillSpecialization(0, 0)


        expect(skillSpecializationReducer(initialState, action)).toEqual(stateAfter)
      })

      it('should not add a specialization if there are less than 2 skill points remaining', function () {
        const initialState = {
          creation: {
            availableSkillPoints: {
              points: 1
            }
          },
          skills: {
            individualSkills: [
              {
                name: 'foo',
                points: 2,
                attribute: attributesTypes.AGILITY,
                canDefault: true,
                specializations: [
                  'bar'
                ],
                selectedSpecializations: []
              }
            ]
          }
        }

        const stateAfter = {
          creation: {
            availableSkillPoints: {
              points: 1
            }
          },
          skills: {
            individualSkills: [{
              name: 'foo',
              points: 2,
              attribute: attributesTypes.AGILITY,
              canDefault: true,
              specializations: [
                'bar'
              ],
              selectedSpecializations: []
            }]
          }
        }

        const action = addSkillSpecialization(0, 0)


        expect(skillSpecializationReducer(initialState, action)).toEqual(stateAfter)
      })

      it('should not add a specialization if there are 0 points in a skill', function () {
        const initialState = {
          creation: {
            availableSkillPoints: {
              points: 3
            }
          },
          skills: {
            individualSkills: [
              {
                name: 'foo',
                points: 0,
                attribute: attributesTypes.AGILITY,
                canDefault: true,
                specializations: [
                  'bar'
                ],
                selectedSpecializations: []
              }
            ]
          }
        }

        const stateAfter = {
          creation: {
            availableSkillPoints: {
              points: 3
            }
          },
          skills: {
            individualSkills: [{
              name: 'foo',
              points: 0,
              attribute: attributesTypes.AGILITY,
              canDefault: true,
              specializations: [
                'bar'
              ],
              selectedSpecializations: []
            }]
          }
        }

        const action = addSkillSpecialization(0, 0)


        expect(skillSpecializationReducer(initialState, action)).toEqual(stateAfter)
      })

      it('should not add a specialization twice if it already exists', function () {
        const initialState = {
          creation: {
            availableSkillPoints: {
              points: 3
            }
          },
          skills: {
            individualSkills: [
              {
                name: 'foo',
                points: 1,
                attribute: attributesTypes.AGILITY,
                canDefault: true,
                specializations: [
                  'bar'
                ],
                selectedSpecializations: ['bar']
              }
            ]
          }
        }


        const action = addSkillSpecialization(0, 0)


        expect(skillSpecializationReducer(initialState, action)).toEqual(initialState)
      })

    })

    describe('REMOVE_SKILL_SPECIALIZATION action', function () {
      it('should remove a specialization referenced by the passed in index and add 2 skill points', function () {

        const initialState = {
          creation: {
            availableSkillPoints: {
              points: 3
            }
          },
          skills: {
            individualSkills: [{
              name: 'foo',
              points: 2,
              attribute: attributesTypes.AGILITY,
              canDefault: true,
              specializations: [
                'bar'
              ],
              selectedSpecializations: ['bar']
            }]
          }
        }

        const stateAfter = {
          creation: {
            availableSkillPoints: {
              points: 5
            }
          },
          skills: {
            individualSkills: [
              {
                name: 'foo',
                points: 2,
                attribute: attributesTypes.AGILITY,
                canDefault: true,
                specializations: [
                  'bar'
                ],
                selectedSpecializations: []
              }
            ]
          }
        }
        const action = removeSkillSpecialization(0, 0)


        expect(skillSpecializationReducer(initialState, action)).toEqual(stateAfter)
      })
    })
  })
})
