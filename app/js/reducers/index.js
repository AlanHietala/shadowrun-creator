import { combineReducers } from 'redux';
import  priority from './prioritySelector';
import character from './CharacterReducer';
import visibility from './visibilityReducer';
import wareList from './wareListReducer';
import equipmentList from './equipmentListReducer';

import { routerReducer } from 'react-router-redux';
const shadowrunApp = combineReducers({
	priority,
	character,
	wareList,
	equipmentList,
	visibility,
	routing: routerReducer
});

export default shadowrunApp;