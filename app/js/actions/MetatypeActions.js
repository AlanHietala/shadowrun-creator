import * as metatypeActionTypes from "../constants/CreationOptionActionTypes";

export function selectMetatype(metatype) {
	return {
		type: metatypeActionTypes.PICK_METATYPE_OPTION,
		metatype: metatype
	}
}