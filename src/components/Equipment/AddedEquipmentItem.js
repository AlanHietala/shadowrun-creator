import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import Rating from '../Rating'
import FlatButton from 'material-ui/FlatButton'
import { COUNT } from '../../constants/equipment/equipmentTypes'
import Count from '../Count'

const AddedEquipmentItem = ({ item, handleRemoveItem, handleRatingChange, handleChangeCount }) => {
  const ratingSection = item.ratings ? <Rating
    ratings={item.ratings}
    onRatingChange={(ratingIndex) => {handleRatingChange(ratingIndex)}}
    labelText={'Force'}
    value={item.rating} />: null

  const countSection = item.itemType === COUNT ? <Count count={item.count} onChange={(count) => handleChangeCount(count)} /> : null
  return (<Card>
    <CardHeader title={item.name}
      actAsExpander={true}
      showExpandableButton={true} />
    <CardText
      expandable={true}>
      {ratingSection}
      {countSection}
      <CardActions>
        <FlatButton label="Remove" onTouchTap={handleRemoveItem}/>
      </CardActions>
    </CardText>
  </Card>)
}

AddedEquipmentItem.propTypes = {
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handleChangeCount: PropTypes.func,
}

export default AddedEquipmentItem
