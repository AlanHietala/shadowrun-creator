import React from 'react'
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {wareGrades} from '../../constants/ware/wareGrades'

const wareGradeComponents = wareGrades.map(grade => (<MenuItem key={grade} value={grade} primaryText={grade} />))
const WareGradeSelector = ({onWareGradeChange, value}) => {

  return (<SelectField
    floatingLabelText={'Grade'}
    onChange={(event, index, payload) => {onWareGradeChange(payload)}}
    value={value}
  >
    {wareGradeComponents}
  </SelectField>)
}

WareGradeSelector.propTypes = {
  onWareGradeChange: PropTypes.func,
  value: PropTypes.string,
}

export default WareGradeSelector
