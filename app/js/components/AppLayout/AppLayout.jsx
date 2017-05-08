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
		browserHistory.push(path);
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
					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/metatype')} value="metatype">Metatype</MenuItem>
					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/magic')}value="magic">Magic</MenuItem>
					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/attributes')}value="attributes">Attributes</MenuItem>
					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/qualities')}value="qualities">Qualities</MenuItem>
					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/skills')}value="skills">Skills</MenuItem>
					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/spells')}value="spells">Spells</MenuItem>
					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/ware')}value="ware">Ware</MenuItem>
					<MenuItem onTouchTap={() => this.handleMenuItemSelected('/creation/equipment')}value="equipment">Equipment</MenuItem>

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