import React from 'react'
import PropTypes from 'prop-types'

const AdeptPowerItem = ({item}) => (<div> { item.name } </div>)

AdeptPowerItem.propTypes = {
  item: PropTypes.object,
}

export default AdeptPowerItem
