import * as metatypeActionTypes from "../constants/MetatypeActionTypes";

export function selectMetatype(metatype) {
	return {
		type: metatypeActionTypes.SELECT_METATYPE,
		metatype: metatype
	}
}