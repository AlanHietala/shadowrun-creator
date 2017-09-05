import { addItem, removeItem } from '../../actions/itemActions'
import { itemsReducer } from './itemsReducer'

describe('Items Reducer', function () {
  describe('ADD_ITEM', function () {
    it('should add a new item to the items array on ADD_ITEM action', function () {
      const item = {
        name: 'Reaction Enhancers 1',
        mods: [
          {
            effectType: 'SomeMod',
            effect: 1,
          },
        ],
      }


      const initialState = []


      const stateAfter = [item]

      const addItemAction = addItem(item, 'SOMETYPE')
      expect(itemsReducer(initialState, addItemAction, 'SOMETYPE')).toEqual(stateAfter)
    })
  })

  describe('REMOVE_ITEM', function () {
    it('should remove an item indicated by the item index', function () {
      const initialState = [
        {
          name: 'item 1',
          mods: [],
        },
        {
          name: 'item 2',
          mods: [],
        },
      ]


      const stateAfter = [
        {
          name: 'item 1',
          mods: [],
        },
      ]


      const removeItemAction = removeItem(1, 'SOMETYPE')
      expect(itemsReducer(initialState, removeItemAction, 'SOMETYPE')).toEqual(stateAfter)
    })

  })


})
