import { createSelector } from 'reselect'
import * as attributeTypes from '../constants/attributeTypes'
import * as modTypes from '../constants/modTypes'
import {getModReduce, resourcesModReduce} from './modHelpers'

export const resourcesSelector = state => {
  const initialResources = state.character.creation.availableResources
  const listsOfThingsThatCostMoney = [state.character.items, state.character.ware, state.character.weapons]
  const spentResources = listsOfThingsThatCostMoney
    .map(listThatCostsMoney => {
      return listThatCostsMoney.reduce(resourcesModReduce, 0)
    })
    .reduce((resourcesLeft, cost) => {
      return resourcesLeft - cost
    }, initialResources)

  return spentResources
}

export const strengthSelector = state => computeAttribute(state, attributeTypes.STRENGTH, modTypes.STRENGTH_MOD)
export const agilitySelector = state => computeAttribute(state, attributeTypes.AGILITY, modTypes.AGILITY_MOD)
export const willpowerSelector = state => computeAttribute(state, attributeTypes.WILLPOWER, modTypes.WILLPOWER_MOD)

export const magicSelector = state => computeAttribute(state, attributeTypes.MAGIC, modTypes.MAGIC_MOD)
export const bodySelector = state => computeAttribute(state, attributeTypes.BODY, modTypes.BODY_MOD)
export const reactionSelector = state => computeAttribute(state, attributeTypes.REACTION, modTypes.REACTION_MOD)
export const charismaSelector = state => computeAttribute(state, attributeTypes.CHARISMA, modTypes.CHARISMA_MOD)
export const intuitionSelector = state => computeAttribute(state, attributeTypes.INTUITION, modTypes.INTUITION_MOD)
export const logicSelector = state => computeAttribute(state, attributeTypes.LOGIC, modTypes.LOGIC_MOD)
export const essenceSelector = state => computeAttribute(state, attributeTypes.ESSENCE, modTypes.ESSENCE_MOD)

export const attributeSelector = createSelector([strengthSelector,
  agilitySelector,
  willpowerSelector,
  magicSelector,
  bodySelector,
  reactionSelector,
  charismaSelector,
  intuitionSelector,
  logicSelector,
  essenceSelector], (strength, agility, willpower, magic, body, reaction, charisma, intuition, logic, essence) => {
  return {
    strength,
    agility,
    willpower,
    magic,
    body,
    reaction,
    charisma,
    intuition,
    logic,
    essence,
  }
})
// TODO: export const initiativeSelector = state => what goes here?
const updateMod = (currentSheetItem, mod, item) => {
  return {
    value: currentSheetItem.value + mod.effect,
    modifiedBy: currentSheetItem.modifiedBy.concat([item]),
  }
}
const updateCharacterSheet = (characterSheet, item) => {
  return item.mods.reduce((sheet, mod) => {
    return mod.modType === modTypes.ESSENCE_MOD ? {...sheet, essence: updateMod(sheet.essence, mod, item)}
      : mod.modType === modTypes.RESOURCES_MOD ?  {...sheet, resources: updateMod(sheet.resources, mod, item)}
        : mod.modType === modTypes.WILLPOWER_MOD ? {...sheet, willpower: updateMod(sheet.willpower, mod, item)}
          : mod.modType === modTypes.REACTION_MOD ? {...sheet, reaction: updateMod(sheet.reaction, mod, item)}
            : mod.modType === modTypes.MAGIC_MOD ? {...sheet, magic: updateMod(sheet.magic, mod, item)}
              : mod.modType === modTypes.LOGIC_MOD ? {...sheet, logic: updateMod(sheet.logic, mod, item)}
                : mod.modType === modTypes.INTUITION_MOD ? {...sheet, intuition: updateMod(sheet.intuition, mod, item)}
                  : mod.modType === modTypes.INITIATIVE_MOD ? {...sheet, initiative: updateMod(sheet.initiative, mod, item)}
                    : mod.modType === modTypes.CHARISMA_MOD ? {...sheet, charisma: updateMod(sheet.charisma, mod, item)}
                      : mod.modType === modTypes.BODY_MOD ? {...sheet, body: updateMod(sheet.body, mod, item)}
                        : mod.modType === modTypes.AGILITY_MOD ? {...sheet, agility: updateMod(sheet.agility, mod, item)}
                          : mod.modType === modTypes.STRENGTH_MOD ? {...sheet, strength: updateMod(sheet.strength, mod, item)}
                            : mod.modType === modTypes.INITIATIVE_DICE_MOD ? {...sheet, initiativeDice: updateMod(sheet.initiativeDice, mod, item)}
                              : mod.modType === modTypes.PHYSICAL_LIMIT_MOD ? {...sheet, physicalLimitMod: updateMod(sheet.physicalLimitMod, mod, item)}
                                : mod.modType === modTypes.SOCIAL_LIMIT_MOD ? {...sheet, socialLimitMod: updateMod(sheet.socialLimitMod, mod, item)}
                                  : mod.modType === modTypes.MENTAL_LIMIT_MOD ? {...sheet, mentalLimitMod: updateMod(sheet.mentalLimitMod, mod, item)}
                                    : mod.modType === modTypes.OVERFLOW_MOD ? {...sheet, overflowMod: updateMod(sheet.overflowMod, mod, item)}
                                      : sheet
  }, characterSheet)
}

