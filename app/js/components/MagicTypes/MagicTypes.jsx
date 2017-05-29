import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectMagicType} from '../../actions/magicTypeActions';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

class MagicTypesComponent extends React.Component {

	render() {
		const {selectMagicType} = this.props;
		if(this.props.magicClasses) {
			const magicTypeComponents = this.props.magicClasses
					.map((magicType) => {
						return (<RadioButton  value={magicType} label={magicType.name} />);

					});
			return (
					<div>
						<h2>Magic Class</h2>
						<RadioButtonGroup
							name="magicgroup"
							onChange={(event, value) => {
								selectMagicType(value);
						}}>
							{magicTypeComponents}
						</RadioButtonGroup>
						<RaisedButton
							label="Save"
							primary={true}
							onClick={() => {
								browserHistory.push('/sheet');
							}} />
					</div>);
		} else {
			return (<div>Can't select magic yet</div>);
		}
	}
}

const mapStateToProps = (state) => {
  let props = {};
  if(state.character.creation) {
    props = {
      magicClasses: state.character.creation.availableMagicOrResonanceClasses
    };
  }
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectMagicType: selectMagicType
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MagicTypesComponent);

