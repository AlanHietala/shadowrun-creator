import expect, { createSpy, spyOn, isSpy } from 'expect'
import * as priorityActions from '../app/js/actions/PriorityActions';
import * as actionTypes from '../app/js/constants/PriorityActionTypes';
import * as priorityValues from '../app/js/constants/PriorityValues';
import deepFreeze from 'deep-freeze';

describe('Priority Action Creators', () => {
	describe('savePriorities Action Creator', () => {
		it('should create a SAVE_PRIORITIES action when all priorities are present', () => {

			const expectedAction = {
				type: actionTypes.SAVE_PRIORITIES,
				metatypePriority: priorityValues.PRIORITY_A,
				attributePriority: priorityValues.PRIORITY_B,
				magicOrResonancePriority: priorityValues.PRIORITY_C,
				resourcesPriority: priorityValues.PRIORITY_D,
				skillsPriority: priorityValues.PRIORITY_E
			};
			const savePriorityAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
				priorityValues.PRIORITY_B,
				priorityValues.PRIORITY_C,
				priorityValues.PRIORITY_D,
				priorityValues.PRIORITY_E);

			expect(savePriorityAction).toEqual(expectedAction);

		});

		it('should return an error action if not all priorities are present', () => {
			const expectedAction = {
				type: actionTypes.ERROR_NOT_ALL_PRIORITIES_PRESENT
			};
			const savePriorityAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
				priorityValues.PRIORITY_B,
				priorityValues.PRIORITY_C,
				priorityValues.PRIORITY_D,
				priorityValues.PRIORITY_A);

			expect(savePriorityAction).toEqual(expectedAction);
		});

	});
});