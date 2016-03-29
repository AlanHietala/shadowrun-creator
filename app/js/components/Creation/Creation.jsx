import React from 'react';
import { Link, browserHistory } from 'react-router';
import CreationSummary from '../CreationSummary/CreationSummary.jsx';
export default function Creation({children}) {

	return (<div>
			<CreationSummary />
			{children}
		</div>

	)

}

export default Creation;