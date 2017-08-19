import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'

const WareItem = ({item}) => (<ListItem>{item.name}</ListItem>)

WareItem.propTypes = {
  item: PropTypes.object,
}
export default WareItem
