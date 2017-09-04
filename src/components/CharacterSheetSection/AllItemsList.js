import React from 'react'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List'
import AddItem from './AddItem'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

class AllItemsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterString: '',
    }
  }

  handleOnChange = (e) => {
    this.setState({
      filterString: e.target.value,
    })
  }

  render() {
    const {title, allItems, handleAddItem, ItemComponent} = this.props
    const filteredItems = allItems.filter(item => {
      const itemNameAndTags = [item.name.toLowerCase(), ...item.tags].join(' ')
      return this.state.filterString === ''
      || itemNameAndTags.indexOf(this.state.filterString) > -1
    })
    const itemList = filteredItems
      .map((item, index) => (<AddItem key={index}
        item={item}
        handleAddItem={handleAddItem}
        ItemComponent={ItemComponent}
      />))

    return (<List>
      <Subheader>{title}</Subheader>
      <TextField
        name={"search"}
        hintText={"search"}
        value={this.state.filterString}
        onChange={this.handleOnChange} />
      {itemList}
    </List>)
  }
}

AllItemsList.propTypes = {
  title: PropTypes.string,
  allItems: PropTypes.array,
  handleAddItem: PropTypes.func,
  ItemComponent: PropTypes.func,
}

export default AllItemsList
