import deepFreeze from 'deep-freeze'
import weaponsReducer from './weaponsReducer'
import { selectAccessory } from '../../actions/itemActions'

describe('weaponReducer', () => {
  it('should add a weapon accessory on ADD_ACCESSORY', () => {
    const initialState = {
      weapons: [{
        accessories: {
          barrel: null,
        },
      }],
    }
    const expectedState = {
      weapons: [{
        accessories: {
          barrel: {foo: 'bar'},
        },
      }],
    }
    const action = selectAccessory(0, 'barrel', {foo: 'bar'})
    deepFreeze(initialState)
    expect(weaponsReducer(initialState, action)).toEqual(expectedState)
  })
})
