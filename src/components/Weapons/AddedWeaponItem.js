import React from 'react'
import PropTypes from 'prop-types'
import WeaponAccessories from './WeaponAccessories'

const AddedWeaponItem = ({item}) => {

  const {weaponStats: {acc, accWithMods, damage, ap, mode, rc, ammo, avail, cost}} = item
  const accString = accWithMods ? `${acc}(${accWithMods})` : `${acc}`
  const apString = ap ? `${ap}` : '-'
  const rcString = rc ? `${rc}` : '-'
  return (
    <div>{item.name}
      <div>{`ACC: ${accString} Dam: ${damage} ap: ${apString} mode: ${mode} rc: ${rcString} ammo: ${ammo} avail: ${avail} cost: ${cost}`}</div>
      <WeaponAccessories weapon={item}/>
    </div>)
}
AddedWeaponItem.propTypes = {
  item: PropTypes.object,
}
export default AddedWeaponItem
