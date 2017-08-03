import * as priorityActionTypes from '../../constants/priorityActionTypes'
import * as creationOptionActionTypes from '../../constants/creationOptionActionTypes'
import * as itemActionTypes from '../../constants/itemActionTypes'
import * as qualityActionTypes from '../../constants/qualityActionTypes'
import { skillArray } from '../../constants/skills'
import skillGroups from '../../constants/skillGroups'
import * as skillActionTypes from '../../constants/skillActionTypes'
import * as spellActionTypes from '../../constants/spellActionTypes'
import skills from '../skills'
import attribute from '../attributes'
import quality from '../quality'
import setMagicOrResonanceOption from '../magic-or-resonance'
import setMetatype from '../metatype'
import setStats from '../stats'
import spells from '../spells'
import items from '../items'
import ware from '../ware'
import * as adeptPowerActionTypes from '../../constants/adeptPowerActionTypes'
import adeptPowers from '../adept-powers'

const defaultState = {
  qualities: [],
  karma: 25,

  skills: {
    individualSkills: skillArray,
    skillGroups,
    textFilter: '',
  },
  spells: [],
  items: [],
  ware: [],
  adeptPowers: [],
}

const skillActions = [
  skillActionTypes.MODIFY_SKILL,
  skillActionTypes.ADD_SKILL_SPECIALIZATION,
  skillActionTypes.REMOVE_SKILL_SPECIALIZATION,
  skillActionTypes.MODIFY_BONUS_SKILL,
  skillActionTypes.MODIFY_SKILL_GROUP,
  skillActionTypes.FILTER_SKILL,
]

const attributeActions = [
  creationOptionActionTypes.ADD_ATTRIBUTE,
  creationOptionActionTypes.SUBTRACT_ATTRIBUTE,
]

const spellActions = [
  spellActionTypes.ADD_SPELL,
  spellActionTypes.REMOVE_SPELL,
]

const adeptActions = [
  adeptPowerActionTypes.ADD_POWER,
  adeptPowerActionTypes.REMOVE_POWER,
  adeptPowerActionTypes.INCREASE_POWER,
  adeptPowerActionTypes.DECREASE_POWER,
]

const character = (state = defaultState, action) => {

  if(skillActions.includes(action.type)) {
    return skills(state, action)
  } else if(attributeActions.includes(action.type)) {
    return attribute(state, action)
  } else if(spellActions.includes(action.type)) {
    return spells(state, action)
  } else if(adeptActions.includes(action.type)) {
    return adeptPowers(state, action)
  } else {
    switch (action.type) {
    case priorityActionTypes.SAVE_PRIORITIES:
      return setStats(state, action)

    case creationOptionActionTypes.PICK_METATYPE_OPTION:
      return setMetatype(state, action)

    case creationOptionActionTypes.PICK_MAGIC_OR_RESONANCE_OPTION:
      return setMagicOrResonanceOption(state, action)

    case qualityActionTypes.ADD_QUALITY:
      return quality(state, action)

    case qualityActionTypes.REMOVE_QUALITY:
      return quality(state, action)

    case itemActionTypes.ADD_ITEM:
      return items(state, action)

    case itemActionTypes.REMOVE_ITEM:
      return items(state, action)

    case itemActionTypes.ADD_WARE:
      return ware(state, action)

    case itemActionTypes.REMOVE_WARE:
      return ware(state, action)

    default:
      return state
    }
  }
}

export default character
