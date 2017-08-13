import React from 'react'
import PropTypes from 'prop-types'

const makeAvailableAccessoryList = (availableAccessories) => {
  if (availableAccessories) {
    return availableAccessories.map(accessory => {
      const style = accessory.isInstalled ? styles.isInstalled : null
      return (
        <div style={style} key={accessory.key}>{accessory.name}</div>
      )
    })
  } else {
    return null
  }
}
const WeaponAccessories = ({weapon}) => {
  const {availableBarrelAccessories, availableInternalAccessories} = weapon.accessories
  const availableBarrelItems = makeAvailableAccessoryList(availableBarrelAccessories)
  const availableInternalItems = makeAvailableAccessoryList(availableInternalAccessories)
  return (<div>
    {'Available Barrel:'}
    {availableBarrelItems}
    {'Available Internal:'}
    {availableInternalItems}
  </div>)
}

const styles = {
  isInstalled: {
    color: '#eee',
  },
}
WeaponAccessories.propTypes = {
  weapon: PropTypes.object,
}

export default WeaponAccessories
