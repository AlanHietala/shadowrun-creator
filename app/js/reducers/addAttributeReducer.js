import * as creationOptionActionTypes from  '../constants/creationOptionActionTypes';

export default (state, action) => {
	const valueToAdd = action.type === creationOptionActionTypes.ADD_ATTRIBUTE ? 1 : -1;
	const attributeToSet = state.attributes[action.payload.key];
	const { creation } = state;
	const isSpecialAttribute = action.payload.isSpecialAttribute;
	const availableAttributePoints = isSpecialAttribute ?
		creation.availableSpecialAttributePoints : creation.availableAttributePoints ;
	const newAttributeValue = attributeToSet.value + valueToAdd;
	const newAvailableAttributePoints = availableAttributePoints - valueToAdd;
	let newState = state;
	if(isAttributeChangeValid(state, attributeToSet, newAttributeValue, newAvailableAttributePoints)) {
		newState = setAttribute(state, action, attributeToSet, newAttributeValue);
		newState = addAttributePoint(-valueToAdd, newState, isSpecialAttribute);
	}

	return newState;
}



const addAttributePoint = (pointsToAdd, state, isSpecialAttribute) => {
	let creation = null;

	if(isSpecialAttribute) {

		creation = {
			...state.creation,
			availableSpecialAttributePoints: state.creation.availableSpecialAttributePoints + pointsToAdd
		}
	} else {
		creation = {
			...state.creation,
			availableAttributePoints: state.creation.availableAttributePoints + pointsToAdd
		}
	}

	return {
		...state,
		creation
	}
};

const setAttribute = (state, action, attributeToSet, value) => {
	let newState = {
		...state,
		attributes: {
			...state.attributes
		}
	};

	newState.attributes[action.payload.key] = {
		...attributeToSet,
		value
	};
	return newState;
};

const isAttributeChangeValid = (state, attributeToSet, newAttributeValue, newAvailableAttributePoints) => {
	let isValid = false;
	const changeWithinRange = attributeToSet.minValue <= newAttributeValue
		&& newAttributeValue <= attributeToSet.maxValue
		&& newAvailableAttributePoints >= 0;

	if(changeWithinRange) {
		if(isAttributeBeingIncreasedToNaturalLimit(attributeToSet, newAttributeValue)) {
			isValid = !isAnyAttributeAtNaturalLimit(state);
		} else {
			isValid = true;
		}
	}

	return isValid;
};

const isAttributeBeingIncreasedToNaturalLimit = (attributeToSet, newAttributeValue) => {
	return attributeToSet.maxValue === newAttributeValue;
};

const isAnyAttributeAtNaturalLimit = (state) => {
	let foundAttributeAtNaturalLimit = false;
	for(let key in state.attributes) {
		const attribute = state.attributes[key];
		if(attribute.key !== 'essence' && attribute.key !== 'racial') {
			if(attribute.maxValue === attribute.value) {
				foundAttributeAtNaturalLimit = true;
				break;
			}
		}
	}

	return foundAttributeAtNaturalLimit;
};