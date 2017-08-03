import React from 'react'
import {List} from 'material-ui/List'
import CharacterItem from './CharacterItem'
import PropTypes from 'prop-types'

const CharacterItems = ({ItemComponent, characterItems, handleRemoveItem}) => {
  const itemComponents = characterItems
    .map((item, index) => <CharacterItem key={index} ItemComponent={ItemComponent} item={item} handleRemoveItem={ () => { handleRemoveItem(index)} }/>)
  return (<List>
    {itemComponents}
  </List>)
}

CharacterItems.propTypes = {
  ItemComponent: PropTypes.func,
  characterItems: PropTypes.array,
  handleRemoveItem: PropTypes.func,
}

export default CharacterItems
