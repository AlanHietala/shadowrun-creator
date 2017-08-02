import qualityReducer from './qualityReducer'
import {ADD_QUALITY, REMOVE_QUALITY} from '../../constants/qualityActionTypes'

describe('quality Reducer', function () {
  it('should add a quality to the list referenced by the payload', function () {
    const initialState = {
      qualities: [],
      karma: 20
    }
    const stateAfter = {
      qualities: [
        {
          name: 'Astral Chameleon',
          karmaCost: 10
        }
      ],
      karma: 10
    }

    const action = {
      type: ADD_QUALITY,
      payload: {
        name: 'Astral Chameleon',
        karmaCost: 10
      }

    }
    expect(qualityReducer(initialState, action)).toEqual(stateAfter)
  })

  it('should not add a quality if the cost is greater than the available karma', function () {
    const initialState = {
      qualities: [],
      karma: 8
    }
    const stateAfter = {
      qualities: [],
      karma: 8
    }

    const action = {
      type: ADD_QUALITY,
      payload: {
        name: 'Astral Chameleon',
        karmaCost: 10
      }

    }
    expect(qualityReducer(initialState, action)).toEqual(stateAfter)
  })





})
describe('removeQualityReducer', function () {
  it('should remove a quality at the index in the payload and refund the karma', function () {
    const initialState = {
      qualities: [
        {
          name: 'Astral Chameleon',
          karmaCost: 10
        },
        {
          name: 'Bar Cart',
          karmaCost: 7
        }
      ],
      karma: 20
    }
    const stateAfter = {
      qualities: [
        {
          name: 'Astral Chameleon',
          karmaCost: 10
        }
      ],
      karma: 27
    }

    const action = {
      type: REMOVE_QUALITY,
      payload: 1
    }
    expect(qualityReducer(initialState, action)).toEqual(stateAfter)
  })

})
