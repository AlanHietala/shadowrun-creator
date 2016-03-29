import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Attribute from './Attribute.jsx';
import {addAttribute, subtractAttribute} from '../../actions/AttributeActions';

const mapStateToProps = (state) => {
	let props = {
		body: null,
		agility: null,
		reaction:  null,
		strength: null,
		willpower: null,
		logic: null,
		intelligence: null,
		charisma: null,
		edge:  null,
		essence: null,
		magic: null,
		resonance: null,
		racial:  null
	};

	if(state.character.attributes) {
		props = {
			specialAttributePoints: state.character.creation.availableSpecialAttributePoints,
			attributePoints: state.character.creation.availableAttributePoints,
			body: state.character.attributes.body,
			agility: state.character.attributes.agility,
			reaction: state.character.attributes.reaction,
			strength: state.character.attributes.strength,
			willpower: state.character.attributes.willpower,
			logic: state.character.attributes.logic,
			intelligence: state.character.attributes.intelligence,
			charisma: state.character.attributes.charisma,
			edge: state.character.attributes.edge,
			essence: state.character.attributes.essence,
			magic: state.character.attributes.magic,
			resonance: state.character.attributes.resonance,
			racial: state.character.attributes.racial
		}
	}

	return props;
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addAttribute: addAttribute,
		subtractAttribute: subtractAttribute
	}, dispatch);
};

const getAttributeCreator = (addAttributeFn, subtractAttributeFn) => (attribute)  => {
		return (<Attribute key={attribute.key}
						   attributeData={attribute}
						   addAttribute={() => {addAttributeFn(attribute)}}
						   subtractAttribute={() => {subtractAttributeFn(attribute)}}
		/>);
};


class AttributesComponent extends React.Component {

	render() {
		if(this.props.body) {
			const {attributePoints, specialAttributePoints, body, agility, reaction, strength, willpower, logic, intelligence, charisma, edge, essence, magic, resonance, racial, addAttribute, subtractAttribute} = this.props;
			const createAttribute = getAttributeCreator(addAttribute, subtractAttribute);
			let attributeList = [body, agility, reaction, strength, willpower, logic, intelligence, charisma, edge, essence];
			if(this.props.magic) {
				attributeList.push(magic)

			} else if(this.props.resonance) {
				attributeList.push(resonance);

			}

			attributeList.push(racial);

			const attributeElements = attributeList.map((attributeData) => {
				return createAttribute(attributeData);
			});

			return (
				<div>
					<h2>Assign Attributes</h2>
					<div>Special Attribute Points Left: {specialAttributePoints} Attribute Points Left: {attributePoints}</div>
				<div>
					{attributeElements}
				</div></div>);
		} else {
			return (<div>Can't Select Attributes yet</div>);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesComponent);

