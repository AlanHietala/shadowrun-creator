
const addSpell = (state, action) => {
	if(state.creation.spellCount > 0 && !isSpellAlreadyAdded(state.spells, action.payload)) {
		const spells = state.spells.concat([action.payload]);
		const creation = {
			...state.creation,
			spellCount: state.creation.spellCount - 1
		};

		return {
			...state,
			spells,
			creation
		};
	} else {
		return state;
	}
};

const isSpellAlreadyAdded = (addedSpells, spellToCheck) => {
		return addedSpells.indexOf(spellToCheck) > -1;
};

const removeSpell = (state, action) => {
	const spells = [
		...state.spells.slice(0, action.payload),
		...state.spells.slice(action.payload + 1)
	];
	const creation = {
		...state.creation,
		spellCount: state.creation.spellCount + 1
	};
	return {
		...state,
		spells,
		creation
	};
};


module.exports = {
	addSpell,
	removeSpell
}