import expect, { createSpy, spyOn, isSpy } from 'expect'
import * as priorityActions from '../app/js/actions/priorityActions';
import * as actionTypes from '../app/js/constants/priorityActionTypes';
import * as priorityValues from '../app/js/constants/priorityValues';
import deepFreeze from 'deep-freeze';
import priority from '../app/js/reducers/prioritySelector';

describe('Priority Actions', () => {
	it('should create an action to set metatype PrioritiesList', () => {
		const expectedAction = {
			type: actionTypes.SET_METATYPE_PRIORITY,
			payload: priorityValues.PRIORITY_A
		};

		expect(priorityActions.setMetatypePriority(priorityValues.PRIORITY_A)).toEqual(expectedAction);
	});

	it('should create an action to set attribute PrioritiesList', () => {
		const expectedAction = {
			type: actionTypes.SET_ATTRIBUTE_PRIORITY,
			payload: priorityValues.PRIORITY_A
		};

		expect(priorityActions.setAttributePriority(priorityValues.PRIORITY_A)).toEqual(expectedAction);
	});

	it('should create an action to set skills PrioritiesList', () => {
		const expectedAction = {
			type: actionTypes.SET_SKILLS_PRIORITY,
			payload: priorityValues.PRIORITY_A
		};

		expect(priorityActions.setSkillsPriority(priorityValues.PRIORITY_A)).toEqual(expectedAction);
	});

	it('should create an action to set resources PrioritiesList', () => {
		const expectedAction = {
			type: actionTypes.SET_RESOURCES_PRIORITY,
			payload: priorityValues.PRIORITY_A
		};

		expect(priorityActions.setResourcesPriority(priorityValues.PRIORITY_A)).toEqual(expectedAction);
	});
});