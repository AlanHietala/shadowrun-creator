import adeptPowersReducer from './adeptPowersReducer'
import { addPower, removePower, increasePower, decreasePower } from '../../actions/powerActions'
describe('AdeptPower Reducer', function () {
  describe('Add Power', function () {
    it('should add a power', () => {
      const initalState = {
        adeptPowers: [],
        attributes: {
          magic: {
            value: 6,
          },
        },
      }

      const expectedState = {
        adeptPowers: [{
          key: 'adrenalineBoost',
          name: 'Adrenaline Boost',
          cost: 0.25,
          activation: 'FREE_ACTION',
          level: 1,
        }],
        attributes: {
          magic: {
            value: 6,
          },
        },
      }

      const action = addPower(
        {
          key: 'adrenalineBoost',
          name: 'Adrenaline Boost',
          cost: 0.25,
          activation: 'FREE_ACTION',

        })

      expect(adeptPowersReducer(initalState, action)).toEqual(expectedState)
    })
  })

  describe('Remove Power', function () {
    const initalState = {
      adeptPowers: [{
        key: 'adrenalineBoost',
        name: 'Adrenaline Boost',
        cost: 0.25,
        activation: 'FREE_ACTION',
        level: 1,
      }],
      attributes: {
        magic: {
          value: 6,
        },
      },
    }

    const expectedState = {
      adeptPowers: [],
      attributes: {
        magic: {
          value: 6,
        },
      },
    }

    const action = removePower(0)

    expect(adeptPowersReducer(initalState, action)).toEqual(expectedState)
  })

  describe('Increase Power', function () {
    it('should increase the level of an existing power', () => {

      const initalState = {
        adeptPowers: [{
          key: 'adrenalineBoost',
          name: 'Adrenaline Boost',
          cost: 0.25,
          activation: 'FREE_ACTION',
          level: 1,
        }],
        attributes: {
          magic: {
            value: 6,
          },
        },
      }

      const expectedState = {
        adeptPowers: [{
          key: 'adrenalineBoost',
          name: 'Adrenaline Boost',
          cost: 0.25,
          activation: 'FREE_ACTION',
          level: 2,
        }],
        attributes: {
          magic: {
            value: 6,
          },
        },
      }

      const action = increasePower(0)

      expect(adeptPowersReducer(initalState, action)).toEqual(expectedState)

    })
    it('should not incrase power if you dont have the points', () => {
      const initalState = {
        adeptPowers: [{
          key: 'adrenalineBoost',
          name: 'Adrenaline Boost',
          cost: 0.25,
          activation: 'FREE_ACTION',
          level: 24,
        }],
        attributes: {
          magic: {
            value: 6,
          },
        },
      }

      const expectedState = {
        adeptPowers: [{
          key: 'adrenalineBoost',
          name: 'Adrenaline Boost',
          cost: 0.25,
          activation: 'FREE_ACTION',
          level: 24,
        }],
        attributes: {
          magic: {
            value: 6,
          },
        },
      }

      const action = increasePower(0)

      expect(adeptPowersReducer(initalState, action)).toEqual(expectedState)
    })
  })

  describe('Decrease Power', function () {


    const initalState = {
      adeptPowers: [{
        key: 'adrenalineBoost',
        name: 'Adrenaline Boost',
        cost: 0.25,
        activation: 'FREE_ACTION',
        level: 2,
      }],
      attributes: {
        magic: {
          value: 6,
        },
      },
    }

    const expectedState = {
      adeptPowers: [{
        key: 'adrenalineBoost',
        name: 'Adrenaline Boost',
        cost: 0.25,
        activation: 'FREE_ACTION',
        level: 1,
      }],
      attributes: {
        magic: {
          value: 6,
        },
      },
    }

    const action = decreasePower(0)

    expect(adeptPowersReducer(initalState, action)).toEqual(expectedState)
  })


})
