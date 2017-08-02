import React from 'react'
import PropTypes from 'prop-types'

const QualityItem  = ({item}) => <div>{item.name}</div>

QualityItem.propTypes = {
  item: PropTypes.object,
}

export default QualityItem
