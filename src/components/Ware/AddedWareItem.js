
import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import AddedCapacityItem from './AddedCapacityItem'

const WareItem = ({item, handleRemoveItem, handleToggleCapacityOption}) => {

  if (item.availableOptions) {
    return (<AddedCapacityItem
      item={item}
      handleRemoveItem={handleRemoveItem}
      handleToggleCapacityOption={handleToggleCapacityOption}
    />)
  } else {
    return (<Card>
      <CardHeader title={item.name}
        actAsExpander={true}
        showExpandableButton={true} />
      <CardText
        expandable={true}>
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
}
export default WareItem
