import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { characterSheetSelector } from '../../selectors/characterSelectors'
import CharacterSheetAttributes from './CharacterSheetAttributes'
import Attributes from '../Attributes'
import Qualities from '../Qualities'
import Skills from '../Skills'
import Spells from '../Spells'
import AdeptPowers from '../AdeptPowers'
import Ware from '../Ware'
import Equipment from '../Equipment'
import * as magicTypes from '../../constants/magicTypes'
import {Tabs, Tab} from 'material-ui/Tabs'
import {Link} from 'react-router-dom'

export class CharacterSheet extends React.Component {
  constructor(props) {
    super(props)
  }
  getMagicSection = (magicType) => {
    let magicSection = null
    if (magicType === magicTypes.ADEPT) {
      magicSection = ( <Tab label="Powers">
        <AdeptPowers />
      </Tab>)
    } else if (magicType === magicTypes.MAGICIAN ||
    magicType === magicTypes.ASPECTED_MAGICIAN) {
      magicSection = ( <Tab label="Spells">
        <Spells/>
      </Tab>)
    }
    return magicSection
  }

  render() {
    const {characterSheet} = this.props
    if (!characterSheet) {
      return (<div>{'please set your '}<Link to={'/creation/priority'}>{'priorities'}</Link></div>)
    } else {
      const magicSection = this.getMagicSection(characterSheet.magicType)
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
            { magicSection }
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
}

CharacterSheet.propTypes = {
  characterSheet: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    characterSheet: characterSheetSelector(state),
  }
}


export default connect(mapStateToProps)(CharacterSheet)
