import React from 'react'
import {ListItem} from 'material-ui/List'
import ContentAdd from 'material-ui/svg-icons/content/add'
import PropTypes from 'prop-types'

const AddItem = ({ItemComponent, item, handleAddItem}) => (<ListItem
  rightIcon={<ContentAdd />}
  onTouchTap={ () => handleAddItem(item) }>
  <ItemComponent item={item} />
</ListItem>)

AddItem.propTypes = {
  ItemComponent: PropTypes.func,
  item: PropTypes.object,
  handleAddItem: PropTypes.func,
}

export default AddItem
