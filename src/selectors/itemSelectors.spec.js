import * as modTypes from '../constants/modTypes'
import {wareListSelector} from './itemSelectors'
describe('Item Selectors', function () {
  describe('availableWareSelector', function () {
    it('should set isEnoughEssence to true if the characters essence left is > the ware essence mod', function () {

      const state = {
        character: {
          attributes: {
            essence: {
              key: 'essence',
              minValue: 1,
              maxValue: 5,
              value: 4
            }
          },
          items: [],
          ware:[],
          creation: {
            availableResources: 20000
          }
        },
        wareList: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.ESSENCE_MOD,
              effect: 2
            }
          ]
        }]
      }

      const expectedSelection = [{
        name: 'Reaction Enhancers 1',
        mods: [
          {
            modType: modTypes.ESSENCE_MOD,
            effect: 2
          }
        ],
        isEnoughEssence: true,
        isEnoughResources: true
      }]

      expect(wareListSelector(state)).toEqual(expectedSelection)

    })

  })
})
