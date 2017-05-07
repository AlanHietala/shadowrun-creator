import { createSelector } from 'reselect';
import * as attributeTypes from '../constants/attributeTypes';
import * as modTypes from '../constants/modTypes';

export const resourcesSelector = state => {
	const initialResources = state.character.creation.availableResources;
	const listsOfThingsThatCostMoney = [state.character.items, state.character.ware];

	const spentResources = listsOfThingsThatCostMoney
		.map((listThatCostsMoney) => {
			return listThatCostsMoney.reduce((sum, item) => {
				return sum + item.cost;
			}, 0)
		})
		.reduce((resourcesLeft, cost) => {
			return resourcesLeft - cost
		}, initialResources);

	return spentResources;
}

export const strengthSelector = state => computeAttribute(state, attributeTypes.STRENGTH, modTypes.STRENGTH_MOD);
export const agilitySelector = state => computeAttribute(state, attributeTypes.AGILITY, modTypes.AGILITY_MOD);
export const willpowerSelector = state => computeAttribute(state, attributeTypes.WILLPOWER, modTypes.WILLPOWER_MOD);

export const magicSelector = state => computeAttribute(state, attributeTypes.MAGIC, modTypes.MAGIC_MOD);
export const bodySelector = state => computeAttribute(state, attributeTypes.BODY, modTypes.BODY_MOD);
export const reactionSelector = state => computeAttribute(state, attributeTypes.REACTION, modTypes.REACTION_MOD);
export const charismaSelector = state => computeAttribute(state, attributeTypes.CHARISMA, modTypes.CHARISMA_MOD);
export const intuitionSelector = state => computeAttribute(state, attributeTypes.INTUITION, modTypes.INTUITION_MOD);
export const logicSelector = state => computeAttribute(state, attributeTypes.LOGIC, modTypes.LOGIC_MOD);
export const essenceSelector = state => computeAttribute(state, attributeTypes.ESSENCE, modTypes.ESSENCE_MOD);

export const attributeSelector = createSelector([strengthSelector,
	agilitySelector,
willpowerSelector,
magicSelector,
bodySelector,
reactionSelector,
charismaSelector,
intuitionSelector,
logicSelector,
essenceSelector], (strength, agility, willpower, magic, body, reaction, charisma, intuition, logic, essence) => {
	return {
		strength,
		agility,
		willpower,
		magic,
		body,
		reaction,
		charisma,
		intuition,
		logic,
		essence
	}
});
// TODO: export const initiativeSelector = state => what goes here?

const createModReduce = modType => (acc, item) => {
	return acc + item.mods.reduce((acc, mod) => {
			return mod.modType === modType ? acc + mod.effect : acc;
		}, 0);
}

function computeAttribute(state, attributeType, modType) {
	const modReduceFn = createModReduce(modType);
	const base = state.character.attributes[attributeType].value;

	let mods = state.character.items
		.reduce(modReduceFn, 0);

	mods = state.character.ware
			.reduce(modReduceFn, mods)
	const computed = base + mods;

	return  {
		base,
		mods,
		computed
	}
}