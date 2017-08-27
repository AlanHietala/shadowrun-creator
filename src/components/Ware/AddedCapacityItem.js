import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import Rating from '../Rating'

const AddedCapacityItem = ({item, handleRemoveItem, handleToggleCapacityOption, handleRatingChange}) => {
  const checkBoxes = item.availableOptions.map((option, index) => {
    return (
      <Checkbox
        key={index}
        label={option.name}
        checked={option.isInstalled}
        onCheck={() => {
          handleToggleCapacityOption(index)
        }
        }
      />
    )
  })

  return (<Card>
    <CardHeader title={item.name}
      actAsExpander={true}
      showExpandableButton={true} />
    <CardText
      expandable={true}>
      <div>Remaining Capacity: {item.remainingCapacity}</div>
      <Rating ratings={item.ratings} onRatingChange={handleRatingChange} value={item.rating} />
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
  handleToggleCapacityOption: PropTypes.func,
  handleRatingChange: PropTypes.func,
}

export default AddedCapacityItem
