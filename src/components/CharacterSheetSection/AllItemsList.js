import React from 'react'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List'
import AddItem from './AddItem.jsx'

export default ({title, allItems, handleAddItem, ItemComponent}) => {
  const itemList = allItems.map((item, index) => <AddItem key={index} item={item} handleAddItem={handleAddItem} ItemComponent={ItemComponent} />)
  return (<List>
    <Subheader>{title}</Subheader>
    {itemList}
  </List>)
}
