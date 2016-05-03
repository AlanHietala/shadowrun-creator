import React from 'react';
import { connect } from  'react-redux';
import { positiveQualities, negativeQualities} from '../../constants/Qualities';
import QualityList from './QualityList.jsx';
import CharacterQualities from './CharacterQualities.jsx';

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
	return {
		removeQuality: (quality) => {
			
			//const removeQualityAction =
			//dispatch(removeQualityAction);
		}
	}
};

class QualityPicker extends React.Component {
	render() {
		return (<div>
			<CharacterQualities qualities={ selectedQualities } removeQuality={(quality) => { this.removeQuality(quality)}} />
			<QualityList qualities={ positiveQualities } title="Positive Qualities" />
			<QualityList qualities={ negativeQualities } title="Negative Qualities" />
		</div>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QualityPicker);