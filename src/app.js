import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import AppLayout from './components/AppLayout/AppLayout'
import Creation from './components/Creation/Creation'
import PrioritiesList from './components/PrioritiesList/PrioritiesList'
import MetatypePicker from './components/MetatypePicker/MetatypePicker'
import MagicTypes from './components/MagicTypes/MagicTypes'
import Attributes from './components/Attributes/Attributes'
import QualityPicker from './components/Qualities/QualityPicker'
import SkillsPicker from './components/Skills/SkillsPicker'
import SpellsPicker from './components/Spells/SpellsPicker'
import EquipmentPicker from './components/Equipment/EquipmentPicker'
import WarePicker from './components/Ware/WarePicker'
import CharacterSheet from './components/CharacterSheet'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore()


// Required for replaying actions from devtools to work

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Router history={history}>
          <Route path="/" component={AppLayout}>
            <IndexRoute component={PrioritiesList}/>
            <Route path="creation" component={Creation}>
              <Route path="priority" component={ PrioritiesList } />
              <Route path="metatype" component={ MetatypePicker } />
              <Route path="magic" component={ MagicTypes } />
              <Route path="attributes" component={ Attributes } />
              <Route path="qualities" component={ QualityPicker } />
              <Route path="skills" component={ SkillsPicker } />
              <Route path="spells" component={ SpellsPicker } />
              <Route path="ware" component={ WarePicker } />
              <Route path="equipment" component={ EquipmentPicker } />


            </Route>
            <Route path="sheet" component={ CharacterSheet } />
          </Route>
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
