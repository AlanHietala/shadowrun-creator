import expect, { createSpy, spyOn, isSpy } from 'expect'
import * as priorityActions from '../app/js/actions/PriorityActions';
import * as actionTypes from '../app/js/constants/PriorityActionTypes';
import * as priorityValues from '../app/js/constants/PriorityValues';
import deepFreeze from 'deep-freeze';
import priority from '../app/js/reducers/Priority';

describe('Priority Actions', () => {
	it('should create an action to set metatype priority', () => {
		const expectedAction = {
			type: actionTypes.SET_METATYPE_PRIORITY,
			priority: priorityValues.PRIORITY_A
		};

		expect(priorityActions.setMetatypePriority(priorityValues.PRIORITY_A)).toEqual(expectedAction);
	});

	it('should create an action to set attribute priority', () => {
		const expectedAction = {
			type: actionTypes.SET_ATTRIBUTE_PRIORITY,
			priority: priorityValues.PRIORITY_A
		};

		expect(priorityActions.setAttributePriority(priorityValues.PRIORITY_A)).toEqual(expectedAction);
	});

	it('should create an action to set skills priority', () => {
		const expectedAction = {
			type: actionTypes.SET_SKILLS_PRIORITY,
			priority: priorityValues.PRIORITY_A
		};

		expect(priorityActions.setSkillsPriority(priorityValues.PRIORITY_A)).toEqual(expectedAction);
	});

	it('should create an action to set resources priority', () => {
		const expectedAction = {
			type: actionTypes.SET_RESOURCES_PRIORITY,
			priority: priorityValues.PRIORITY_A
		};

		expect(priorityActions.setResourcesPriority(priorityValues.PRIORITY_A)).toEqual(expectedAction);
	});

});

describe('Priority Reducer', () => {
	describe('savePriorities Action', () => {
		it('should set the skills priority', () => {
			const stateBefore = {};
			const stateAfter = {
				metatypePriority: priorityValues.PRIORITY_A,
				attributePriority: priorityValues.PRIORITY_B,
				magicOrResonancePriority: priorityValues.PRIORITY_C,
				resourcesPriority: priorityValues.PRIORITY_D,
				skillsPriority: priorityValues.PRIORITY_E,
				saved: true
			};

			deepFreeze(stateBefore);
			deepFreeze(stateAfter);

			const savePriorityAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
					priorityValues.PRIORITY_B,
					priorityValues.PRIORITY_C,
					priorityValues.PRIORITY_D,
					priorityValues.PRIORITY_E);

			expect(priority(stateBefore, savePriorityAction)).toEqual(stateAfter);

		});
	});



})