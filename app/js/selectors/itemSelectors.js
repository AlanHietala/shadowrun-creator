import * as itemTypes from '../constants/itemTypes';
import {essenceSelector, resourcesSelector} from './characterSelectors';
import {getEssenceCostForItem, getResourceCostForItem} from './modHelpers';
import * as modTypes from '../constants/modTypes';
export const itemsSelector = (state) => {
	return state.character.items;
}

export const characterWareSelector = (state) => {
	return state.character.ware;
}

export const addAvailabilityMetadataToItems = (state, wareList) => {
	const availableResources = resourcesSelector(state);
	const essence = essenceSelector(state);

	return wareList.map(ware => {
		console.log(essence)
		const isEnoughEssence = essence.computed > getEssenceCostForItem(ware);
		const isEnoughResources = availableResources > getResourceCostForItem(ware);
		return {
			...ware,
			isEnoughEssence,
			isEnoughResources
		}
	})
}



