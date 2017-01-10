import * as qualityActionTypes from '../../constants/qualityActionTypes';

export default (state, action) => {
	switch(action.type) {
		case  qualityActionTypes.REMOVE_QUALITY:
			return removeQuality(state, action);
			break;
		case qualityActionTypes.ADD_QUALITY:
			return addQuality(state, action);
			break;
		default:
			return state;
	}

}

const addQuality = (state, action) => {

	const qualityToAddCost = action.payload.karmaCost;
	const karma = state.karma;
	const newKarma = karma - qualityToAddCost;

	if(0 <= newKarma && newKarma <= 50) {
		const qualities = state.qualities.concat([action.payload]);

		return {
			...state,
			qualities,
			karma: newKarma
		};
	} else {
		return state;
	}
}

const removeQuality = (state, action) => {
	const qualityToRemoveCost = state.qualities[action.payload].karmaCost;
	const karma = state.karma;
	const qualities = [
		...state.qualities.slice(0, action.payload),
		...state.qualities.slice(action.payload + 1)
	];
	return {
		...state,
		qualities,
		karma: karma + qualityToRemoveCost
	};
}

