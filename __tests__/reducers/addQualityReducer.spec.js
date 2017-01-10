import addQualityReducer from '../../app/js/reducers/quality';
import {ADD_QUALITY, REMOVE_QUALITY} from '../../app/js/constants/qualityActionTypes';

describe('quality Reducer', function () {
	it('should add a quality to the list referenced by the payload', function () {
		const initialState = {
			qualities: [],
			karma: 20
		}
		const stateAfter = {
			qualities: [
				{
					name: 'Astral Chameleon',
					karmaCost: 10
				}
			],
			karma: 10
		}

		const action = {
			type: ADD_QUALITY,
			payload: {
				name: 'Astral Chameleon',
				karmaCost: 10
			}

		}
		expect(addQualityReducer(initialState, action)).toEqual(stateAfter);
	});

	it('should not add a quality if the cost is greater than the available karma', function () {
		const initialState = {
			qualities: [],
			karma: 8
		}
		const stateAfter = {
			qualities: [],
			karma: 8
		}

		const action = {
			type: ADD_QUALITY,
			payload: {
				name: 'Astral Chameleon',
				karmaCost: 10
			}

		}
		expect(addQualityReducer(initialState, action)).toEqual(stateAfter);
	});





});