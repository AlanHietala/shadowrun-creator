import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import AddedCapacityItem from './AddedCapacityItem'
import Rating from '../Rating'
import WareGradeSelector from '../WareGradeSelector'
import { COUNT } from '../../constants/equipment/equipmentTypes'
import Count from '../Count'

const WareItem = ({item, handleRemoveItem, handleChangeCount, handleToggleCapacityOption, handleWareGradeChange, handleChangeCapacityRating, handleRatingChange}) => {

  if (item.availableOptions) {
    return (<AddedCapacityItem
      item={item}
      handleRatingChange={handleRatingChange}
      handleRemoveItem={handleRemoveItem}
      handleToggleCapacityOption={handleToggleCapacityOption}
      handleChangeCapacityRating={handleChangeCapacityRating}
      handleWareGradeChange={handleWareGradeChange}
    />)
  } else {
    const ratingSection = item.ratings ? <Rating ratings={item.ratings} onRatingChange={handleRatingChange} value={item.rating} /> : null
    const countSection = item.itemType === COUNT ? <Count count={item.count} onChange={(count) => handleChangeCount(count)} /> : null
    const gradeSection = item.grade ? <WareGradeSelector value={item.grade} onWareGradeChange={handleWareGradeChange} /> : null

    return (<Card>
      <CardHeader title={item.name}
        actAsExpander={true}
        showExpandableButton={true} />
      <CardText
        expandable={true}>
        {gradeSection}
        {ratingSection}
        {countSection}
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
  handleChangeCapacityRating: PropTypes.func,
  handleWareGradeChange: PropTypes.func,
  handleChangeCount: PropTypes.func,
}
export default WareItem
