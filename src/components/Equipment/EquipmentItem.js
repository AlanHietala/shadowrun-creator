import React from 'react'
import PropTypes from 'prop-types'

const EquipmentItem = ({item}) => (<div>{item.name}</div>)

EquipmentItem.propTypes = {
  item: PropTypes.object,
}

export default EquipmentItem
