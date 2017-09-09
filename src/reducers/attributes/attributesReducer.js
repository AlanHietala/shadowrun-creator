import * as creationOptionActionTypes from  '../../constants/creationOptionActionTypes'
import * as modTypes from '../../constants/modTypes'
import * as attributeTypes from '../../constants/attributeTypes'

export default (state, action) => {

  const valueToAdd = action.type === creationOptionActionTypes.ADD_ATTRIBUTE ? 1 : -1
  const attributeToSet = state.attributes[action.payload.key]
  const isSpecialAttribute = action.payload.isSpecialAttribute
  const availableAttributePoints = getAvailableAttributePoints(isSpecialAttribute, state)
  const newAttributeValue = attributeToSet.value + valueToAdd
  const newAvailableAttributePoints = availableAttributePoints - valueToAdd
  let newState = state
  if(isAttributeChangeValid(state, attributeToSet, newAttributeValue, newAvailableAttributePoints, action.payload.key)) {
    newState = setAttribute(state, action, attributeToSet, newAttributeValue)
  }

  return newState
}

const getAvailableAttributePoints = (isSpecialAttribute, state)  => {
  const { creation } = state
  const { body, agility, reaction, strength, willpower, logic, intuition, charisma, edge, magic } = state.attributes

  if (isSpecialAttribute) {
    let usedSpecialPoints = edge.value
    if (magic) {
      usedSpecialPoints = usedSpecialPoints + magic.value
    }
    return creation.availableSpecialAttributePoints - usedSpecialPoints
  } else {
    const usedPoints = body.value + agility.value + reaction.value + strength.value + willpower.value + logic.value + intuition.value + charisma.value
    return creation.availableAttributePoints - usedPoints
  }
}

// const addAttributePoint = (pointsToAdd, state, isSpecialAttribute) => {
//   let creation = null
//
//   if(isSpecialAttribute) {
//
//     creation = {
//       ...state.creation,
//       availableSpecialAttributePoints: state.creation.availableSpecialAttributePoints + pointsToAdd,
//     }
//   } else {
//     creation = {
//       ...state.creation,
//       availableAttributePoints: state.creation.availableAttributePoints + pointsToAdd,
//     }
//   }
//
//   return {
//     ...state,
//     creation,
//   }
// }

const setAttribute = (state, action, attributeToSet, value) => {
  let newState = {
    ...state,
    attributes: {
      ...state.attributes,
    },
  }

  newState.attributes[action.payload.key] = {
    ...attributeToSet,
    value,
  }
  return newState
}

const isAttributeChangeValid = (state, attributeToSet, newAttributeValue, newAvailableAttributePoints, attributeKey) => {
  let isValid = false
  const maxModAttributeType = maxAttributeModMap[attributeKey]

  const attributeToSetMaxMod = state.qualities.reduce((attributeMaxSum, quality) => {
    return attributeMaxSum + quality.mods.reduce((modSum, mod) => {

      if(mod.modType === maxModAttributeType) {
        return modSum + mod.value
      } else {
        return modSum
      }
    }, 0)
  }, 0)


  const changeWithinRange = newAttributeValue >= 0
  && newAttributeValue + attributeToSet.minValue <= attributeToSet.maxValue + attributeToSetMaxMod
  && newAvailableAttributePoints >= 0

  if(changeWithinRange) {
    if(isAttributeBeingIncreasedToNaturalLimit(attributeToSet, newAttributeValue)) {
      isValid = !isAnyAttributeAtNaturalLimit(state)
    } else {
      isValid = true
    }
  }

  return isValid
}

const isAttributeBeingIncreasedToNaturalLimit = (attributeToSet, newAttributeValue) => {
  return attributeToSet.maxValue === newAttributeValue + attributeToSet.minValue
}

const isAnyAttributeAtNaturalLimit = (state) => {
  let foundAttributeAtNaturalLimit = false
  for(let key in state.attributes) {
    const attribute = state.attributes[key]
    if(attribute.key !== 'essence' && attribute.key !== 'racial') {
      if(attribute.maxValue === attribute.value + attribute.minValue) {
        foundAttributeAtNaturalLimit = true
        break
      }
    }
  }

  return foundAttributeAtNaturalLimit
}

const maxAttributeModMap = {
  [attributeTypes.BODY]: modTypes.MAX_BODY_MOD,
  [attributeTypes.MAGIC]: modTypes.MAX_MAGIC_MOD,
  [attributeTypes.RESONANCE]: modTypes.MAX_RESONANCE_MOD,
  [attributeTypes.AGILITY]: modTypes.MAX_AGILITY_MOD,
  [attributeTypes.REACTION]: modTypes.MAX_REACTION_MOD,
  [attributeTypes.STRENGTH]: modTypes.MAX_STRENGTH_MOD,
  [attributeTypes.CHARISMA]: modTypes.MAX_CHARISMA_MOD,
  [attributeTypes.INTUITION]: modTypes.MAX_INTUITION_MOD,
  [attributeTypes.LOGIC]: modTypes.MAX_LOGIC_MOD,
  [attributeTypes.WILLPOWER]: modTypes.MAX_WILLPOWER_MOD,
  [attributeTypes.ESSENCE]: modTypes.MAX_ESSENCE_MOD,
}
