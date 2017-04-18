import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Attribute from './Attribute.jsx';
import { browserHistory } from 'react-router';
import {addAttribute, subtractAttribute, addSpecialAttribute, subtractSpecialAttribute} from '../../actions/attributeActions';
import FlatButton from 'material-ui/FlatButton'

const mapStateToProps = (state) => {
	let props = {};
	if(state.character.attributes) {
		const {availableAttributePoints, availableSpecialAttributePoints} = state.character.creation;
		const availablePointsSum = availableSpecialAttributePoints + availableAttributePoints;
		props = {
			...state.character.attributes,
			specialAttributePoints: availableSpecialAttributePoints,
			attributePoints: availableAttributePoints,
			arePointsAvailable: availablePointsSum > 0
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
		return (<div>
			<span style={{width: '75px', display: 'inline-block'}}>{attribute.key}</span>
			<FlatButton label="-" onTouchTap={(event) => {
						event.preventDefault();
						subtractAttributeFn(attribute);
					}}/>
			{attribute.value}
			<FlatButton label="+"
				onTouchTap={(event) => {
					event.preventDefault();
					addAttributeFn(attribute);
				}}/>
		</div>);
};


class AttributesComponent extends React.Component {

	render() {
		const {arePointsAvailable, attributePoints, specialAttributePoints, body, agility, reaction, strength, willpower, logic, intuition, charisma, edge, essence, magic, resonance, racial, addAttribute, subtractAttribute} = this.props;

		if(body) {
			const {attributePoints, specialAttributePoints, body, agility, reaction, strength, willpower, logic, intuition, charisma, edge, essence, magic, resonance, racial, addAttribute, subtractAttribute} = this.props;
			const createAttribute = getAttributeCreator(addAttribute, subtractAttribute);
			const createSpecialAttribute = getAttributeCreator(addSpecialAttribute, subtractSpecialAttribute);
			let attributeList = [body, agility, reaction, strength, willpower, logic, intuition, charisma, edge, essence];

			if(magic) {
				attributeList.push(magic)
			} else if(resonance) {
				attributeList.push(resonance);
			}

			attributeList.push(racial);

			const attributeElements = attributeList.map((attributeData) => {
				const key = attributeData.key;
				return createAttribute(attributeData);
			});

			return (
				<div>
					<h2>Assign Attributes</h2>
					<div>Special Attribute Points Left: {specialAttributePoints} Attribute Points Left: {attributePoints}</div>
					<div>
					{attributeElements}
					</div>
					<button className="btn" disabled={arePointsAvailable} onClick={() => {browserHistory.push('/creation/skills');}}>Next</button>
				</div>);
		} else {
			return (<div>Can't Select Attributes yet</div>);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesComponent);

