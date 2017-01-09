import * as priorityValues from "./priorityValues";
import * as attributeTypes from './attributeTypes';

let statsForPriorities = {
	getValuesForPriority(priorityType, priority) {
		if (priority !== priorityValues.PRIORITY_NONE) {
			return statsForPriorities[priority][priorityType];
		} else {
			return 'Nothing Selected'
		}
	}
};

statsForPriorities[priorityValues.PRIORITY_A] = {
	metatype: [
		{
			id: 'human', metatype: 'Human',
			specialAttributePoints: 9
		},
		{
			id: 'elf', metatype: 'Elf',
			specialAttributePoints: 8
		},
		{
			id: 'dwarf', metatype: 'Dwarf',
			specialAttributePoints: 7
		},
		{

			id: 'ork', metatype: 'Ork',
			specialAttributePoints: 7
		},
		{
			id: 'troll', metatype: 'Troll',
			specialAttributePoints: 5
		}
	],
	attributes: 24,
	magicOrResonance: [
		{
			key: 'magician',
			name: 'Magician',
			magic: 6,
			bonusSkills: {
				attributeType: attributeTypes.MAGIC,
				count: 2,
				rating: 5
			},
			spellCount: 10


		},
		{
			key: 'mysticAdept',
			name: 'Mystic Adept',
			magic: 6,
			bonusSkills: {
				attributeType: attributeTypes.MAGIC,
				count: 2,
				rating: 5
			},
			spellCount: 10

		},
		{
			key: 'technomancer',
			name: 'Technomancer',
			resonance: 6,
			bonusSkills: {
				attributeType: attributeTypes.RESONANCE,
				count: 2,
				rating: 5
			},
			complexFormCount: 5

		}
	],
	skills: {
		points: 46,
		groupPoints: 10

	},
	resources: 450000
};

statsForPriorities[priorityValues.PRIORITY_B] = {
	metatype: [{
		id: 'human', metatype: 'Human',
		specialAttributePoints: 7
	},
		{
			id: 'elf', metatype: 'Elf',
			specialAttributePoints: 6
		},
		{
			id: 'dwarf', metatype: 'Dwarf',
			specialAttributePoints: 4
		},
		{
			id: 'ork', metatype: 'Ork',
			specialAttributePoints: 4
		},
		{
			id: 'troll', metatype: 'Troll',
			specialAttributePoints: 0
		}
	],
	attributes: 20,
	magicOrResonance: [
		 {
			key: 'magician',
			name: 'Magician',
			magic: 4,
			bonusSkills: {
				attributeType: attributeTypes.MAGIC,
				count: 2,
				rating: 4

			},
			 spellCount: 7


		},
		 {
			key: 'mysticAdept',
			name: 'Mystic Adept',
			magic: 4,
			 bonusSkills: {
				attributeType: attributeTypes.MAGIC,
				count: 2,
				rating: 4
			},
			 spellCount: 7

		},
		 {
			key: 'technomancer',
			name: 'Technomancer',
			resonance: 4,
			 bonusSkills: {
				attributeType: attributeTypes.RESONANCE,
				count: 2,
				rating: 4,

			},
			 complexFormCount: 2

		},
		 {
			key: 'adept',
			name: 'Adept',
			magic: 6,
			activeSkills: {
				count: 1,
				rating: 4
			}
		},
		{
			key: 'aspectedMagician',
			name: 'Aspected Magician',
			magic: 5,
			bonusSkillGroup: {
				attributeType: attributeTypes.MAGIC,
				count: 1,
				rating: 4
			}
		}
	],
	skills: {
		points: 36,
		groupPoints: 5

	},
	resources: 275000
};

statsForPriorities[priorityValues.PRIORITY_C] = {
	metatype: [
		{
			id: 'human', metatype: 'Human',
			specialAttributePoints: 5
		},
		{
			id: 'elf', metatype: 'Elf',
			specialAttributePoints: 3
		},
		{
			id: 'dwarf', metatype: 'Dwarf',
			specialAttributePoints: 1
		},
		{
			id: 'ork', metatype: 'Ork',
			specialAttributePoints: 0
		}
	],
	attributes: 16,
	magicOrResonance: [
		{
			key: 'magician',
			name: 'Magician',
			magic: 3,
			magicalSkills: {
				attributeType: attributeTypes.MAGIC,
				count: 0,
				rating: 0

			},
			spellCount: 5


		},
		{
			key: 'mysticAdept',
			name: 'Mystic Adept',
			magic: 3,
			magicalSkills: {
				attributeType: attributeTypes.MAGIC,
				count: 0,
				rating: 0
			},
			spellCount: 5

		},
		{
			key: 'technomancer',
			name: 'Technomancer',
			resonance: 3,
			resonanceSkills: {
				attributeType: attributeTypes.RESONANCE,
				count: 0,
				rating: 0
			},
			complexFormCount: 1

		},
		{
			key: 'adept',
			name: 'Adept',
			magic: 4,
			activeSkills: {
				count: 1,
				rating: 2
			}
		},
		{
			key: 'aspectedMagician',
			name: 'Aspected Magician',
			magic: 3,
			bonusSkillGroup: {
				attributeType: attributeTypes.MAGIC,
				count: 1,
				rating: 2
			}
		}
	],
	skills: {
		points: 28,
		groupPoints: 2

	},
	resources: 140000

};
statsForPriorities[priorityValues.PRIORITY_D] = {
	metatype: [
		{
			id: 'human', metatype: 'Human',
			specialAttributePoints: 3
		},
		{
			id: 'elf', metatype: 'Elf',
			specialAttributePoints: 0
		}
	],
	attributes: 14,
	magicOrResonance: [
		{
			key: 'adept',
			name: 'Adept',
			magic: 2,
			activeSkills: {
				count: 0,
				rating: 0
			}
		},
		{
			key: 'aspectedMagician',
			name: 'Aspected Magician',
			magic: 2,
			bonusSkillGroup: {
				attributeType: attributeTypes.MAGIC,
				count: 0,
				rating: 0
			}
		}
	],
	skills: {
		points: 22,
		groupPoints: 0

	},
	resources: 50000
};
statsForPriorities[priorityValues.PRIORITY_E] = {
	metatype: [
		{
			id: 'human', metatype: 'Human',
			specialAttributePoints: 1
		}
	],
	attributes: 12,
	magicOrResonance: [],
	skills: {
		points: 18,
		groupPoints: 0

	},
	resources: 6000

};

export default statsForPriorities;