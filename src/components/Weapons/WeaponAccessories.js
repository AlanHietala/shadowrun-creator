import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

const makeAvailableAccessoryList = (availableAccessories, accessoryTitle, selectedValue) => {
  if (availableAccessories) {
    return (<div>
      <SelectField
        value={selectedValue}
        floatingLabelText={accessoryTitle}>
        <MenuItem value={null} primaryText={''}/>
        {availableAccessories.map(accessory => {
          const style = accessory.isInstalled ? styles.isInstalled : null
          return (
            <MenuItem style={style} key={accessory.key} value={accessory.key} primaryText={accessory.name} />
          )
        })}
      </SelectField>
    </div>)
  } else {
    return null
  }
}
const WeaponAccessories = ({weapon}) => {
  const {
    availableBarrelAccessories,
    availableInternalAccessories,
    availableStockAccessories,
    availableUnderAccessories,
    availableTopAccessories,
  } = weapon.accessories
  const availableBarrelItems = makeAvailableAccessoryList(availableBarrelAccessories, 'Barrel', null)
  const availableStockItems = makeAvailableAccessoryList(availableStockAccessories, 'Stock', null)
  const availableUnderItems = makeAvailableAccessoryList(availableUnderAccessories, 'Under', null)
  const availableTopItems = makeAvailableAccessoryList(availableTopAccessories, 'Top', null)
  const availableInternalItems = makeAvailableAccessoryList(availableInternalAccessories, 'Internal', null)
  return (<div>
    {availableBarrelItems}
    {availableInternalItems}
    {availableStockItems}
    {availableTopItems}
    {availableUnderItems}
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
