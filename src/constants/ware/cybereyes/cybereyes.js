import * as modTypes from '../../modTypes'
import {installableOption} from '../wareHelpers'


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
  {
    key: 'cybereyesI',
    name: 'Cybereyes I',
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
    ],
    capacity: 4,
    cost: 4000,
    avail: 3,
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
    key: 'cybereyesII',
    name: 'Cybereyes II',
    tags: [],
    availableOptions: [
      installableOption(flareCompensation),
      installableOption(lowLightVision),
      installableOption(ocularDrone),
      installableOption(smartLink),
      installableOption(thermographicVision),
      installableOption(visionEnhancementI),
      installableOption(visionEnhancementII),
      installableOption(visionEnhancementIII),
      installableOption(visionMagnification),
    ],
    capacity: 8,
    cost: 6000,
    avail: 6,
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
    key: 'cybereyesIII',
    name: 'Cybereyes III',
    tags: [],
    availableOptions: [
      installableOption(flareCompensation),
      installableOption(lowLightVision),
      installableOption(ocularDrone),
      installableOption(smartLink),
      installableOption(thermographicVision),
      installableOption(visionEnhancementI),
      installableOption(visionEnhancementII),
      installableOption(visionEnhancementIII),
      installableOption(visionMagnification),
    ],
    capacity: 9,
    cost: 10000,
    avail: 9,
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
    key: 'cybereyesIV',
    name: 'Cybereyes IV',
    tags: [],
    availableOptions: [
      installableOption(flareCompensation),
      installableOption(lowLightVision),
      installableOption(ocularDrone),
      installableOption(smartLink),
      installableOption(thermographicVision),
      installableOption(visionEnhancementI),
      installableOption(visionEnhancementII),
      installableOption(visionEnhancementIII),
      installableOption(visionMagnification),
    ],
    capacity: 12,
    cost: 14000,
    avail: 9,
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
]
