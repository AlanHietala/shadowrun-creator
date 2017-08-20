import React from 'react'
import PropTypes from 'prop-types'
import AvailableAccessoryList from './AvailableAccessoryList'

const WeaponAccessories = ({weapon, handleSelectOption}) => {
  const {
    availableBarrelAccessories,
    availableInternalAccessories,
    availableStockAccessories,
    availableUnderAccessories,
    availableTopAccessories,
  } = weapon.accessories

  const selectedBarrel = weapon.accessories.barrel ? weapon.accessories.barrel.key : null
  const selectedStock = weapon.accessories.stock ? weapon.accessories.stock.key : null
  const selectedUnder = weapon.accessories.under ? weapon.accessories.under.key : null
  const selectedTop = weapon.accessories.top ? weapon.accessories.top.key : null
  const selectedInternal = weapon.accessories.internal ? weapon.accessories.internal.key : null
  return(
    <div>
      <AvailableAccessoryList
        availableAccessories={availableBarrelAccessories}
        accessoryTitle={'Barrel'}
        selectedValue={selectedBarrel}
        handleSelectOption={(accessory) => handleSelectOption('barrel', accessory)}
      />

      <AvailableAccessoryList
        availableAccessories={availableStockAccessories}
        accessoryTitle={'Stock'}
        selectedValue={selectedStock}
        handleSelectOption={(accessory) => handleSelectOption('stock', accessory)}
      />
      <AvailableAccessoryList
        availableAccessories={availableUnderAccessories}
        accessoryTitle={'Under'}
        selectedValue={selectedUnder}
        handleSelectOption={(accessory) => handleSelectOption('under', accessory)}
      />

      <AvailableAccessoryList
        availableAccessories={availableTopAccessories}
        accessoryTitle={'Top'}
        selectedValue={selectedTop}
        handleSelectOption={(accessory) => handleSelectOption('top', accessory)} 
      />

      <AvailableAccessoryList
        availableAccessories={availableInternalAccessories}
        accessoryTitle={'Internal'}
        selectedValue={selectedInternal}
        handleSelectOption={(accessory) => handleSelectOption('internal', accessory)}
      />

    </div>)
}

WeaponAccessories.propTypes = {
  weapon: PropTypes.object,
  handleSelectOption: PropTypes.func,
}

export default WeaponAccessories
