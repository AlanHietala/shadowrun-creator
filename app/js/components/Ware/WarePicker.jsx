import React from 'react';
import {connect} from 'react-redux';
import WareList from './WareList.jsx';
import CharacterWare from './CharacterWare.jsx';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { addWare, removeWare } from '../../actions/itemActions';
import wareList from '../../constants/ware';
import { characterWareSelector, wareListSelector } from '../../selectors/itemSelectors';
import {essenceSelector, resourcesSelector} from '../../selectors/characterSelectors';

class WarePicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}
	handleClose = () => {
		this.setState({
			open: false
		})
	}

	handleOpen = () => {
		this.setState({
			open: true
		})
	}

	render() {
		const {resources, essence} = this.props;
		const actions = [
			<FlatButton
				label="close"
				primary={true}
				onTouchTap={this.handleClose}
			/>];

			return (<Paper>
				<h2>Ware</h2>
				<span>essence: {essence.computed} resources: {resources}</span>
				<CharacterWare characterWare={this.props.characterWare} handleRemoveWare={this.props.handleRemoveWare}/>
				<Dialog actions={actions}
						modal={false}
						open={this.state.open}
						autoScrollBodyContent={true}
						onRequestClose={this.handleClose}>
					<WareList wareList={wareList} handleAddWare={this.props.handleAddWare} />

				</Dialog>
				<FloatingActionButton onTouchTap={this.handleOpen}>
					<ContentAdd />
				</FloatingActionButton>
			</Paper>)
	}

}
const style = {
	actionButton: {

	}
}
const mapStateToProps = (state) => {
	return {
		characterWare: characterWareSelector(state),
		essence: essenceSelector(state),
		resources: resourcesSelector(state),
		wareList: wareListSelector(state)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleAddWare: (ware) => {
			const addWareAction = addWare(ware);
			dispatch(addWareAction);
		},
		handleRemoveWare: (wareIndex) => {
			const removeWareAction = removeWare(wareIndex);
			dispatch(removeWareAction);
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(WarePicker);