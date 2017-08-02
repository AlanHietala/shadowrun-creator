import characterReducer from "./characterReducer"
import * as priorityActions from "../../actions/priorityActions"
import * as priorityValues from "../../constants/priorityValues"
import statsForPriorities from "../../constants/statsForPriorities"
import * as metatypeActions from "../../actions/MetatypeActions"
import deepFreeze from "deep-freeze"
import expect from "expect"

describe('Character Reducer', () => {
  describe('SAVE_PRIORITIES Action', () => {
    const savePrioritiesAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
      priorityValues.PRIORITY_B, priorityValues.PRIORITY_C, priorityValues.PRIORITY_D, priorityValues.PRIORITY_E)
    it('should set creation object correctly corresponding to the passed in priorities', () => {
      const stateBefore = {}
      const stateAfter = {
        creation: {
          availableMetatypes: statsForPriorities[priorityValues.PRIORITY_A].metatype,
          availableAttributePoints: statsForPriorities[priorityValues.PRIORITY_B].attributes,
          availableMagicOrResonanceClasses: statsForPriorities[priorityValues.PRIORITY_C].magicOrResonance,
          availableResources: statsForPriorities[priorityValues.PRIORITY_D].resources,
          availableSkillPoints: statsForPriorities[priorityValues.PRIORITY_E].skills
        }

      }

      deepFreeze(stateBefore)
      deepFreeze(stateAfter)

      expect(characterReducer(stateBefore, savePrioritiesAction)).toEqual(stateAfter)


    })

  })

  describe('SELECT_METATYPE action', () => {
    it('should set the default attribute values for the metatype', () => {
      const selectMetatypeAction = metatypeActions.selectMetatype(statsForPriorities[priorityValues.PRIORITY_A].metatype[0])
      const stateBefore = {
        creation: {
          availableMetatypes: statsForPriorities[priorityValues.PRIORITY_A].metatype,
          availableAttributePoints: statsForPriorities[priorityValues.PRIORITY_B].attributes,
          availableMagicOrResonanceClasses: statsForPriorities[priorityValues.PRIORITY_C].magicOrResonance,
          availableResources: statsForPriorities[priorityValues.PRIORITY_D].resources,
          availableSkillPoints: statsForPriorities[priorityValues.PRIORITY_E].skills
        }
      }
      const stateAfter = { attributes: { agility: { key: 'agility', maxValue: 6, minValue: 1, value: 1 }, body: { key: 'body', maxValue: 6, minValue: 1, value: 1 }, charisma: { key: 'charisma', maxValue: 6, minValue: 1, value: 1 }, edge: { isSpecialAttribute: true, key: 'edge', maxValue: 7, minValue: 2, value: 2 }, essence: { key: 'essence', minValue: 6, value: 6 }, intuition: { key: 'intuition', maxValue: 6, minValue: 1, value: 1 }, logic: { key: 'logic', maxValue: 6, minValue: 1, value: 1 }, racial: { key: 'racial', value: 'none' }, reaction: { key: 'reaction', maxValue: 6, minValue: 1, value: 1 }, strength: { key: 'strength', maxValue: 6, minValue: 1, value: 1 }, willpower: { key: 'willpower', maxValue: 6, minValue: 1, value: 1 } }, creation: { availableAttributePoints: 20, availableMagicOrResonanceClasses: [ { key: 'magician', magic: 3, magicalSkills: { attributeType: 'magic', count: 0, rating: 0 }, name: 'Magician', spellCount: 5 }, { key: 'mysticAdept', magic: 3, magicalSkills: { attributeType: 'magic', count: 0, rating: 0 }, name: 'Mystic Adept', spellCount: 5 }, { complexFormCount: 1, key: 'technomancer', name: 'Technomancer', resonance: 3, resonanceSkills: { attributeType: 'resonance', count: 0, rating: 0 } }, { activeSkills: { count: 1, rating: 2 }, key: 'adept', magic: 4, name: 'Adept' }, { bonusSkillGroup: { attributeType: 'magic', count: 1, rating: 2 }, key: 'aspectedMagician', magic: 3, name: 'Aspected Magician' } ], availableMetatypes: [ { id: 'human', metatype: 'Human', specialAttributePoints: 9 }, { id: 'elf', metatype: 'Elf', specialAttributePoints: 8 }, { id: 'dwarf', metatype: 'Dwarf', specialAttributePoints: 7 }, { id: 'ork', metatype: 'Ork', specialAttributePoints: 7 }, { id: 'troll', metatype: 'Troll', specialAttributePoints: 5 } ], availableResources: 50000, availableSkillPoints: { groupPoints: 0, points: 18 }, availableSpecialAttributePoints: 9 }, metatype: 'Human' }


      deepFreeze(stateBefore)
      deepFreeze(stateAfter)

      expect(characterReducer(stateBefore, selectMetatypeAction)).toEqual(stateAfter)
    })
    it('should set the default available special attribute points for the metatype', () => {

    })


  })


})
