import React from 'react';
import {Link, browserHistory} from 'react-router'
import AppBar from 'material-ui/AppBar'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

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

	handleMenuItemSelected = (event) => {
		browserHistory.push('/creation/priority');
		this.setState({
			open: false
		})
	}

	render() {
		const { children } = this.props;
		return (
			<div>
				<AppBar
					title="Shadowrun Creator"
					onLeftIconButtonTouchTap={this.handleOpenMenu}>
				</AppBar>
				<li><Link to="/creation/priority">Create Character</Link></li>

				<Popover
					open={this.state.open}
					anchorEl={this.state.menuAnchor}
					anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'left', vertical: 'top'}}
					onRequestClose={this.handleCloseMenu}
					animation={PopoverAnimationVertical}
				>
					<Menu
						onItemTouchTap={this.handleMenuItemSelected}>
						<MenuItem primaryText="Create Character" />

					</Menu>
				</Popover>
				<div>{children}</div>
			</div>
		)
	}

}