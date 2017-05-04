import React from 'react';
import {ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}
	handleTouchTap = (event) => {
		this.setState({
			open: true,
			anchorEl: event.currentTarget
		})
	}

	handleRequestClose = () => {
		this.setState({
			open: false
		})
	}

	render() {
		const {skill, modifyFn, addSpecializationFn, removeSpecializationFn} = this.props;

		const specializations = skill.specializations.map((specialization, index) => {
			return (<MenuItem primaryText={specialization} key={specialization}
							  onTouchTap={() => {
							  	addSpecializationFn(index);
								  this.handleRequestClose();
							  }}></MenuItem> )

		});

		const selectedSpecializations = skill.selectedSpecializations.map((specialization, index) => {

			return (    <Chip
				onRequestDelete={() => removeSpecializationFn(index)}
				style={styles.chip}
			>
				{specialization}
			</Chip>)
		});

		return (
			<ListItem style={styles.wrap}>

				<span>{ skill.points } - { skill.name }</span>
				<FlatButton style={styles.plusMinusButton} label="-" onTouchTap={(event) => {
					event.preventDefault();
					modifyFn(skill, -1);
				}}/>
				<FlatButton style={styles.plusMinusButton} label="+" onTouchTap={(event) => {
					event.preventDefault();
					modifyFn(skill, 1);
				}}/>

				<FlatButton
					onTouchTap={(event) => {
						event.preventDefault();
						this.handleTouchTap(event);
							}}
					label="+Specs"
				/>

				<div style={styles.outerWrap}><div style={styles.wrap}>{selectedSpecializations}</div></div>
				<Popover
					open={this.state.open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'left', vertical: 'top'}}
					onRequestClose={this.handleRequestClose}
				>
					<Menu>
						{specializations}
					</Menu>
				</Popover>
			</ListItem>
		)
	}
}

const styles = {
	chip: {
		marginLeft: 4
	},
	outerWrap: {
		display: 'inline-block'
	},
	wrap: {
		flexWrap: 'wrap',
		display:'flex',
		flexDirection: 'row'
	},
	plusMinusButton: {
		minWidth: '20px',
		color: 'green'
	}
}