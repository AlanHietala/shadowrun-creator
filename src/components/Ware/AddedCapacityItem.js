import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import Rating from '../Rating'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const AddedCapacityItem = ({item, handleChangeWareCapacityRating, handleRemoveItem, handleToggleCapacityOption, handleRatingChange}) => {
  const checkBoxes = item.availableOptions.map((option, index) => {
    const ratingSection = option.ratings && option.isInstalled ? <Rating
      ratings={option.ratings}
      onRatingChange={(ratingIndex) => {handleChangeWareCapacityRating(index, ratingIndex)}}
      value={option.rating}
    /> : null

    return (
      <div key={index} style={styles.option}>
        <Checkbox
          label={option.name}
          checked={option.isInstalled}
          onCheck={() => {
            handleToggleCapacityOption(index)
          }
          }
        />
        <div style={styles.ratingSection}>{ratingSection}</div>
        <Divider style={styles.divider} />
      </div>
    )
  })

  return (<Card>
    <CardHeader title={item.name}
      actAsExpander={true}
      showExpandableButton={true} />
    <CardText
      expandable={true}>
      <Rating ratings={item.ratings} onRatingChange={handleRatingChange} value={item.rating} />
      <Subheader>Options: [{item.remainingCapacity}]</Subheader>

      {checkBoxes}
      <CardActions>
        <FlatButton label="Remove" onTouchTap={handleRemoveItem}/>
      </CardActions>
    </CardText>
  </Card>)
}

const styles = {
  ratingSection: {
    marginLeft: 40,
  },
  option: {
    marginTop: 10,
  },
  divider: {
    marginTop: 10,
  },
}
AddedCapacityItem.propTypes = {
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func,
  handleToggleCapacityOption: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handleChangeWareCapacityRating: PropTypes.func,
}

export default AddedCapacityItem
