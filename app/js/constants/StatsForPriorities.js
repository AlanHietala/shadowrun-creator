import * as priorityValues from "./PriorityValues";

let statsForPriorities = {
	getValuesForPriority(priorityType, priority) {
		if(priority !== priorityValues.PRIORITY_NONE) {
			return statsForPriorities[priority][priorityType];
		} else {
			return 'Nothing Selected'
		}
	}
};

statsForPriorities[priorityValues.PRIORITY_A] = {
		metatype:[
			{
				metatype: 'Human',
				specialAttributePoints: 9
			},
			{
				metatype: 'Elf',
				specialAttributePoints: 8
			},
			{
				metatype: 'Dwarf',
				specialAttributePoints: 7
			},
			{

				metatype: 'Ork',
				specialAttributePoints: 7
			},
			{
				metatype: 'Troll',
				specialAttributePoints: 5
			}
		],
		attributes: 24,
		magicOrResonance: {
			magician: {
				magic: 6,
				magicalSkills: {
					count: 2,
					rating: 5
				},
				spellCount: 10

			},
			mysticAdept: {
				magic: 6,
				magicalSkills: {
					count: 2,
					rating: 5
				},
				spellCount: 10
			},
			technomancer: {
				resonance: 6,
				resonanceSkills: {
					count: 2,
					rating: 5
				},
				complexFormCount: 5
			}
		},
		skills: {
			points: 46,
			groupPoints: 10

		},
		resources: 450000
	};

statsForPriorities[priorityValues.PRIORITY_B] = {
		metatype: [{
				metatype: 'Human',
				specialAttributePoints: 7
			},
			{
				metatype: 'Elf',
				specialAttributePoints: 6
			},
			{
				metatype: 'Dwarf',
				specialAttributePoints: 4
			},
			{
				metatype: 'Ork',
				specialAttributePoints: 4
			},
			{
				metatype: 'Troll',
				specialAttributePoints: 0
			}
		],
		attributes: 20,
		magicOrResonance: {
			magician: {
				magic: 4,
				magicalSkills: {
					count: 2,
					rating: 4
				},
				spellCount: 7

			},
			mysticAdept: {
				magic: 4,
				magicalSkills: {
					count: 2,
					rating: 4
				},
				spellCount: 7
			},
			technomancer: {
				resonance: 4,
				resonanceSkills: {
					count: 2,
					rating: 4
				},
				complexFormCount: 2
			},
			adept: {
				magic: 6,
				activeSkills: {
					count: 1,
					rating: 4
				}
			},
			aspectedMagician: {
				magic: 5,
				magicalSkillGroup: {
					count: 1,
					rating: 4
				}
			}
		},
		skills: {
			points: 36,
			groupPoints: 5

		},
		resources: 275000
	};

	statsForPriorities[priorityValues.PRIORITY_C] = {
		metatype: [
			{
				metatype: 'Human',
				specialAttributePoints: 5
			},
			{
				metatype: 'Elf',
				specialAttributePoints: 3
			},
			{
				metatype: 'Dwarf',
				specialAttributePoints: 1
			},
			{
				metatype: 'Ork',
				specialAttributePoints: 0
			}
		],
		attributes: 16,
		magicOrResonance: {
			magician: {
				magic: 3,
				magicalSkills: {
					count: 0,
					rating: 0
				},
				spellCount: 5

			},
			mysticAdept: {
				magic: 3,
				magicalSkills: {
					count: 0,
					rating: 0
				},
				spellCount: 5
			},
			technomancer: {
				resonance: 3,
				resonanceSkills: {
					count: 0,
					rating: 0
				},
				complexFormCount: 1
			},
			adept: {
				magic: 4,
				activeSkills: {
					count: 1,
					rating: 2
				}
			},
			aspectedMagician: {
				magic: 3,
				magicalSkillGroup: {
					count: 1,
					rating: 2
				}
			}
		},
		skills: {
			points: 28,
			groupPoints: 2

		},
		resources: 140000

	};
statsForPriorities[priorityValues.PRIORITY_D] = {
		metatype: [
			{
				metatype: 'Human',
				specialAttributePoints: 3
			},
			{
				metatype: 'Elf',
				specialAttributePoints: 0
			}
		],
		attributes: 14,
		magicOrResonance: {
			adept: {
				magic: 2,
				activeSkills: {
					count: 0,
					rating: 0
				}
			},
			aspectedMagician: {
				magic: 2,
				magicalSkillGroup: {
					count: 0,
					rating: 0
				}
			}
		},
		skills: {
			points: 22,
			groupPoints: 0

		},
		resources: 50000
	};
statsForPriorities[priorityValues.PRIORITY_E] = {
		metatype: [
			{
				metatype: 'Human',
				specialAttributePoints: 1
			}
		],
		attributes: 12,
		magicOrResonance: {

		},
		skills: {
			points: 18,
			groupPoints: 0

		},
		resources: 6000

	};

export default statsForPriorities;