import React from 'react';
import {Link, browserHistory} from 'react-router'
import AppBar from 'material-ui/AppBar'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'

export default class AppLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}

	handleOpenMenu = (event) => {
		event.preventDefault();
		this.setState({
			open: true,
			menuAnchor: event.currentTarget
		})
	}

	handleCloseMenu = () => {
		this.setState({
			open: false
		})
	}

	handleMenuItemSelected = (path) => {
		browserHistory.push('/creation/priority');
		this.setState({
			open: false
		})
	}

	render() {
		const { children } = this.props;
		return (
			<div>
				<Drawer docked={false}
						open={this.state.open}
						onRequestChange={(open) => this.setState({open})}>

					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/priority')}>Priorities</MenuItem>
					<MenuItem value="metatype">Metatype</MenuItem>
					<MenuItem value="magic">Magic</MenuItem>
					<MenuItem value="attributes">Attributes</MenuItem>
					<MenuItem value="qualities">Qualities</MenuItem>
					<MenuItem value="skills">Skills</MenuItem>
					<MenuItem value="spells">Spells</MenuItem>
				</Drawer>
				<AppBar
					title="Shadowrun Creator"
					onLeftIconButtonTouchTap={this.handleOpenMenu}>
				</AppBar>
				<Paper>{children}</Paper>
			</div>
		)
	}

}