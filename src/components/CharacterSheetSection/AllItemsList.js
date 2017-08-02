import React from 'react'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List'
import AddItem from './AddItem'
import PropTypes from 'prop-types'

const AllItemsList = ({title, allItems, handleAddItem, ItemComponent}) => {
  const itemList = allItems.map((item, index) => <AddItem key={index} item={item} handleAddItem={handleAddItem} ItemComponent={ItemComponent} />)
  return (<List>
    <Subheader>{title}</Subheader>
    {itemList}
  </List>)
}
AllItemsList.propTypes = {
  title: PropTypes.string,
  allItems: PropTypes.array,
  handleAddItem: PropTypes.func,
  ItemComponent: PropTypes.element,
}
