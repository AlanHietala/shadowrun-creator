import { combineReducers } from 'redux';
import  priority from './PrioritySelector';
import character from './CharacterReducer';
import visibility from './VisibilityReducer';
import { routerReducer } from 'react-router-redux';
const shadowrunApp = combineReducers({
	priority,
	character,
	visibility,
	routing: routerReducer
});

export default shadowrunApp;