export const characterSheetSelector = (state) => {
  if (!state.character.attributes) {
    return null
  }

  const initialCharacterSheet = {
    strength: {value: state.character.attributes.strength.value, modifiedBy: []},
    agility: {value: state.character.attributes.agility.value, modifiedBy: []},
    willpower: {value: state.character.attributes.willpower.value, modifiedBy: []},
    magic: {value: state.character.attributes.magic ? state.character.attributes.magic.value : 0, modifiedBy: []},
    body: {value: state.character.attributes.body.value, modifiedBy: []},
    reaction: {value: state.character.attributes.reaction.value, modifiedBy: []},
    charisma: {value: state.character.attributes.charisma.value, modifiedBy: []},
    intuition: {value: state.character.attributes.intuition.value, modifiedBy: []},
    logic: {value: state.character.attributes.logic.value, modifiedBy: []},
    essence: {value: state.character.attributes.essence.value, modifiedBy:[]},
    resources: {value: state.character.creation.availableResources, modifiedBy: []},
    initiativeDice: {value: 1, modifiedBy: []},
    physicalLimitMod: {value: 0, modifiedBy: []},
    mentalLimitMod: {value: 0, modifiedBy: []},
    socialLimitMod: {value: 0, modifiedBy: []},
    overflowMod: {value: 0, modifiedBy: []},
  }

  const itemsList = state.character.items.concat(state.character.ware).concat(state.character.weapons)
  let computedCharacterSheet = itemsList
    .reduce((characterSheet, item) => {
      return updateCharacterSheet(characterSheet, item)
    }, initialCharacterSheet)
  const initiative = computedCharacterSheet.reaction.value + computedCharacterSheet.agility.value
  computedCharacterSheet.initiative = {value: initiative, modifiedBy: []}
  computedCharacterSheet.magicType = state.character.magicType

  computedCharacterSheet = computeLimits(computedCharacterSheet)
  computedCharacterSheet = computeConditionMonitors(computedCharacterSheet)

  return computedCharacterSheet
}

function computeConditionMonitors(sheet) {
  const physicalBoxes = Math.ceil((sheet.body.value / 2) + 8)
  const stunBoxes = Math.ceil((sheet.willpower.value / 2) + 8)
  const overflowBoxes = sheet.body.value + sheet.overflowMod.value

  return {
    ...sheet,
    physicalBoxes,
    stunBoxes,
    overflowBoxes,
  }
}

function computeLimits(sheet) {
  const physicalLimit = Math.ceil(((sheet.strength.value  * 2) + sheet.body.value  + sheet.reaction.value ) / 3) + sheet.physicalLimitMod.value
  const mentalLimit = Math.ceil(((sheet.logic.value * 2) + sheet.intuition.value  + sheet.willpower.value ) / 3) + sheet.mentalLimitMod.value
  const socialLimit = Math.ceil(((sheet.charisma.value  * 2) + sheet.willpower.value  + sheet.essence.value ) / 3) + sheet.socialLimitMod.value

  const newSheet = {
    ...sheet,
    physicalLimit,
    mentalLimit,
    socialLimit,
  }

  return newSheet
}

function computeAttribute(state, attributeType, modType) {
  const modReduceFn = getModReduce(modType)

  const base =  state.character.attributes[attributeType] ? state.character.attributes[attributeType].value : 0

  let mods = state.character.items
    .reduce(modReduceFn, 0)

  mods = state.character.ware
    .reduce(modReduceFn, mods)
  const computed = base + mods

  return  {
    base,
    mods,
    computed,
  }
}
