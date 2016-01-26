import { combineReducers } from 'redux';
import PageReducer from './PageReducer';
import  priority from './PrioritySelector';
import resources from './Resources';
const shadowrunApp = combineReducers({
	priority,
	resources,
	PageReducer
});

export default shadowrunApp;