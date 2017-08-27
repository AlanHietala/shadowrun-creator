import * as modTypes from '../../modTypes'
import {installableOption} from '../wareHelpers'

const retinalDuplication = {
  key: 'retinalDuplication',
  name: 'Retinal Duplication',
  tags: [],
  capacityRequired: 1,
  cost: 20000,
  avail: '16F',
  selectedRatingIndex: 1,
  rating: 1,
  ratings:[
    {
      rating: 1,
      cost: 20000,
      avail: '16F',
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
    },
    {
      rating: 2,
      cost: 40000,
      avail: '16F',
      mods: [
        {
          modType: modTypes.RESOURCES_MOD,
          effect: -40000,
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
const visionEnhancementI = {
  key: 'visionEnhancementI',
  name: 'Vision Enhancement I',
  tags: [],
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
}
const visionEnhancementII = {
  key: 'visionEnhancementII',
  name: 'Vision Enhancement II',
  tags: [],
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
}

const visionEnhancementIII = {
  key: 'visionEnhancementIII',
  name: 'Vision Enhancement III',
  tags: [],
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
  visionEnhancementI,
  visionEnhancementII,
  visionEnhancementIII,
  visionMagnification,
  retinalDuplication,
  {
    key: 'cybereyes',
    name: 'Cybereyes',
    selectedRatingIndex: 0,
    ratings: [
      {
        rating: 1,
        capacity: 4,
        avail: 3,
        cost: 4000,
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
      },
      {
        rating: 2,
        capacity: 8,
        avail: 6,
        cost: 4000,
        mods: [
          {
            modType: modTypes.RESOURCES_MOD,
            effect: -6000,
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
        avail: 9,
        cost: 10000,
        mods: [
          {
            modType: modTypes.RESOURCES_MOD,
            effect: -10000,
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
        avail: 12,
        cost: 14000,
        mods: [
          {
            modType: modTypes.RESOURCES_MOD,
            effect: -14000,
          },
          {
            modType: modTypes.ESSENCE_MOD,
            effect: -0.5,
          },
        ],
      },
    ],
    tags: [],
    availableOptions: [
      installableOption(flareCompensation),
      installableOption(lowLightVision),
      installableOption(smartLink),
      installableOption(thermographicVision),
      installableOption(visionEnhancementI),
      installableOption(visionEnhancementII),
      installableOption(visionEnhancementIII),
      installableOption(visionMagnification),
      installableOption(ocularDrone),
      installableOption(retinalDuplication),
    ],
  },
]
