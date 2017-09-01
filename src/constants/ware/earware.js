import * as modTypes from '../modTypes'
import { createRating, installableOption } from './wareHelpers'
import R from 'ramda'

const audioEnhancement = {
  key: 'audioEnhancement',
  name: 'Audio Enchancement',
  tags: [],
  capacityRequired: 1,
  cost: 4000,
  avail: '3',
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, rating * 3 ,rating * 4000, [{
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    }], null, rating)),
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -4000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const balanceAugmenter = {
  key: 'balanceAugmenter',
  name: 'Balance Augmenter',
  tags: [],
  capacityRequired: 4,
  cost: 8000,
  avail: '8',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -8000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const damper = {
  key: 'damper',
  name: 'Damper',
  tags: [],
  capacityRequired: 1,
  cost: 2250,
  avail: '6',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -2250,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const selectSoundFilter = {
  key: 'selectSoundFilter',
  name: 'Select Sound Filter',
  tags: [],
  capacityRequired: 1,
  cost: 3500,
  avail: '3',
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 3 ,rating * 3500, [{
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    }], null, rating)),
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -3500,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const soundLink = {
  key: 'soundLink',
  name: 'Sound Link',
  tags: [],
  capacityRequired: 1,
  cost: 1000,
  avail: '4',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -1000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const spacialRecognizer = {
  key: 'spacialRecognizer',
  name: 'Spacial Recognizer',
  tags: [],
  capacityRequired: 2,
  cost: 4000,
  avail: '8',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -4000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

export default [
  audioEnhancement,
  balanceAugmenter,
  damper,
  selectSoundFilter,
  soundLink,
  spacialRecognizer,
  {
    key: 'cyberears',
    name: 'Cyberears',
    tags: [],
    rating: 1,
    selectedRatingIndex: 0,
    ratings: [
      createRating(1, 3, 3000, [{
        modType: modTypes.ESSENCE_MOD,
        effect: -0.2,
      }], 4),
      createRating(2, 6, 4500, [{
        modType: modTypes.ESSENCE_MOD,
        effect: -0.3,
      }], 8),
      createRating(3, 9, 7500, [{
        modType: modTypes.ESSENCE_MOD,
        effect: -0.4,
      }], 12),
      createRating(4, 12, 11000, [{
        modType: modTypes.ESSENCE_MOD,
        effect: -0.5,
      }], 16),
    ],
    availableOptions: [
      installableOption(audioEnhancement),
      installableOption(balanceAugmenter),
      installableOption(damper),
      installableOption(selectSoundFilter),
      installableOption(spacialRecognizer),
    ],
    capacity: 4,
    cost: 3000,
    avail: 3,
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -3000,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -0.2,
      },
    ],
  },
]
