import * as modTypes from '../../modTypes'
import { installableOption, createRating } from '../wareHelpers'
import R from 'ramda'

const retinalDuplication = {
  key: 'retinalDuplication',
  name: 'Retinal Duplication',
  tags: [],
  capacityRequired: 1,
  cost: 20000,
  avail: '16F',
  selectedRatingIndex: 1,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 20000, '16F', [{
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    }], null, 1)),
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -20000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const flareCompensation = {
  key: 'flareCompensation',
  name: 'Flare Compensation',
  tags: [],
  capacityRequired: 1,
  cost: 1000,
  avail: 3,
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -1000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
  ],
}

const imageLink = {
  key: 'imageLink',
  name: 'Image Link',
  tags: [],
  capacityRequired: 1,
  cost: 1000,
  avail: 4,
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
const lowLightVision = {
  key: 'lowLightVision',
  name: 'Low Light Vision',
  tags: [],
  capacityRequired: 2,
  cost: 1500,
  avail: 4,
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -1500,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const ocularDrone = {
  key: 'ocularDrone',
  name: 'Ocular Drone',
  tags: [],
  capacityRequired: 6,
  cost: 6000,
  avail: 6,
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -6000,
    },
  ],
}

const smartLink = {
  key: 'smartlink',
  name: 'Smartlink',
  tags: [],
  capacityRequired: 3,
  cost: 4000,
  avail: '8R',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -4000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
  ],
}

const thermographicVision = {
  key: 'thermographicVision',
  name: 'Thermographic Vision',
  tags: [],
  capacityRequired: 2,
  cost: 1500,
  avail: '4',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -1500,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}
const visionEnhancement = {
  key: 'visionEnhancement',
  name: 'Vision Enhancement',
  tags: [],
  capacityRequired: 1,
  cost: 4000,
  avail: '3',
  selectedRatingIndex: 1,
  rating: 1,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, 3,rating * 1000, [{
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    }], null, 1)),
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

const visionMagnification = {
  key: 'visionMagnification',
  name: 'Vision Magnification',
  tags: [],
  capacityRequired: 2,
  cost: 2000,
  avail: '4',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -2000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}
export default [
  flareCompensation,
  imageLink,
  lowLightVision,
  smartLink,
  thermographicVision,
  visionEnhancement,
  visionMagnification,
  retinalDuplication,
  {
    key: 'cybereyes',
    name: 'Cybereyes',
    selectedRatingIndex: 0,
    grade: 'Standard',
    ratings: [
      createRating(1, 3, 4000, [{
        modType: modTypes.ESSENCE_MOD,
        effect: -0.2,
      }], 4),
      createRating(2, 6, 6000, [{
        modType: modTypes.ESSENCE_MOD,
        effect: -0.3,
      }], 8),
      createRating(3, 9, 10000, [{
        modType: modTypes.ESSENCE_MOD,
        effect: -0.4,
      }], 12),
      createRating(4, 12, 14000, [{
        modType: modTypes.ESSENCE_MOD,
        effect: -0.5,
      }], 16),
    ],
    tags: [],
    availableOptions: [
      installableOption(flareCompensation),
      installableOption(lowLightVision),
      installableOption(smartLink),
      installableOption(thermographicVision),
      installableOption(visionEnhancement),
      installableOption(visionMagnification),
      installableOption(ocularDrone),
      installableOption(retinalDuplication),
    ],
  },
]
