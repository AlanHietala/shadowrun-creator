import React from 'react';
import { connect } from  'react-redux';
import { positiveQualities, negativeQualities} from '../../constants/qualities';
import {addQuality, removeQuality } from '../../actions/qualityActions';
import QualityList from './QualityList.jsx';
import CharacterQualities from './CharacterQualities.jsx';

const mapStateToProps = (state) => {
	return {
		selectedQualities: state.character.qualities,
		karma: state.character.karma
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeQuality: (quality, index) => {
			const removeQualityAction = removeQuality(index)
			dispatch(removeQualityAction);
		},
		addQuality: (quality, index) => {
			const addQualityAction = addQuality(quality);
			dispatch(addQualityAction);
		}
	}
};

class QualityPicker extends React.Component {
	render() {
		const { selectedQualities, removeQuality, addQuality, karma } = this.props;
		return (<div>
			Karma: { karma }
			<QualityList qualities={ selectedQualities } clickHandler={ removeQuality } buttonText="Remove"/>
			<QualityList qualities={ positiveQualities } clickHandler={ addQuality } buttonText="Add" />
			<QualityList qualities={ negativeQualities } clickHandler={ addQuality } buttonText="Add" />
		</div>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QualityPicker);