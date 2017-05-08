import * as modTypes from '../constants/modTypes';

const createModReduce = modType => (acc, item) => {
	return acc + item.mods.reduce((acc, mod) => {
			return mod.modType === modType ? acc + mod.effect : acc;
		}, 0);
}

const createItemCostGetter = modType => item => {
	return item.mods.reduce((acc, mod) => {
		return mod.modType === modType ? acc + mod.effect : acc;
	}, 0);
}
export const resourcesModReduce = createModReduce(modTypes.RESOURCES_MOD);
export const essenceModReduce = createModReduce(modTypes.ESSENCE_MOD);
export const strengthModReduce = createModReduce(modTypes.STRENGTH_MOD);
export const agilityModReduce = createModReduce(modTypes.AGILITY_MOD);
export const bodyModReduce = createModReduce(modTypes.BODY_MOD);
export const charismaModReduce = createModReduce(modTypes.CHARISMA_MOD);
export const initiativeModReduce = createModReduce(modTypes.INITIATIVE_MOD);
export const intuitionModReduce = createModReduce(modTypes.INTUITION_MOD);
export const logicModReduce = createModReduce(modTypes.LOGIC_MOD);
export const magicModReduce = createModReduce(modTypes.MAGIC_MOD);
export const reactionModReduce = createModReduce(modTypes.REACTION_MOD);
export const willpowerModReduce = createModReduce(modTypes.WILLPOWER_MOD);

export const getEssenceCostForItem = createItemCostGetter(modTypes.ESSENCE_MOD);
export const getResourceCostForItem = createItemCostGetter(modTypes.RESOURCES_MOD);

export const getModReduce = (modType) => {
	switch(modType) {
		case modTypes.RESOURCES_MOD:
			return resourcesModReduce;
		case modTypes.ESSENCE_MOD:
			return essenceModReduce;
		case modTypes.STRENGTH_MOD:
			return strengthModReduce;
		case modTypes.AGILITY_MOD:
			return agilityModReduce;
		case modTypes.BODY_MOD:
			return bodyModReduce;
		case modTypes.CHARISMA_MOD:
			return charismaModReduce;
		case modTypes.INITIATIVE_MOD:
			return initiativeModReduce;
		case modTypes.INTUITION_MOD:
			return intuitionModReduce;
		case modTypes.LOGIC_MOD:
			return logicModReduce;
		case modTypes.MAGIC_MOD:
			return magicModReduce;
		case modTypes.REACTION_MOD:
			return reactionModReduce;
		case modTypes.WILLPOWER_MOD:
			return willpowerModReduce;
	}
}


