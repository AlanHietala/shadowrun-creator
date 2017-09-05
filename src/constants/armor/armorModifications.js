import R from 'ramda'
import modTypes from '../modTypes'
import { createRating } from '../ware/wareHelpers'

const chemicalProtection = {
  key: 'chemicalProtection',
  name: 'Chemical Protection',
  tags: [],
  ...createRating(1, 3000, 5,  [{
    modType: modTypes.ARMOR_MOD,
    effect: 1,
  }], null, 1),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 3000, rating * 5, [
      {
        modType: modTypes.ARMOR_MOD,
        effect: rating,
      }], null, rating)),
}
export default [
  chemicalProtection,
]
