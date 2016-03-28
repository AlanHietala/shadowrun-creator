import bootstrap from 'bootstrap-loader';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import configureStore from './store/configureStore';
import RootComponent from './components/RootComponent.jsx';
import DevTools from './containers/DevTools';
import Foo from './components/FooComponent.jsx';
const store = configureStore();


// Required for replaying actions from devtools to work

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router history={history}>
				<Route path="/" component={RootComponent} />
				<Route path="/foo" component={Foo} />
			</Router>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('app')
)