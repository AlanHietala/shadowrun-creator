import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore()

// Required for replaying actions from devtools to work


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, document.getElementById('root'))
  })
}

registerServiceWorker()
