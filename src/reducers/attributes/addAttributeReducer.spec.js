import addAttributeReducer from './attributesReducer'
import {ADD_ATTRIBUTE, SUBTRACT_ATTRIBUTE} from '../../constants/creationOptionActionTypes'
import * as modTypes from '../../constants/modTypes'

describe('Add Attribute Reducer', function () {
  it('should increase an attribute referenced by key if the type is ADD_ATTRIBUTE', function () {
    const initialState = {
      creation: {
        availableAttributePoints: 100,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:1,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const stateAfter = {
      creation: {
        availableAttributePoints: 100,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:2,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const action = {
      type: ADD_ATTRIBUTE,
      payload: {
        key: 'strength',
      },
    }

    expect(addAttributeReducer(initialState, action)).toEqual(stateAfter)
  })

  it('should decrease available creation attribute points by one when an SUBTRACT_ATTRIBUTE is received', function () {
    const initialState = {
      creation: {
        availableAttributePoints: 200,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:2,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const stateAfter = {
      creation: {
        availableAttributePoints: 200,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:1,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }

    const action = {
      type: SUBTRACT_ATTRIBUTE,
      payload: {
        key: 'strength',
      },
    }
    expect(addAttributeReducer(initialState, action)).toEqual(stateAfter)
  })

  it('should not make a change if there are no attribute points available', function () {
    const initialState = {
      creation: {
        availableAttributePoints: 5,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:2,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const stateAfter = {
      creation: {
        availableAttributePoints: 5,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:2,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const action = {
      type: ADD_ATTRIBUTE,
      payload: {
        key: 'strength',
      },
    }
    expect(addAttributeReducer(initialState, action)).toEqual(stateAfter)
  })

  it('should not make a change if the attribute would bring it over the maximum allowed value', function () {
    const initialState = {
      creation: {
        availableAttributePoints: 5,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:6,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const stateAfter = {
      creation: {
        availableAttributePoints: 5,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:6,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const action = {
      type: ADD_ATTRIBUTE,
      payload: {
        key: 'strength',
      },
    }
    expect(addAttributeReducer(initialState, action)).toEqual(stateAfter)
  })

  it('should make a change if the attribute would bring it over the maximum allowed natural value but there is a mod', function () {
    const initialState = {
      creation: {
        availableAttributePoints: 100,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:6,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [
        {
          mods: [{
            modType: modTypes.MAX_STRENGTH_MOD,
            value: 1,
          }],
        },
      ],
    }
    const stateAfter = {
      creation: {
        availableAttributePoints: 100,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:6,
          minValue:1,
          maxValue:6,
        },agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [{
        mods: [{
          modType: modTypes.MAX_STRENGTH_MOD,
          value: 1,
        }],
      }],
    }
    const action = {
      type: ADD_ATTRIBUTE,
      payload: {
        key: 'strength',
      },
    }
    expect(addAttributeReducer(initialState, action)).toEqual(stateAfter)
  })
  it('should not make a change if the attribute would bring it under the allowed minimum', function () {
    const initialState = {
      creation: {
        availableAttributePoints: 5,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:1,
          minValue:1,
          maxValue:6,
        },
        agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const stateAfter = {
      creation: {
        availableAttributePoints: 5,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:1,
          minValue:1,
          maxValue:6,
        },
        agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:4,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const action = {
      type: SUBTRACT_ATTRIBUTE,
      payload: {
        key: 'strength',
      },
    }
    expect(addAttributeReducer(initialState, action)).toEqual(stateAfter)
  })

  it('should not make a change if another attribute is at its natural limit and this one is being incrased to its natural limit', function () {
    const initialState = {
      creation: {
        availableAttributePoints: 5,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:5,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const stateAfter = {
      creation: {
        availableAttributePoints: 5,
        availableSpecialAttributePoints: 2,
      },
      attributes: {
        strength: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        agility: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        willpower: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        charisma: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        reaction: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        logic: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        body: {
          value:4,
          minValue:1,
          maxValue:6,
        },
        intuition: {
          value:5,
          minValue:1,
          maxValue:6,
        },
      },
      qualities: [],
    }
    const action = {
      type: ADD_ATTRIBUTE,
      payload: {
        key: 'strength',
      },
    }
    expect(addAttributeReducer(initialState, action)).toEqual(stateAfter)
  })
})
