import * as spellActions from '../constants/SpellActionTypes';
import { createAction } from 'redux-actions';

export const addSpell = createAction(spellActions.ADD_SPELL);

export const removeSpell = createAction(spellActions.REMOVE_SPELL);
