import React from 'react'
import { connect } from  'react-redux'
import spells from '../../constants/spells'
import SpellItem from './SpellItem.jsx'
import { addSpell, removeSpell } from '../../actions/spellActions'
import CharacterSheetSection from '../CharacterSheetSection'
import Paper from 'material-ui/Paper'
class SpellsPicker extends React.Component {
  render() {
    const { availableSpellCount, addSpell, removeSpell, chosenSpells } = this.props

    return (
      <Paper>
        <h2>Spells</h2>
        <div>Available Spells: {availableSpellCount}</div>
        <CharacterSheetSection sectionTitle={'Spells'}
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
    chosenSpells: state.character.spells
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SpellsPicker)
