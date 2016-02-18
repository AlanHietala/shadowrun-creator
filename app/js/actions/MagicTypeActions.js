import * as creationActionTypes from "../constants/CreationOptionActionTypes";
export function selectMagicType(magicType) {
	return {
		type: creationActionTypes.PICK_MAGIC_OR_RESONANCE_OPTION,
		payload: magicType
	}
}