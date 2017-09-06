import R from 'ramda'
import * as modTypes from '../modTypes'
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
    .map(rating => createRating(rating, rating * 3000, rating * 5, [], null, rating)),
}

const fireResistance = {
  key: 'fireResistance',
  name: 'Fire Resistance',
  tags: [],
  ...createRating(1, 250, 6,  [], null, 1),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 250, 5, [], null, rating)),
}

const insulation = {
  key: 'insulation',
  name: 'Insulation',
  tags: [],
  ...createRating(1, 250, 6,  [], null, 1),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 250, 5, [], null, rating)),
}

const nonconductivity = {
  key: 'nonconductivity',
  name: 'Nonconductivity',
  tags: [],
  ...createRating(1, 250, 6,  [], null, 1),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 250, 5, [], null, rating)),
}

const shockFrills = {
  key: 'shockFrills',
  name: 'Shock Frills',
  tags: [],
  ...createRating(1, 250, '6R',  [], null, 2),
}

const thermalDamping = {
  key: 'thermalDamping',
  name: 'Thermal Damping',
  tags: [],
  ...createRating(1, 500, '10R',  [], null, 1),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 500, '10R', [], null, rating)),
}

const chemicalSeal = {
  key: 'chemicalSeal',
  name: 'Chemical Seal',
  tags: [],
  ...createRating(1, 6000, '-',  []),
}
const fullHelmet = {
  key: 'fullHelmet',
  name: 'Full Helmet',
  tags: [],
  ...createRating(1, 500, '-', [
    {
      modType: modTypes.ARMOR_MOD,
      effect: 3,
    },
  ]),
}

const environmentalAdeptation = {
  key: 'environmentalAdeptation',
  name: 'Environmental Adeptation',
  tags: [],
  ...createRating(1, 1000, '-', []),
}

export const fullBodyArmorOptions = [
  chemicalSeal,
  fullHelmet,
  environmentalAdeptation,
]

export default [
  chemicalProtection,
  fireResistance,
  insulation,
  nonconductivity,
  shockFrills,
  thermalDamping,
]
