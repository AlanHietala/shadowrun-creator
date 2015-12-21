import {combineReducers} from 'redux';
import  priority from 'Priority';
import resources from 'Resources';

const shadowrunApp = combineReducers({
	priority,
	resources
});


module.exports = shadowrunApp;
