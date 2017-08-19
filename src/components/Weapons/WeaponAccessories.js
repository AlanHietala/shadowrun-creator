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
        handleSelectOption={handleSelectOption} />

      <AvailableAccessoryList
        availableAccessories={availableStockAccessories}
        accessoryTitle={'Stock'}
        selectedValue={selectedStock}
        handleSelectOption={handleSelectOption} />

      <AvailableAccessoryList
        availableAccessories={availableUnderAccessories}
        accessoryTitle={'Under'}
        selectedValue={selectedUnder}
        handleSelectOption={handleSelectOption} />

      <AvailableAccessoryList
        availableAccessories={availableTopAccessories}
        accessoryTitle={'Top'}
        selectedValue={selectedTop}
        handleSelectOption={handleSelectOption} />

      <AvailableAccessoryList
        availableAccessories={availableInternalAccessories}
        accessoryTitle={'Internal'}
        selectedValue={selectedInternal}
        handleSelectOption={handleSelectOption} />

    </div>)
}

WeaponAccessories.propTypes = {
  weapon: PropTypes.object,
  handleSelectOption: PropTypes.func,
}

export default WeaponAccessories
