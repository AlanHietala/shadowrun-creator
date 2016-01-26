import characterReducer from "../app/js/reducers/Character";
import * as priorityActions from "../app/js/actions/PriorityActions";
import * as priorityValues from "../app/js/constants/PriorityValues";
import statsForPriorities from "../app/js/constants/StatsForPriorities";
import * as metatypeActions from "../app/js/actions/MetatypeActions";
import deepFreeze from "deep-freeze";
import expect from "expect";

describe('Character Reducer', () => {
	describe('SAVE_PRIORITIES Action', () => {
		const savePrioritiesAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
		priorityValues.PRIORITY_B, priorityValues.PRIORITY_C, priorityValues.PRIORITY_D, priorityValues.PRIORITY_E)
		it('should set creation object correctly corresponding to the passed in priorities', () => {
			const stateBefore = {};
			const stateAfter = {
				creation: {
					availableMetatypes: statsForPriorities[priorityValues.PRIORITY_A].metatype,
					availableAttributePoints: statsForPriorities[priorityValues.PRIORITY_B].attributes,
					availableMagicOrResonanceClasses: statsForPriorities[priorityValues.PRIORITY_C].magicOrResonance,
					availableResources: statsForPriorities[priorityValues.PRIORITY_D].resources,
					availableSkillPoints: statsForPriorities[priorityValues.PRIORITY_E].skills
				}

			};

			deepFreeze(stateBefore);
			deepFreeze(stateAfter);

			expect(characterReducer(stateBefore, savePrioritiesAction)).toEqual(stateAfter);


		});

	});

	describe('SELECT_METATYPE action', () => {
		it('should set the default attribute values for the metatype', () => {
			const selectMetatypeAction = metatypeActions.selectMetatype(statsForPriorities[priorityValues.PRIORITY_A].metatype[0]);
			const stateBefore = {
				creation: {
					availableMetatypes: statsForPriorities[priorityValues.PRIORITY_A].metatype,
					availableAttributePoints: statsForPriorities[priorityValues.PRIORITY_B].attributes,
					availableMagicOrResonanceClasses: statsForPriorities[priorityValues.PRIORITY_C].magicOrResonance,
					availableResources: statsForPriorities[priorityValues.PRIORITY_D].resources,
					availableSkillPoints: statsForPriorities[priorityValues.PRIORITY_E].skills
				}
			};
			const stateAfter = {
				creation: {
					availableMetatypes: statsForPriorities[priorityValues.PRIORITY_A].metatype,
					availableAttributePoints: statsForPriorities[priorityValues.PRIORITY_B].attributes,
					availableMagicOrResonanceClasses: statsForPriorities[priorityValues.PRIORITY_C].magicOrResonance,
					availableResources: statsForPriorities[priorityValues.PRIORITY_D].resources,
					availableSkillPoints: statsForPriorities[priorityValues.PRIORITY_E].skills,
					availableSpecialAttributePoints: 9
				},
				attributes: {
					body: 1,
					bodyMax: 6,
					agility: 1,
					agilityMax: 6,
					reaction: 1,
					reactionMax: 6,
					strength: 1,
					strengthMax: 6,
					willpower: 1,
					willpowerMax: 6,
					logic: 1,
					LogicMax: 6,
					intelligence: 1,
					intelligenceMax: 6,
					charisma: 1,
					charismaMax: 6,
					edge: 2,
					edgeMax: 7,
					essence: 6
				},
				metatype: 'Human',
				racial: 'none'

			};

			deepFreeze(stateBefore);
			deepFreeze(stateAfter);

			expect(characterReducer(stateBefore, selectMetatypeAction)).toEqual(stateAfter);
		});
		it('should set the default available special attribute points for the metatype', () => {

		});


	});


});