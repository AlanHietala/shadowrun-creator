import { createStore, compose } from 'redux'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    )

  }

  return store
}
