import {
  BARREL,
  TOP,
  UNDER,
  INTERNAL,
  SILENCER_SUPPRESSOR,
  // ALL,
  STOCK,
} from '../constants/weapons/firearms/accessories/accessoryTypes'

import {
  barrelAccessories,
  silencerAccessories,
  internalAccessories,
  topAccessories,
  underAccessories,
  stockAccessories,
} from '../constants/weapons/firearms/accessories/accessories'

const markInstalledAccessory = (availableAccessories, installedAccessory) => {
  return availableAccessories.map(accessory => {
    if(installedAccessory && accessory.name === installedAccessory.name) {
      accessory.isInstalled = true
    }
    return accessory
  })
}

const parseWeapon = weapon => {

  const { allowedAccessories} = weapon
  let availableBarrelAccessories = null
  let availableUnderAccessories = null
  let availableTopAccessories = null
  let availableInternalAccessories = null
  let availableStockAccessories = null
  let barrel = weapon.accessories.barrel
  let under = weapon.accessories.under
  let top = weapon.accessories.top
  let stock = weapon.accessories.stock
  let internal = weapon.accessories.internal

  if (allowedAccessories.includes(INTERNAL)) {
    availableInternalAccessories = markInstalledAccessory(internalAccessories, internal)
  }

  if (allowedAccessories.includes(BARREL)) {
    availableBarrelAccessories = markInstalledAccessory(barrelAccessories, barrel)
  }

  if (allowedAccessories.includes(SILENCER_SUPPRESSOR)) {
    availableBarrelAccessories = availableBarrelAccessories
      .concat(silencerAccessories)

    availableBarrelAccessories = markInstalledAccessory(availableBarrelAccessories, barrel)
  }

  if(allowedAccessories.includes(TOP)) {
    availableTopAccessories = markInstalledAccessory(topAccessories, top)
  }

  if(allowedAccessories.includes(UNDER)) {
    availableUnderAccessories = markInstalledAccessory(underAccessories, under)
  }
  if(allowedAccessories.includes(STOCK)) {
    availableStockAccessories = markInstalledAccessory(stockAccessories, stock)
  }

  return {
    ...weapon,
    accessories: {
      ...weapon.accessories,
      availableBarrelAccessories,
      availableStockAccessories,
      availableTopAccessories,
      availableUnderAccessories,
      availableInternalAccessories,
    },
  }
}

export const characterWeaponsSelector = (state) => {
  return state.character.weapons.map(weapon => parseWeapon(weapon))
}
