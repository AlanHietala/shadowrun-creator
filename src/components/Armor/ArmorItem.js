import React from 'react'
import PropTypes from 'prop-types'

const ArmorItem = ({item}) => (<div>{item.name}</div>)

ArmorItem.propTypes = {
  item: PropTypes.object,
}

export default ArmorItem 
