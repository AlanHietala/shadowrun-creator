export default (state, action) => {
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