export default (state, action) => {
  let creation = {}
  creation.bonusSkills = action.payload.bonusSkills || null
  creation.bonusSkillGroup = action.payload.bonusSkillGroup || null
  creation.spellCount = action.payload.spellCount || 0
  creation.complexFormCount = action.payload.complexFormCount || 0
  creation.activeSkills = action.payload.activeSkills || null
  return {
    ...state,
    attributes: {
      ...state.attributes,
      ...getInitialAttributesForMagic(action.payload),
    },
    magicType: action.payload.key,
    creation: {
      ...state.creation,
      ...creation,

    },
  }
}

const getInitialAttributesForMagic = (magicType) => {
  let magicAttribute = {}
  if(magicType.magic) {
    magicAttribute = {
      magic: {
        key: 'magic',
        minValue: magicType.magic,
        value: magicType.magic,
        maxValue: 6,
        isSpecialAttribute: true,
      },
    }
  } else if(magicType.resonance) {
    magicAttribute = {
      resonance: {
        key: 'resonance',
        minValue: magicType.resonance,
        value: magicType.resonance,
        maxValue: 6,
        isSpecialAttribute: true,
      },
    }
  }

  return magicAttribute
}
