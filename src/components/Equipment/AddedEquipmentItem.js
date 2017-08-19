import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const AddedEquipmentItem = ({item, handleRemoveItem}) => (
  <Card>
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

AddedEquipmentItem.propTypes = {
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func,
}

export default AddedEquipmentItem
