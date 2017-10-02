import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { characterSheetSelector } from '../../selectors/characterSelectors'
import CharacterSheetAttributes from './CharacterSheetAttributes'
import PrioritiesList from '../PrioritiesList'
import MetatypePicker from '../MetatypePicker'
import Qualities from '../Qualities'
import Skills from '../Skills'
import SkillGroupPicker from '../Skills/SkillGroupsPicker'
import Spells from '../Spells'
import Weapons from '../Weapons'
import AdeptPowers from '../AdeptPowers'
import Ware from '../Ware'
import Equipment from '../Equipment'
import Armor from '../Armor'
import * as magicTypes from '../../constants/magicTypes'
import MagicTypes from '../MagicTypes'

export class CharacterSheet extends React.Component {
  constructor(props) {
    super(props)
  }
  getMagicSection = (magicType) => {
    let magicSection = null
    if (magicType === magicTypes.ADEPT) {
      magicSection = (<AdeptPowers />)
    } else if (magicType === magicTypes.MAGICIAN ||
    magicType === magicTypes.ASPECTED_MAGICIAN) {
      magicSection = (<Spells/>)
    }
    return magicSection
  }

  render() {
    const {characterSheet} = this.props
    if (!characterSheet) {

      return (<div>
        <PrioritiesList />
        <MetatypePicker />
      </div>)
    } else {
      const magicSection = this.getMagicSection(characterSheet.magicType)
      return (
        <div>
          <PrioritiesList />
          <MetatypePicker />
          <MagicTypes />
          <CharacterSheetAttributes attributes={characterSheet} />
          <div style={styles.wrapper}>
            <Qualities />
            <Equipment />
            <Armor />
            <Weapons />
            { magicSection }
            <Ware />
            <Skills />
            <SkillGroupPicker />
          </div>
        </div>)
    }
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  section: {
    width: 300,
  },
}
CharacterSheet.propTypes = {
  characterSheet: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    characterSheet: characterSheetSelector(state),
  }
}


export default connect(mapStateToProps)(CharacterSheet)
