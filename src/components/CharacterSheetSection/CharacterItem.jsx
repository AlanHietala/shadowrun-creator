import React from 'react'
import {ListItem} from 'material-ui/List'
import ContentRemove from 'material-ui/svg-icons/content/remove'

export default ({ItemComponent, item, handleRemoveItem}) => {
  return (
    <ListItem
      rightIcon={<ContentRemove />}
      onTouchTap={ handleRemoveItem }>
      <ItemComponent item={item} />
    </ListItem>
  )
}
