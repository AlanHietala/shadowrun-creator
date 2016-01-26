import { createStore, applyMiddleware, compose } from 'redux';
import { createDevTools } from 'redux-devtools'
import { persistState } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';

const finalCreateStore = compose(
	DevTools.instrument(),
	persistState(
		window.location.href.match(
			/[?&]debug_session=([^&]+)\b/
		)
	)
)(createStore);

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState);

	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers').default)
		);
	}

	return store;
}
