import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route} from 'react-router-dom'
import configureStore from './store/configureStore'
import AppLayout from './components/AppLayout/AppLayout'
import Creation from './components/Creation/Creation'
import PrioritiesList from './components/PrioritiesList/PrioritiesList'
import CharacterSheet from './components/CharacterSheet'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore()

// Required for replaying actions from devtools to work


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <BrowserRouter>
          <AppLayout>
            <Route exact path="/" component={PrioritiesList}/>
            <Route path="/creation" component={Creation} />
            <Route path="/sheet" component={ CharacterSheet } />
          </AppLayout>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
