import * as initialAttributes from '../constants/initialAttributes';

export default (state, action) => {
	return {
		...state,
		metatype: action.payload.metatype,
		attributes: {
			...state.attributes,
			...getInitialAttributesForMetatype(action.payload.id)
		},
		creation: {
			...state.creation,
			availableSpecialAttributePoints: action.payload.specialAttributePoints
		}
	};
};

const getInitialAttributesForMetatype = (metatypeId) => {
	let attributes = {};
	initialAttributes[metatypeId].forEach((attribute) => {
		attributes[attribute.key] = attribute;
	});


	return attributes;
};

