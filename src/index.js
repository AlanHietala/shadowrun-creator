import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Foo from './components/FooComponent.jsx'
import AppLayout from './components/AppLayout/AppLayout.jsx'
import Creation from './components/Creation/Creation.jsx'
import PrioritiesList from './components/PrioritiesList/PrioritiesList.jsx'
import MetatypePicker from './components/MetatypePicker/MetatypePicker.jsx'
import MagicTypes from './components/MagicTypes/MagicTypes.jsx'
import Attributes from './components/Attributes/Attributes.jsx'
import QualityPicker from './components/Qualities/QualityPicker.jsx'
import SkillsPicker from './components/Skills/SkillsPicker.jsx'
import SpellsPicker from './components/Spells/SpellsPicker.jsx'
import EquipmentPicker from './components/Equipment/EquipmentPicker.jsx'
import WarePicker from './components/Ware/WarePicker.jsx'
import CharacterSheet from './components/CharacterSheet'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
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
