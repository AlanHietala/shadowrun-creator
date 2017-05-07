import * as itemTypes from '../constants/itemTypes';
export const itemsSelector = (state) => {
	return state.character.items;
}

export const wareSelector = (state) => {
	return state.character.ware;
}



