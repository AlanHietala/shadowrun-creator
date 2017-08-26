import {essenceSelector, resourcesSelector} from './characterSelectors'
import {getEssenceCostForItem, getResourceCostForItem} from './modHelpers'

export const characterItemsSelector = (state) => {
  return state.character.items
}

export const characterWeaponsSelector = (state) => {
  return state.character.weapons
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
  return state.character.ware.map(wareItem => {
    if (wareItem.availableOptions) {
      return calcCapacity(wareItem)
    } else {
      return wareItem
    }
  })
}

export const wareListSelector = (state) => {
  const availableResources = resourcesSelector(state)
  const essence = essenceSelector(state)

  return state.wareList.map(ware => {
    const isEnoughEssence = essence.computed > getEssenceCostForItem(ware)
    const isEnoughResources = availableResources > getResourceCostForItem(ware)
    return {
      ...ware,
      isEnoughEssence,
      isEnoughResources,
    }
  })
}
