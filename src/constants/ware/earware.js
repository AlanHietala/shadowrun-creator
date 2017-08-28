import * as modTypes from '../modTypes'
import {installableOption} from './wareHelpers'

const audioEnhancement = {
  key: 'audioEnhancement',
  name: 'Audio Enchancement',
  tags: [],
  capacityRequired: 1,
  cost: 4000,
  avail: '3',
  selectedRatingIndex: 0,
  rating: 1,
  ratings: [
    {
      rating: 1,
      capacityRequired: 1,
      cost: 4000,
      avail: '3',
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
    },
    {
      rating: 2,
      capacityRequired: 2,
      cost: 8000,
      avail: '6',
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
    },
    {
      rating:3,
      capacityRequired: 3,
      cost: 12000,
      avail: '9',
      mods: [
        {
          modType: modTypes.RESOURCES_MOD,
          effect: -12000,
        },
        {
          modType: modTypes.ESSENCE_MOD,
          effect: -0.1,
        },
      ],
    },
  ],
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
  ratings: [
    {
      rating: 1,
      capacityRequired: 1,
      cost: 3500,
      avail: '3',
      selectedRatingIndex: 0,
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
    },
    {
      rating: 2,
      capacityRequired: 2,
      cost: 7000,
      avail: '6',
      mods: [
        {
          modType: modTypes.RESOURCES_MOD,
          effect: -7000,
        },
        {
          modType: modTypes.ESSENCE_MOD,
          effect: -0.1,
        },
      ],
    },
    {
      rating: 3,
      capacityRequired: 3,
      cost: 10500,
      avail: '9',
      mods: [
        {
          modType: modTypes.RESOURCES_MOD,
          effect: -10500,
        },
        {
          modType: modTypes.ESSENCE_MOD,
          effect: -0.1,
        },
      ],
    },
    {
      rating: 4,
      capacityRequired: 4,
      cost: 14000,
      avail: '12',
      mods: [
        {
          modType: modTypes.RESOURCES_MOD,
          effect: -14000,
        },
        {
          modType: modTypes.ESSENCE_MOD,
          effect: -0.1,
        },
      ],
    },
    {
      rating: 5,
      capacityRequired: 5,
      cost: 17500,
      avail: '15',
      mods: [
        {
          modType: modTypes.RESOURCES_MOD,
          effect: -17500,
        },
        {
          modType: modTypes.ESSENCE_MOD,
          effect: -0.1,
        },
      ],
    },
    {
      rating: 6,
      capacityRequired: 6,
      cost: 21000,
      avail: '18',
      mods: [
        {
          modType: modTypes.RESOURCES_MOD,
          effect: -21000,
        },
        {
          modType: modTypes.ESSENCE_MOD,
          effect: -0.1,
        },
      ],
    },
  ],
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
      {
        rating: 1,
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
      {
        rating: 2,
        capacity: 8,
        cost: 4500,
        avail: 6,
        mods: [
          {
            modType: modTypes.RESOURCES_MOD,
            effect: -4500,
          },
          {
            modType: modTypes.ESSENCE_MOD,
            effect: -0.3,
          },
        ],
      },
      {
        rating: 3,
        capacity: 12,
        cost: 7500,
        avail: 9,
        mods: [
          {
            modType: modTypes.RESOURCES_MOD,
            effect: -7500,
          },
          {
            modType: modTypes.ESSENCE_MOD,
            effect: -0.4,
          },
        ],
      },
      {
        rating: 4,
        capacity: 16,
        cost: 11000,
        avail: 9,
        mods: [
          {
            modType: modTypes.RESOURCES_MOD,
            effect: -11000,
          },
          {
            modType: modTypes.ESSENCE_MOD,
            effect: -0.5,
          },
        ],
      },
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
