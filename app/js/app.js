import bootstrap from 'bootstrap-loader';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import Foo from './components/FooComponent.jsx';
import AppLayout from './components/AppLayout/AppLayout.jsx';
import Creation from './components/Creation/Creation.jsx';
import PrioritiesList from './components/PrioritiesList/PrioritiesList.jsx';
import MetatypePicker from './components/MetatypePicker/MetatypePicker.jsx';
import MagicTypes from './components/MagicTypes/MagicTypes.jsx';
import Attributes from './components/Attributes/Attributes.jsx';

const store = configureStore();


// Required for replaying actions from devtools to work

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router history={history}>
				<Route path="/" component={AppLayout}>
					<IndexRoute component={Foo}/>
					<Route path="creation" component={Creation}>
						<Route path="priority" component={PrioritiesList} />
						<Route path="metatype" component={MetatypePicker} />
						<Route path="magic" component={MagicTypes} />
						<Route path="attributes" component={Attributes} />
					</Route> 
				</Route>
			</Router>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('app')
)