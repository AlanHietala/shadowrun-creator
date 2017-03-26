import * as itemActions from '../../constants/itemActionTypes';

const itemsReducer = (state, action) => {
	switch(action.type) {
		case itemActions.ADD_ITEM:
			return handleAddItem(state, action);
			break;
		case itemActions.REMOVE_ITEM:
			return handleRemoveItem(state, action);
		default:
			return state;
	}
}

function handleRemoveItem(state, action) {
	const items = [
		...state.items.slice(0, action.payload),
		...state.items.slice(action.payload + 1)
	];

	return {
		...state,
		items
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