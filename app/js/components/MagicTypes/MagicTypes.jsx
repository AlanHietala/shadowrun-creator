import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectMagicType} from '../../actions/magicTypeActions';
import Magician from './Magician.jsx';
import AspectedMagician from './AspectedMagician.jsx';
import Technomancer from './Technomancer.jsx';
import Adept from './Adept.jsx';
import MysticAdept from './MysticAdept.jsx';
import { hashHistory } from 'react-router';

const mapStateToProps = (state) => {
	let props = {};
	if(state.character.creation) {
		props = {
			magicClasses: state.character.creation.availableMagicOrResonanceClasses
		};
	}
	return props;
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		selectMagicType: selectMagicType
	}, dispatch);
};

const getMagicComponent = (magicData, selectType) => {
	let magicType;
	switch (magicData.key) {
		case 'magician':
			magicType = (<Magician key={magicData.key} magicData={magicData} selectType={selectType} />);
			break;
		case 'mysticAdept':
			magicType = (<MysticAdept key={magicData.key} magicData={magicData} selectType={selectType} />);
			break;
		case 'technomancer':
			magicType = (<Technomancer key={magicData.key} magicData={magicData} selectType={selectType} />);
			break;
		case 'adept':
			magicType = (<Adept key={magicData.key} magicData={magicData} selectType={selectType} />);
			break;
		case 'aspectedMagician':
			magicType = (<AspectedMagician key={magicData.key} magicData={magicData} selectType={selectType} />);
			break;
		default:
			magicType = (<Magician key={magicData.key} magicData={magicData} selectType={selectType} />);
	}

	return magicType;
}

class MagicTypesComponent extends React.Component {

	render() {
		const {selectMagicType} = this.props;
		if(this.props.magicClasses) {
			const magicTypeComponents = this.props.magicClasses
					.map((magicType) => {
						return getMagicComponent(magicType, () => { selectMagicType(magicType); hashHistory.push('/creation/attributes') });

					});
			return (
					<div>
						<h2>Magic Class</h2>
						{magicTypeComponents}
					</div>);
		} else {
			return (<div>Can't select magic yet</div>);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MagicTypesComponent);

