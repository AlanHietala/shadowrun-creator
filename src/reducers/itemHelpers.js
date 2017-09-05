export const changeCapacityRating = (items, itemIndex, capacityIndex, ratingIndex) => {

  const item = items[itemIndex]
  const capacityItem = item.availableOptions[capacityIndex]

  const newCapacityItem = {
    ...capacityItem,
    ...capacityItem.ratings[ratingIndex],
    selectedRatingIndex: ratingIndex,
  }
  let newCapacityList = [...item.availableOptions]
  newCapacityList[capacityIndex] = newCapacityItem

  const newItem = {
    ...item,
    availableOptions: newCapacityList,
  }

  let newList = [...items]
  newList[itemIndex] = newItem

  return newList
}

export const toggleCapacityOption = (items, itemIndex, capacityIndex) => {
  const newItems = [...items]
  const capacityItem = newItems[itemIndex].availableOptions[capacityIndex]
  capacityItem.isInstalled = !capacityItem.isInstalled

  return newItems
}

export const changeRating = (items, itemIndex, ratingIndex) => {
  let item = items[itemIndex]

  const newItem = {
    ...item,
    ...item.ratings[ratingIndex],
    selectedRatingIndex: ratingIndex,
  }

  let newList = [...items]
  newList[itemIndex] = newItem

  return newList
}
