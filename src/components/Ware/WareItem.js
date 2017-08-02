import React from 'react'
import PropTypes from 'prop-types'

const WareItem = ({item}) => (<div>{item.name}</div>)

WareItem.propTypes = {
  item: PropTypes.object,
}
export default WareItem
