import { createRating, installableOption } from '../ware/wareHelpers'
import armorModifications, {fullBodyArmorOptions} from './armorModifications'
import * as modTypes from '../modTypes'

const actioneerBusinessClothes = {
  key: 'actioneerBusinessClothes',
  name: 'Actioneer Business Clothes (8)',
  ...createRating(null, 1500, 4,  [], 8),
  tags: [],
  availableOptions: [
    ...armorModifications.map(option => installableOption(option)),
  ],
}

const armorClothing = {
  key: 'armorClothing',
  name: 'Armor Clothing (6)',
  ...createRating(null, 450, 2,  [], 6),
  tags: [],
  availableOptions: [
    ...armorModifications.map(option => installableOption(option)),
  ],
}

const armorJacket =  {
  key: 'armorJacket',
  name: 'Armor Jacket (12)',
  ...createRating(null, 1000, 2,  [], 12),
  tags: [],
  availableOptions: [
    ...armorModifications.map(option => installableOption(option)),
  ],
}

const armorVest = {
  key: 'armorVest',
  name: 'Armor Vest (9)',
  ...createRating(null, 500, 4,  [], 9),
  tags: [],
  availableOptions: [
    ...armorModifications.map(option => installableOption(option)),
  ],
}

const chameleonSuit = {
  key: 'chameleonSuit',
  name: 'Chameleon Suit (9)',
  ...createRating(null, 1700, '10R',  [], 9),
  tags: [],
  availableOptions: [
    ...armorModifications.map(option => installableOption(option)),
  ],
}

const fullBodyArmor = {
  key: 'chameleonSuit',
  name: 'Chameleon Suit (15)',
  ...createRating(null, 2000, '14R',  [], 15),
  tags: [],
  availableOptions: [
    ...armorModifications.map(option => installableOption(option)),
    ...fullBodyArmorOptions.map(option => installableOption(option)),
  ],
}

const linedCoat = {
  key: 'linedCoat',
  name: 'Lined Coat (9)',
  ...createRating(null, 900, 4,  [], 9),
  tags: [],
  availableOptions: [
    ...armorModifications.map(option => installableOption(option)),
  ],
}

const helmet = {
  key: 'helmet',
  name: 'Helmet',
  ...createRating(null, 100, 2,  [
    {
      modType: modTypes.ARMOR_MOD,
      effect: 2,
    },
  ]),
  tags: [],
}

const balisticShield = {
  key: 'balisticShield',
  name: 'Balistic Shield',
  ...createRating(null, 1200, '12R',  [
    {
      modType: modTypes.ARMOR_MOD,
      effect: 6,
    },
  ]),
  tags: [],
}

const riotShield = {
  key: 'riotShield',
  name: 'Riot Shield',
  ...createRating(null, 1500, '10R',  [
    {
      modType: modTypes.ARMOR_MOD,
      effect: 6,
    },
  ]),
  tags: [],
}

export default [
  actioneerBusinessClothes,
  armorClothing,
  armorJacket,
  armorVest,
  chameleonSuit,
  fullBodyArmor,
  linedCoat,
  helmet,
  balisticShield,
  riotShield,
]
