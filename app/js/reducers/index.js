import { combineReducers } from 'redux';
import  priority from './PrioritySelector';
import character from './CharacterReducer';
import visibility from './VisibilityReducer';
const shadowrunApp = combineReducers({
	priority,
	character,
	visibility
});

export default shadowrunApp;