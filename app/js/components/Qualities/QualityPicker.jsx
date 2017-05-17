import React from 'react';
import { connect } from  'react-redux';
import { positiveQualities, negativeQualities} from '../../constants/qualities';
import {addQuality, removeQuality } from '../../actions/qualityActions';
import QualityList from './QualityList.jsx';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}

	handleOpen = () => {
		this.setState({
			open: true
		})
	}
	handleClose = () => {
		this.setState({
			open: false
		})
	}
	render() {
		const { selectedQualities, removeQuality, addQuality, karma } = this.props;
		const actions = [
			<FlatButton
				label="close"
				primary={true}
				onTouchTap={this.handleClose}
			/>];
		return (<div>
			Karma: { karma }
			<QualityList qualities={ selectedQualities } clickHandler={ removeQuality } buttonText="Remove"/>


			<Dialog actions={actions}
					modal={false}
					open={this.state.open}
					autoScrollBodyContent={true}
					onRequestClose={this.handleClose}>
				<QualityList qualities={ positiveQualities } clickHandler={ addQuality } buttonText="Add" />
				<QualityList qualities={ negativeQualities } clickHandler={ addQuality } buttonText="Add" />

			</Dialog>
			<FloatingActionButton onTouchTap={this.handleOpen}>
				<ContentAdd />
			</FloatingActionButton>
		</div>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QualityPicker);