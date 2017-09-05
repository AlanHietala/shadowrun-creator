import modTypes from './modTypes'
import { createRating, installableOption } from '../ware/wareHelpers'
import armorModifications from './armorModifications'

const actioneerBusinessClothes = {
  key: 'actioneerBusinessClothes',
  name: 'Actioneer Business Clothes',
  ...createRating(null,15000, 4,  [{
    modType: modTypes.ARMOR_MOD,
    effect: -1,
  }], 15),
  tags: [],
  availableOptions: [
    ...armorModifications.map(option => installableOption(option)),
  ],
}

export default [
  actioneerBusinessClothes,
]
