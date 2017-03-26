import * as itemActions from '../../constants/itemActionTypes';

const itemsReducer = (state, action) => {
	switch(action.type) {
		case itemActions.ADD_ITEM:
			return handleAddItem(state, action);
			break;
		default:
			return state;
	}
}

function handleAddItem(state, action) {

	const items = state.items.concat([action.payload]);
	return {
		...state,
			items
	};
}

export default itemsReducer;