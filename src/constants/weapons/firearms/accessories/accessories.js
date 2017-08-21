import * as accessoryTypes from './accessoryTypes'
import * as modTypes from '../../../modTypes'

export const foldingStock = {
  key: 'foldingStock',
  name: 'Folding Stock',
  mounts: [
    accessoryTypes.FOLDING_STOCK,
  ],
  avail: '2',
  cost: 30,
  tags: [],
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -30,
    },
  ],
}

export const suppressorGasVentII = {
  key: '',
  name: 'Suppressor / Gas Vent II',
  mounts: [
    accessoryTypes.SUPPRESSOR_GAS_VENT_II,
  ],
  avail: '6R',
  cost: 400,
  tags: [],
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -400,
    },
  ],
}

export const gasVentSystemII = {
  key: 'GasVentSystemII',
  name: 'Gas Vent System II',
  mounts: [
    accessoryTypes.BARREL,
  ],
  avail: '6R',
  cost: 400,
  tags: [],
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -400,
    },
  ],
}

export const smartgunSystemInternal = {
  key: 'SmartgunSystemInternal',
  name: 'Smartgun System Internal',
  mounts: [
    accessoryTypes.ALL,
  ],
  avail: '(+2)R',
  cost: 'Weapon Cost x2',
  tags: [],
  mods: [
    {
      modType: modTypes.WEAPON_COST_MULTIPLE_MOD,
      effect: 2,
    },
  ],
}

export const laserSight = {
  key: 'LaserSight',
  name: 'Laser Sight',
  mounts: [
    accessoryTypes.TOP,
    accessoryTypes.UNDER,
  ],
  avail: '2',
  cost: 125,
  tags: [],
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -125,
    },
  ],
}
export const lightFireSuppressor = {
  key: 'supressor',
  name: 'Silencer/Supressor',
  mounts: [
    accessoryTypes.LIGHTFIRE_SUPPRESSOR,
  ],
  avail: '9F',
  cost: 750,
  tags: [],
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -750,
    },
  ],
}

export const suppressor = {
  key: 'supressor',
  name: 'Silencer/Supressor',
  mounts: [
    accessoryTypes.SILENCER_SUPPRESSOR,
  ],
  avail: '9F',
  cost: 500,
  tags: [],
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -500,
    },
  ],
}
export const internalAccessories = [
  smartgunSystemInternal,
]

export const stockAccessories = [
  foldingStock,
  {
    key: 'ShockPad',
    name: 'Shock Pad',
    mounts: [
      accessoryTypes.SHOCK_PAD,
    ],
    avail: '2',
    cost: 50,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -50,
      },
    ],
  },

]

export const topAccessories = [
  {
    key: 'Periscope',
    name: 'Periscope',
    mounts: [
      accessoryTypes.TOP,
    ],
    avail: '3',
    cost: 70,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -70,
      },
    ],
  },
  {
    key: 'ImagingScope',
    name: 'Imaging Scope',
    mounts: [
      accessoryTypes.TOP,
    ],
    avail: '2',
    cost: 300,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -300,
      },
    ],
  },
  laserSight,
]

export const underAccessories = [
  {
    key: 'SmartFiringPlatform',
    name: 'Smart Firing Platform',
    mounts: [
      accessoryTypes.UNDER,
    ],
    avail: '12F',
    cost: 2500,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -2500,
      },
    ],
  },
  {
    key: 'GyroMount',
    name: 'Gyro Mount',
    mounts: [
      accessoryTypes.UNDER,
    ],
    avail: '7',
    cost: 1400,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1400,
      },
    ],
  },
  {
    key: 'Bipod',
    name: 'Bipod',
    mounts: [
      accessoryTypes.UNDER,
    ],
    avail: '2',
    cost: 200,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -200,
      },
    ],
  },
  laserSight,
]

export const silencerAccessories = [
  suppressor,
  lightFireSuppressor,
]

export const barrelAccessories = [
  {
    key: 'GasVentSystemI',
    name: 'Gas Vent System I',
    mounts: [
      accessoryTypes.BARREL,
    ],
    avail: '3R',
    cost: 200,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -200,
      },
    ],
  },
  gasVentSystemII,
  {
    key: 'GasVentSystemIII',
    name: 'Gas Vent System III',
    mounts: [
      accessoryTypes.BARREL,
    ],
    avail: '9R',
    cost: 600,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -600,
      },
    ],
  },
]

export const theRest = [
  {
    key: 'AirburstLink',
    name: 'Airburst Link',
    mounts: [
      accessoryTypes.ALL,
    ],
    avail: '6R',
    cost: 600,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -600,
      },
    ],
  },

  {
    key: 'ConcealableHolster',
    name: 'Concealable Holster',
    mounts: [
      accessoryTypes.CONCEALED_HOLSTER,
    ],
    avail: '2',
    cost: 150,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -150,
      },
    ],
  },


  {
    key: 'HiddenArmSlide',
    name: 'Hidden Arm Slide',
    mounts: [
      accessoryTypes.ARM_SLIDE,
    ],
    avail: '4R',
    cost: 350,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -350,
      },
    ],
  },


  {
    key: 'Quick-drawHolster',
    name: 'Quick-draw Holster',
    mounts: [
      accessoryTypes.QUICK_DRAW_HOLSTER,
    ],
    avail: '4',
    cost: 175,
    tags: [],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -175,
      },
    ],
  },
]
