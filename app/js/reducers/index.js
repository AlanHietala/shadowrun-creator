import { combineReducers } from 'redux';
import  priority from './prioritySelector';
import character from './CharacterReducer';
import visibility from './visibilityReducer';
import { routerReducer } from 'react-router-redux';
const shadowrunApp = combineReducers({
	priority,
	character,
	visibility,
	routing: routerReducer
});

export default shadowrunApp;