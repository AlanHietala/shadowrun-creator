import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectMagicType} from '../../actions/magicTypeActions'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import PropTypes from 'prop-types'

class MagicTypesComponent extends React.Component {

  render() {
    const {selectMagicType, magicClasses} = this.props
    if(magicClasses) {
      const magicTypeComponents = magicClasses
        .map((magicType) => {
          return (<RadioButton key={magicType.name} value={magicType} label={magicType.name} />)

        })
      return (
        <Card>
          <CardHeader
            title={'magic types'}
            actAsExpander={true}
            showExpandableButton={true} />
          <CardText
            expandable={true}>
            <RadioButtonGroup
              name="magicgroup"
              onChange={(event, value) => {
                selectMagicType(value)
              }}>
              {magicTypeComponents}
            </RadioButtonGroup>
          </CardText>
        </Card>)
    } else {
      return (<div>{'Can\'t select magic yet'}</div>)
    }
  }
}

const mapStateToProps = (state) => {
  let props = {}
  if(state.character.creation) {
    props = {
      magicClasses: state.character.creation.availableMagicOrResonanceClasses,
    }
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectMagicType: selectMagicType,
  }, dispatch)
}

MagicTypesComponent.propTypes = {
  selectMagicType: PropTypes.func,
  magicClasses: PropTypes.array,
  history: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(MagicTypesComponent)
