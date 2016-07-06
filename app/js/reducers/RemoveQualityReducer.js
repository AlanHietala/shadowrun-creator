export default (state, action) => {
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
};