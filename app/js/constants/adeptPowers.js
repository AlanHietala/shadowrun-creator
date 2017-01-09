import * as actionTypes from './actionTypes';
import * as characterAreaTypes from './characterAreaTypes';
import * as attributeTypes from './attributeTypes';
import * as limitTypes from './limitTypes';
import { skillMap } from './skills';


export default [
	{
		key: 'adrenalineBoost',
		name: 'Adrenaline Boost',
		cost: 0.25,
		activation: actionTypes.FREE_ACTION
	},
	{
		key: 'astralPerception',
		name: 'Astral Perception',
		cost: 1,
		activation: actionTypes.SIMPLE_ACTION
	},
	{
		key: 'attributeBoostStrength',
		name: 'Attribute Boost (Strength)',
		cost: 0.25,
		activation: actionTypes.SIMPLE_ACTION
	},
	{
		key: 'attributeBoostBody',
		name: 'Attribute Boost (Body)',
		cost: 0.25,
		activation: actionTypes.SIMPLE_ACTION
	},
	{
		key: 'attributeBoostAgility',
		name: 'Attribute Boost (Agility)',
		cost: 0.25,
		activation: actionTypes.SIMPLE_ACTION
	},
	{
		key: 'attributeBoostReaction',
		name: 'Attribute Boost (Reaction)',
		cost: 0.25,
		activation: actionTypes.SIMPLE_ACTION
	},
	{
		key: 'combatSense',
		name: 'Combat Sense',
		cost: 0.5,
		activation: 'None'
	},
	{
		key: 'criticalStrike',
		name: 'Critical Strike',
		cost: 0.5,
		affects: characterAreaTypes.SKILLS,
		affectsSkills: [skillMap.unarmedCombat, skillMap.clubs, skillMap.blades, skillMap.astralCombat, skillMap.exoticMeleeWeapon],
		activation: 'None'
	},
	{
		key: 'dangerSense',
		name: 'Danger Sense',
		cost: 0.25,
		activation: 'None'
	},
	{
		key: 'enhancedPerception',
		name: 'Enhanced Perception',
		cost: 0.5,
		activation: 'None'
	},
	{
		key: 'enhancedAccuracy',
		name: 'Enhanced Accuracy',
		cost: 0.25,
		affects: characterAreaTypes.SKILLS,
		affectsSkills: [skillMap.longarms, skillMap.pistols, skillMap.automatics, skillMap.throwingWeapon, skillMap.archery, skillMap.heavyWeapons, skillMap.clubs, skillMap.blades, skillMap.exoticMeleeWeapon],
		activation: 'None'
	},
	{
		key: 'improvedAbility',
		name: 'Improved Ability',
		cost: 0.5,
		affects: characterAreaTypes.SKILLS,
		affectsSkills: [skillMap.archery,
			skillMap.automatics,
			skillMap.blades,
			skillMap.clubs,
			skillMap.escapeArtist,
			skillMap.exoticMeleeWeapon,
			skillMap.exoticRangeWeapon,
			skillMap.gunnery,
			skillMap.gymnastics,
			skillMap.heavyWeapons,
			skillMap.locksmith,
			skillMap.longarms,
			skillMap.palming,
			skillMap.pistols,
			skillMap.sneaking,
			skillMap.throwingWeapon,
			skillMap.unarmedCombat,
			skillMap.diving,
			skillMap.freeFall,
			skillMap.pilotAerospace,
			skillMap.pilotAircraft,
			skillMap.pilotWalker,
			skillMap.pilotExoticVehicle,
			skillMap.pilotGroundCraft,
			skillMap.pilotWatercraft,
			skillMap.running,
			skillMap.swimming,
			skillMap.con,
			skillMap.etiquette,
			skillMap.instruction,
			skillMap.intimidation,
			skillMap.leadership,
			skillMap.negotiation,
			skillMap.performance,
			skillMap.impersonation,
			skillMap.animalHandling,
			skillMap.artisan,
			skillMap.assensing,
			skillMap.disguise,
			skillMap.interestsKnowledge,
			skillMap.language,
			skillMap.navigation,
			skillMap.perception,
			skillMap.streetKnowledge,
			skillMap.tracking,
			skillMap.academicKnowledge,
			skillMap.aeronauticsMechanics,
			skillMap.arcane,
			skillMap.armorer,
			skillMap.automotiveMechanics,
			skillMap.biotechnology,
			skillMap.chemistry,
			skillMap.computer,
			skillMap.cybertechnology,
			skillMap.cybercombat,
			skillMap.demolitions,
			skillMap.electronicWarfare,
			skillMap.firstAid,
			skillMap.industrialMechanics,
			skillMap.hacking,
			skillMap.hardware,
			skillMap.medicine,
			skillMap.nauticalMechanics,
			skillMap.professionalKnowledge,
			skillMap.software,
			skillMap.forgery,
			skillMap.astralCombat,
			skillMap.survival],
		activation: 'None'
	},
	{
		key: 'improvedPhysicalAttribute',
		name: 'Improved Physical Attribute',
		cost: 1,
		affects: characterAreaTypes.ATTRIBUTES,
		affectsAttributes: [attributeTypes.STRENGTH, attributeTypes.AGILITY, attributeTypes.BODY, attributeTypes.REACTION]
	},
	{
		key: 'improvedPotential',
		name: 'Improved Physical Attribute',
		cost: 1,
		affects: characterAreaTypes.LIMITS,
		affectsLimits: [limitTypes.MENTAL_LIMIT, limitTypes.PHYSICAL_LIMIT, limitTypes.SOCIAL_LIMIT]
	},
]