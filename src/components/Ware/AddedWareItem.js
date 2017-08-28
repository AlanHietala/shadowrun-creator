
import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import AddedCapacityItem from './AddedCapacityItem'
import Rating from '../Rating'

const WareItem = ({item, handleRemoveItem, handleToggleCapacityOption, handleWareGradeChange, handleChangeWareCapacityRating, handleRatingChange}) => {

  if (item.availableOptions) {
    return (<AddedCapacityItem
      item={item}
      handleRatingChange={handleRatingChange}
      handleRemoveItem={handleRemoveItem}
      handleToggleCapacityOption={handleToggleCapacityOption}
      handleChangeWareCapacityRating={handleChangeWareCapacityRating}
      handleWareGradeChange={handleWareGradeChange}
    />)
  } else {
    const ratingSection = item.ratings ? <Rating ratings={item.ratings} onRatingChange={handleRatingChange} value={item.rating} /> : null
    return (<Card>
      <CardHeader title={item.name}
        actAsExpander={true}
        showExpandableButton={true} />
      <CardText
        expandable={true}>
        {ratingSection}
        <CardActions>
          <FlatButton label="Remove" onTouchTap={handleRemoveItem}/>
        </CardActions>
      </CardText>
    </Card>)
  }
}
WareItem.propTypes = {
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func,
  handleToggleCapacityOption: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handleChangeWareCapacityRating: PropTypes.func,
  handleWareGradeChange: PropTypes.func,
}
export default WareItem
