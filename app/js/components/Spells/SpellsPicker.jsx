import React from 'react';
import { connect } from  'react-redux';
import spells from '../../constants/spells';
import Spell from './Spell.jsx';
import { addSpell, removeSpell } from '../../actions/spellActions';
class SpellsPicker extends React.Component {
	render() {
		const { availableSpellCount, addSpell, removeSpell, chosenSpells } = this.props;

		const spellList = spells.map((spell, index) => {
			return (<Spell key={ spell.name } showAddButton={true} showRemoveButton={false} spell={ spell } clickAddFn={ () => addSpell(spell) } clickRemoveFn={ () => removeSpell(index) } />)
		});

		const chosenSpellList = chosenSpells.map((spell, index) => {
			return (<Spell key={ spell.name } showAddButton={false} showRemoveButton={true} spell={ spell } clickAddFn="" clickRemoveFn={ () => removeSpell(index) } />)

		});
		
		return (<div>
			<div className="row">
				<div className="col-md-12">spells to pick: { availableSpellCount }</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<h2>Chosen Spells</h2>
					{ chosenSpellList }
				</div>
				<div className="col-md-4">
					<h2>Spell List</h2>
					{ spellList }
				</div>
			</div>
		</div>)
	}
}

const mapStateToProps = (state) => {
	return {
		availableSpellCount: state.character.creation.spellCount,
		chosenSpells: state.character.spells
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addSpell: (spell) => {
			const addSpellAction = addSpell(spell);
			dispatch(addSpellAction);
		},
		removeSpell: (index) => {
			const removeSpellAction = removeSpell(index);
			dispatch(removeSpellAction);
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(SpellsPicker);