import R from 'ramda'
import { createRating } from '../ware/wareHelpers'
import { FORCE, COUNT } from './equipmentTypes'

const enchantingFocus = {
  key: 'enchantingFocus',
  name: 'Enchanting Focus',
  tags: [],
  ...createRating(1, 5000, '3R',  []),
  itemType: FORCE,
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(force => createRating(force, force * 5000, force * 3 + 'R', [])),
}

const metamagicFocus = {
  key: 'metamagicFocus',
  name: 'Metamagic Focus',
  tags: [],
  ...createRating(1, 9000, '3R',  []),
  itemType: FORCE,
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(force => createRating(force, force * 9000, force * 3 + 'R', [])),
}

const powerFocus = {
  key: 'powerFocus',
  name: 'Power Focus',
  tags: [],
  ...createRating(1, 18000, '4R',  []),
  itemType: FORCE,
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(force => createRating(force, force * 18000, force * 4 + 'R', [])),
}

const qiFocus = {
  key: 'qiFocus',
  name: 'Qi Focus',
  tags: [],
  ...createRating(1, 3000, '3R',  []),
  itemType: FORCE,
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(force => createRating(force, force * 3000, force * 3 + 'R', [])),
}

const spellFocus = {
  key: 'spellFocus',
  name: 'Spell Focus',
  tags: [],
  ...createRating(1, 4000, '3R',  []),
  itemType: FORCE,
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(force => createRating(force, force * 4000, force * 3 + 'R', [])),
}

const spiritFocus = {
  key: 'spiritFocus',
  name: 'Spirit Focus',
  tags: [],
  ...createRating(1, 4000, '3R',  []),
  itemType: FORCE,
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(force => createRating(force, force * 4000, force * 3 + 'R', [])),
}

const weaponFocus = {
  key: 'weaponFocus',
  name: 'Weapon Focus',
  tags: [],
  ...createRating(1, 7000, '4R',  []),
  itemType: FORCE,
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(force => createRating(force, force * 7000, force * 4 + 'R', [])),
}

const magicalLodgeMaterials = {
  key: 'magicalLodgeMaterials',
  name: 'Magical Lodge Materials',
  tags: [],
  ...createRating(1, 500, '2',  []),
  itemType: FORCE,
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(force => createRating(force, force * 500, force * 2, [])),
}

const reagents = {
  key: 'reagents',
  name: 'Reagents',
  tags: [],
  ...createRating(1, 500, '2',  []),
  itemType: COUNT,
  count: 1,
}
export default [
  enchantingFocus,
  metamagicFocus,
  powerFocus,
  qiFocus,
  spellFocus,
  spiritFocus,
  weaponFocus,
  magicalLodgeMaterials,
  reagents,
]
