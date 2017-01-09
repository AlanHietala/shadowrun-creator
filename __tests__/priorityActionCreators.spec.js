import expect, { createSpy, spyOn, isSpy } from 'expect'
import * as priorityActions from '../app/js/actions/PriorityActions';
import * as actionTypes from '../app/js/constants/priorityActionTypes';
import * as priorityValues from '../app/js/constants/priorityValues';
import deepFreeze from 'deep-freeze';

describe('Priority Action Creators', () => {
	describe('savePriorities Action Creator', () => {
		it('should create a SAVE_PRIORITIES action when all priorities are present', () => {

			const expectedAction =  {payload: { attributePriority: 'B', magicOrResonancePriority: 'C', metatypePriority: 'A', resourcesPriority: 'D', skillsPriority: 'E' }, type: 'SAVE_PRIORITIES' }
		const savePriorityAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
				priorityValues.PRIORITY_B,
				priorityValues.PRIORITY_C,
				priorityValues.PRIORITY_D,
				priorityValues.PRIORITY_E);

			expect(savePriorityAction).toEqual(expectedAction);

		});

		it('should return an error action if not all priorities are present', () => {
			const expectedAction = { payload: { attributePriority: 'B', magicOrResonancePriority: 'C', metatypePriority: 'A', resourcesPriority: 'D', skillsPriority: 'A' }, type: 'ERROR_NOT_ALL_PRIORITIES_PRESENT' }
			const savePriorityAction = priorityActions.savePriorities(priorityValues.PRIORITY_A,
				priorityValues.PRIORITY_B,
				priorityValues.PRIORITY_C,
				priorityValues.PRIORITY_D,
				priorityValues.PRIORITY_A);

			expect(savePriorityAction).toEqual(expectedAction);
		});

	});
});