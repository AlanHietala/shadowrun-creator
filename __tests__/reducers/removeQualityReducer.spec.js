import removeQualityReducer from '../../app/js/reducers/quality';
import {REMOVE_QUALITY} from '../../app/js/constants/qualityActionTypes';

describe('removeQualityReducer', function () {
	it('should remove a quality at the index in the payload and refund the karma', function () {
		const initialState = {
			qualities: [
				{
					name: 'Astral Chameleon',
					karmaCost: 10
				},
				{
					name: 'Bar Cart',
					karmaCost: 7
				}
			],
			karma: 20
		}
		const stateAfter = {
			qualities: [
				{
					name: 'Astral Chameleon',
					karmaCost: 10
				}
			],
			karma: 27
		}

		const action = {
			type: REMOVE_QUALITY,
			payload: 1
		}
		expect(removeQualityReducer(initialState, action)).toEqual(stateAfter);
	});

});