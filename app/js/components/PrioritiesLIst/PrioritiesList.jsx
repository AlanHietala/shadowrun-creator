import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Priority from '../Priority/Priority.jsx';
import * as priorityValues from '../../constants/PriorityValues';
import * as priorityActionCreators from '../../actions/PriorityActions';
import priorityStats from '../../constants/StatsForPriorities';
import css from './priority.scss';

function createPriorityItem(id, name, priority) {
	return {
		id,
		name,
		priority,
		priorityInfo: priorityStats.getValuesForPriority(id, priority)
	}
}

const mapStateToProps = (state) => {
	const priorityItems = [
		createPriorityItem('attributes', 'Attributes', state.priority.attributes),
		createPriorityItem('skills', 'Skills', state.priority.skills),
		createPriorityItem('metatype', 'Metatype', state.priority.metatype),
		createPriorityItem('resources', 'Resources', state.priority.resources),
		createPriorityItem('magicOrResonance', 'Magic Or Resonance', state.priority.magicOrResonance)
	];

	const isValid = state.priority.valid;
	return {
		priorityItems,
		isValid
	}
};

class PrioritiesListComponent extends React.Component {

	render() {
		const { dispatch } = this.props;
		const boundActionCreators = bindActionCreators({onPriorityChange: priorityActionCreators.setPriorityForPriorityName}, dispatch)
		const priorityItems = this.props.priorityItems
		.map((item) => {
				return (<Priority
						key={item.id}
						priorityData={item}
						priorityChanged={boundActionCreators.onPriorityChange}
				/>)
			});
		return (
				<div>
					{priorityItems}
					<button className={`btn btn-default ${css.saveMargin}`} disabled={!this.props.isValid} >Save</button>
			</div>
					);
	}
}

export default connect(mapStateToProps)(PrioritiesListComponent);

