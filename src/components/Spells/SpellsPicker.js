import React from 'react'
import { connect } from  'react-redux'
import spells from '../../constants/spells'
import SpellItem from './SpellItem'
import { addSpell, removeSpell } from '../../actions/spellActions'
import CharacterSheetSection from '../CharacterSheetSection'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

class SpellsPicker extends React.Component {
  render() {
    const { availableSpellCount, addSpell, removeSpell, chosenSpells } = this.props

    return (<Paper style={{minWidth: 300, flexGrow: 1, margin: 5}}>
      <h2>Spells</h2>
      <div>Available Spells: {availableSpellCount}</div>
      <CharacterSheetSection
        sectionTitle={'Spells'}
        characterSheetItems={chosenSpells}
        allItems={spells}
        handleAddItem={addSpell}
        handleRemoveItem={removeSpell}
        ItemComponent={SpellItem}
      />
    </Paper>)
  }
}

const mapStateToProps = (state) => {
  return {
    availableSpellCount: state.character.creation.spellCount,
    chosenSpells: state.character.spells,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSpell: (spell) => {
      const addSpellAction = addSpell(spell)
      dispatch(addSpellAction)
    },
    removeSpell: (index) => {
      const removeSpellAction = removeSpell(index)
      dispatch(removeSpellAction)
    },
  }
}

SpellsPicker.propTypes = {
  availableSpellCount: PropTypes.number,
  addSpell: PropTypes.func,
  removeSpell: PropTypes.func,
  chosenSpells: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(SpellsPicker)
