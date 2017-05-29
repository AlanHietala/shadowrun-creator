import React from 'react'
import { connect } from 'react-redux'
import { characterSheetSelector } from '../../selectors/characterSelectors'
import CharacterSheetAttributes from './CharacterSheetAttributes'
import Attributes from '../Attributes'
import Qualities from '../Qualities'
import Skills from '../Skills'
import Spells from '../Spells'
import Ware from '../Ware'
import Equipment from '../Equipment'

import {Tabs, Tab} from 'material-ui/Tabs'
export class CharacterSheet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {characterSheet} = this.props
    return (
			<div>
			<CharacterSheetAttributes attributes={characterSheet} />
				<Tabs>
					<Tab label="Attr">
						<Attributes />
					</Tab>
					<Tab label="Qual">
						<Qualities />
					</Tab>
					<Tab label="Equip">
						<Equipment />
					</Tab>
					<Tab label="Spells">
						<Spells/>
					</Tab>
					<Tab label="Ware">
						<Ware />
					</Tab>
					<Tab label="Skills">
						<Skills />
					</Tab>
				</Tabs>
			</div>)
  }
}

const mapStateToProps = (state) => {
  return {
    characterSheet: characterSheetSelector(state)
  }
}

const mapDispatchToProps =  (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet)