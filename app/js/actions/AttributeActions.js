import * as creationActionTypes from "../constants/CreationOptionActionTypes";

export function addAttribute(attribute) {
	return {
		type: creationActionTypes.ADD_ATTRIBUTE,
		payload: attribute
	}
}

export function subtractAttribute(attribute) {
	return {
		type: creationActionTypes.SUBTRACT_ATTRIBUTE,
		payload: attribute
	}
}
