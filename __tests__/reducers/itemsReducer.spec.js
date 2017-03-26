import { addItem } from '../../app/js/actions/itemActions';
import itemsReducer from '../../app/js/reducers/items';

describe('Items Reducer', function () {
	describe('ADD_ITEM', function () {
		it('should add a new item to the items array on ADD_ITEM action', function () {
			const item = {
				name: 'Reaction Enhancers 1',
				mods: [
					{
						effectType: 'SomeMod',
						effect: 1
					}
				]
			};

			const initialState = {
				items: []
			};

			const stateAfter = {
				items: [item]
			};

			const addItemAction = addItem(item);
			expect(itemsReducer(initialState, addItemAction)).toEqual(stateAfter);
		});
	});

	
});