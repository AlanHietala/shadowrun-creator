import React from 'react';
import { Link, browserHistory } from 'react-router'
export default function AppLayout({children}) {

		return (
			<div>
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" onClick={() => {browserHistory.push('/creation')}}>
							Shadowrun Creator
						</a>
					</div>
					<ul className="nav navbar-nav">
						<li><Link to="/creation/priority">Create Character</Link></li>
					</ul>
				</div>
			</nav>
			<div>{children}</div>
			</div>
		)

}

export default AppLayout;