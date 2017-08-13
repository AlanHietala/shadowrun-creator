import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import Creation from './Creation/Creation'
import PrioritiesList from './PrioritiesList/PrioritiesList'
import CharacterSheet from './CharacterSheet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends React.Component {
  render() {
    return (<MuiThemeProvider>
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
    )
  }
}

export default App
