
export const characterItemsSelector = (state) => {
  return state.characterEquipment
}

export const characterWeaponsSelector = (state) => {
  return state.character.weapons
}

const calcRating = (wareItem) => {
  if(wareItem.selectedRatingIndex > -1) {
    return {
      ...wareItem,
      ...wareItem.ratings[wareItem.selectedRatingIndex],
    }
  } else {
    return wareItem
  }
}

const calcCapacity = (wareItem) => {
  const maxCapacity = wareItem.capacity
  const usedCapacity = wareItem.availableOptions.reduce((capacity, option) => {
    return option.isInstalled ? option.capacityRequired + capacity : capacity
  }, 0)

  return {
    ...wareItem,
    remainingCapacity: maxCapacity - usedCapacity,
  }
}
export const characterWareSelector = (state) => {
  return state.characterWare.map(wareItem => {
    if (wareItem.availableOptions) {
      return calcRating(calcCapacity(wareItem))
    } else {
      return calcRating(wareItem)
    }
  })
}

export const wareListSelector = (state) => state.wareList
