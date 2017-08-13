import React from 'react'
import PropTypes from 'prop-types'

const WeaponAccessories = ({weapon}) => {
  const {availableBarrelAccessories} = weapon
  const availableBarrelItems = availableBarrelAccessories.map(accessory => {
    return (
      <div key={accessory.key}>{accessory.name}</div>
    )
  })
  return (<div>
    {'Available Barrel:'}
    {availableBarrelItems}
  </div>)
}

WeaponAccessories.propTypes = {
  weapon: PropTypes.object,
}

export default WeaponAccessories
