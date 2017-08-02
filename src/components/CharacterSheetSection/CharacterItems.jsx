import React from 'react'
import {List} from 'material-ui/List'
import CharacterItem from './CharacterItem.jsx'

export default ({ItemComponent, characterItems, handleRemoveItem}) => {
  const itemComponents = characterItems
    .map((item, index) => <CharacterItem key={item.key} ItemComponent={ItemComponent} item={item} handleRemoveItem={ () => { handleRemoveItem(index)} }/>)
  return (<List>
    {itemComponents}
  </List>)
}
