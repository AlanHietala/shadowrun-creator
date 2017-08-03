import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as metatypeActionCreators from '../../actions/metatypeActions'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class MetatypePickerComponent extends React.Component {

  render() {
    const {hasMagic, selectMetatype, availableMetatypes} = this.props
    const nextLink = hasMagic ? '/creation/magic' : '/sheet'
    const metatypes = availableMetatypes
      .map((metatype) => {
        return (<RadioButton
          key={metatype.metatype}
          value={metatype}
          label={`${metatype.metatype} (${metatype.specialAttributePoints})`}
        />)
      })
    return (<div>
      <h2>Metatype</h2>
      <RadioButtonGroup name="metatypegroup" onChange={(event, value) => {
        selectMetatype(value)
      }}>
        {metatypes}
      </RadioButtonGroup>
      <RaisedButton
        label="Save"
        primary={true}
        containerElement={<Link to={nextLink} />}
      />
    </div>)
  }
}

const mapStateToProps = (state) => {
  let propList = {
    availableMetatypes: [],
  }
  if(state.character.creation && state.character.creation.availableMetatypes) {
    propList = {
      availableMetatypes: state.character.creation.availableMetatypes,
      hasMagic: state.character.creation.availableMagicOrResonanceClasses.length > 0,
    }
  }
  return propList

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectMetatype: metatypeActionCreators.selectMetatype,
  }, dispatch)
}

MetatypePickerComponent.propTypes = {
  selectMetatype: PropTypes.func,
  availableMetatypes: PropTypes.array,
  hasMagic: PropTypes.bool,
  history: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(MetatypePickerComponent)
