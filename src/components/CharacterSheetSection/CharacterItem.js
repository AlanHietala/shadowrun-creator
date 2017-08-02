import React from 'react'
import {ListItem} from 'material-ui/List'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import PropTypes from 'prop-types'

const CharacterItem = ({ItemComponent, item, handleRemoveItem}) => {
  return (
    <ListItem
      rightIcon={<ContentRemove />}
      onTouchTap={ handleRemoveItem }>
      <ItemComponent item={item} />
    </ListItem>
  )
}

CharacterItem.propTypes = {
  ItemComponent: PropTypes.element,
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func
}

export default CharacterItem
