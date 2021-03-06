import React from 'react'
import PropTypes from 'prop-types'
import WeaponAccessories from './WeaponAccessories'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const AddedWeaponItem = ({item, handleRemoveItem, handleSelectOption}) => {

  const {weaponStats: {acc, accWithMods, damage, ap, mode, rc, ammo, avail, cost}} = item
  const accString = accWithMods ? `${acc}(${accWithMods})` : `${acc}`
  const apString = ap ? `${ap}` : '-'
  const rcString = rc ? `${rc}` : '-'
  return (
    <Card>
      <CardHeader title={item.name}
        subtitle={`ACC: ${accString} Dam: ${damage} ap: ${apString} mode: ${mode} rc: ${rcString} ammo: ${ammo} avail: ${avail} cost: ${cost}`}
        actAsExpander={true}
        showExpandableButton={true} />
      <CardText
        expandable={true} >
        <WeaponAccessories weapon={item} handleSelectOption={handleSelectOption}/>
        <CardActions>
          <FlatButton label="Remove" onTouchTap={handleRemoveItem}/>
        </CardActions>
      </CardText>
    </Card>)
}
AddedWeaponItem.propTypes = {
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func,
  handleSelectOption: PropTypes.func,
}
export default AddedWeaponItem
