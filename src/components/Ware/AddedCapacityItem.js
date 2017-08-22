import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'

const AddedCapacityItem = ({item, handleRemoveItem, handleAddCapacityOption, handleRemoveCapacityOption}) => {
  const checkBoxes = item.availableOptions.map((option, index) => {
    return (
      <Checkbox
        key={index}
        label={option.name}
        onCheck={(event, isInputChecked) => {
          if(isInputChecked) {
            handleAddCapacityOption()
          } else {
            handleRemoveCapacityOption()
          }
        }}
      />
    )
  })
  return (<Card>
    <CardHeader title={item.name}
      actAsExpander={true}
      showExpandableButton={true} />
    <CardText
      expandable={true}>
      {checkBoxes}
      <CardActions>
        <FlatButton label="Remove" onTouchTap={handleRemoveItem}/>
      </CardActions>
    </CardText>
  </Card>)
}
AddedCapacityItem.propTypes = {
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func,
  handleAddCapacityOption: PropTypes.func,
  handleRemoveCapacityOption: PropTypes.func,
}
export default AddedCapacityItem
