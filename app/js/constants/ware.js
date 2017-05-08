import * as modTypes from './modTypes';
export default [
	{
		name: 'Reaction Enhancer 1',
		mods: [
			{
				modType: modTypes.REACTION_MOD,
				effect: 1
			},
			{
				modType: modTypes.ESSENCE_MOD,
				effect: -1
			},
			{
				modType: modTypes.RESOURCES_MOD,
				effect: 18000
			}
		]
	},
	{
		name: 'Muscle Toner 1',
		mods: [
			{
				modType: modTypes.STRENGTH_MOD,
				effect: 1
			},
			{
				modType: modTypes.ESSENCE_MOD,
				effect: -1
			},
			{
				modType: modTypes.RESOURCES_MOD,
				effect: 18000
			}
		]
	}
]