import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Priority from '../Priority/Priority.jsx';
import * as metatypeActionCreators from '../../actions/MetatypeActions';
import priorityStats from '../../constants/StatsForPriorities';
import css from './metatype.picker.scss';
import MetatypeItem from '../MetatypeItem/MetatypeItem.jsx';

const mapStateToProps = (state) => {
	let propList = {
		availableMetatypes: []
	};
	if(state.character.creation && state.character.creation.availableMetatypes) {
		propList = {
			availableMetatypes: state.character.creation.availableMetatypes
		};
	}
	return propList;

};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		selectMetatype: metatypeActionCreators.selectMetatype
	}, dispatch);
};

class MetatypePickerComponent extends React.Component {

	render() {
		const metatypes = this.props.availableMetatypes
			.map((metatype) => {
				return (<MetatypeItem key={metatype.id} metatypeData={metatype} selectMetatype={() => {
					this.props.selectMetatype(metatype);
				}} />);
			});
		return (<div>
			<h2>Metatype</h2>
			<div className="row"><div key="header" className="col-md-1">Metatype</div><div className="col-md-1">Special Attributes</div></div>
			{metatypes}
		</div>);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MetatypePickerComponent);