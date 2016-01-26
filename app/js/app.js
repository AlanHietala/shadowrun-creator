import bootstrap from 'bootstrap-loader';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'redux-simple-router'
import configureStore from './store/configureStore';
import RootComponent from './components/RootComponent.jsx';


const store = configureStore();


// Required for replaying actions from devtools to work


ReactDOM.render(
	<Provider store={store}>
		<RootComponent />
	</Provider>,
	document.getElementById('app')
)