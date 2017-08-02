import React from 'react'
import PropTypes from 'prop-types'

const SpellItem = ({item}) =>  (<div> { item.name } </div>)

SpellItem.propTypes = {
  item: PropTypes.object
}

export default SpellItem
