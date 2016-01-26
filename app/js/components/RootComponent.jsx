import React from 'react';
import PrioritiesList from './PrioritiesList/PrioritiesList.jsx';
import DevTools from '../containers/DevTools';


export default class RootComponent extends React.Component {
	render() {

		return (<div><PrioritiesList />
				<DevTools /></div>
		);
	}
}


