import {
  BARREL,
  TOP,
  UNDER,
  SILENCER_SUPPRESSOR,
  // ALL,
  STOCK,
} from '../constants/weapons/firearms/accessories/accessoryTypes'

import {
  barrelAccessories,
  silencerAccessories,
  topAccessories,
  underAccessories,
  stockAccessories,
} from '../constants/weapons/firearms/accessories/accessories'

const parseWeapon = weapon => {

  const { allowedAccessories} = weapon
  let availableBarrelAccessories = null
  let availableUnderAccessories = null
  let availableTopAccessories = null
  let availableStockAccessories = null

  if (allowedAccessories.includes(BARREL)) {
    availableBarrelAccessories = [...barrelAccessories]
  }

  if (allowedAccessories.includes(SILENCER_SUPPRESSOR)) {
    availableBarrelAccessories = availableBarrelAccessories.concat(silencerAccessories)
  }

  if(allowedAccessories.includes(TOP)) {
    availableTopAccessories = [...topAccessories]
  }

  if(allowedAccessories.includes(UNDER)) {
    availableUnderAccessories = [...underAccessories]
  }
  if(allowedAccessories.includes(STOCK)) {
    availableStockAccessories = [...stockAccessories]
  }

  return {
    ...weapon,
    availableBarrelAccessories,
    availableStockAccessories,
    availableTopAccessories,
    availableUnderAccessories,
  }
}

export const characterWeaponsSelector = (state) => {
  return state.character.weapons.map(weapon => parseWeapon(weapon))
}
