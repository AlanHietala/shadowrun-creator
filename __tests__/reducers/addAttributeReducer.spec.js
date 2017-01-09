import addAttributeReducer from '../../app/js/reducers/addAttributeReducer';
import attributeActions from '../../app/js/actions/attributeActions';
import {ADD_ATTRIBUTE, SUBTRACT_ATTRIBUTE} from '../../app/js/constants/creationOptionActionTypes';

describe('Add Attribute Reducer', function () {
	it('should increase an attribute referenced by key if the type is ADD_ATTRIBUTE', function () {
		const initialState = {
			creation: {
				availableAttributePoints: 5,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
				value:1,
				minValue:1,
				maxValue:6
				}
			}
		};
		const stateAfter = {
			creation: {
				availableAttributePoints: 4,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:2,
					minValue:1,
					maxValue:6
				}
			}
		};
		const action = {
			type: ADD_ATTRIBUTE,
			payload: {
				key: 'strength'
			}
		};

		expect(addAttributeReducer(initialState, action)).toEqual(stateAfter);
	});

	it('should decrease available creation attribute points by one when an SUBTRACT_ATTRIBUTE is received', function () {
		const initialState = {
			creation: {
				availableAttributePoints: 5,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:2,
					minValue:1,
					maxValue:6
				}
			}
		};
		const stateAfter = {
			creation: {
				availableAttributePoints: 6,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:1,
					minValue:1,
					maxValue:6
				}
			}
		};

		const action = {
			type: SUBTRACT_ATTRIBUTE,
			payload: {
				key: 'strength'
			}
		};
		expect(addAttributeReducer(initialState, action)).toEqual(stateAfter);
	});

	it('should not make a change if there are no attribute points available', function () {
		const initialState = {
			creation: {
				availableAttributePoints: 0,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:2,
					minValue:1,
					maxValue:6
				}
			}
		};
		const stateAfter = {
			creation: {
				availableAttributePoints:0,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:2,
					minValue:1,
					maxValue:6
				}
			}
		};
		const action = {
			type: ADD_ATTRIBUTE,
			payload: {
				key: 'strength'
			}
		};
		expect(addAttributeReducer(initialState, action)).toEqual(stateAfter);
	});

	it('should not make a change if the attribute would bring it over the maximum allowed value', function () {
		const initialState = {
			creation: {
				availableAttributePoints: 5,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:6,
					minValue:1,
					maxValue:6
				}
			}
		};
		const stateAfter = {
			creation: {
				availableAttributePoints: 5,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:6,
					minValue:1,
					maxValue:6
				}
			}
		};
		const action = {
			type: ADD_ATTRIBUTE,
			payload: {
				key: 'strength'
			}
		};
		expect(addAttributeReducer(initialState, action)).toEqual(stateAfter);
	});

	it('should not make a change if the attribute would bring it under the allowed minimum', function () {
		const initialState = {
			creation: {
				availableAttributePoints: 5,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:1,
					minValue:1,
					maxValue:6
				}
			}
		};
		const stateAfter = {
			creation: {
				availableAttributePoints: 5,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:1,
					minValue:1,
					maxValue:6
				}
			}
		};
		const action = {
			type: SUBTRACT_ATTRIBUTE,
			payload: {
				key: 'strength'
			}
		};
		expect(addAttributeReducer(initialState, action)).toEqual(stateAfter);
	});

	it('should not make a change if another attribute is at its natural limit and this one is being incrased to its natural limit', function () {
		const initialState = {
			creation: {
				availableAttributePoints: 5,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:5,
					minValue:1,
					maxValue:6
				},
				intuition: {
					value:6,
					minValue:1,
					maxValue:6
				}
			}
		};
		const stateAfter = {
			creation: {
				availableAttributePoints: 5,
				availableSpecialAttributePoints: 2
			},
			attributes: {
				strength: {
					value:5,
					minValue:1,
					maxValue:6
				},
				intuition: {
					value:6,
					minValue:1,
					maxValue:6
				}
			}
		};
		const action = {
			type: ADD_ATTRIBUTE,
			payload: {
				key: 'strength'
			}
		};
		expect(addAttributeReducer(initialState, action)).toEqual(stateAfter);
	});
});