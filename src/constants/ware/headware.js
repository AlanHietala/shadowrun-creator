import R from 'ramda'
import * as modTypes from '../modTypes'
import { createRating } from './wareHelpers'

export const commlink = {
  key: 'commlink',
  name: 'Commlink',
  tags: [],
  capacityRequired: 2,
  cost: 2000,
  avail: '-',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -2000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
  ],
}

const controlRig = {
  key: 'controlRig',
  name: 'Control Rig',
  tags: [],
  capacityRequired: 0,
  cost: 43000,
  avail: '5R',
  selectedRatingIndex: 0,
  rating: 1,
  ratings: [
    createRating(1, 43000, '5R',  {
      modType: modTypes.ESSENCE_MOD,
      effect: -1,
    }),
    createRating(2, 97000, '10R',  {
      modType: modTypes.ESSENCE_MOD,
      effect: -2,
    }),
    createRating(3, 208000, '15R',  {
      modType: modTypes.ESSENCE_MOD,
      effect: -3,
    }),
  ],
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -43000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -1,
    },
  ],
}

export const cortexBombKink = {
  key: 'cortexBombKink',
  name: 'Cortex Bomb Kink',
  tags: [],
  capacityRequired: 1,
  cost: 10000,
  avail: '12F',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -10000,
    },
  ],
}
export const cortexBombMicroBomb = {
  key: 'cortexBombMicroBomb',
  name: 'Cortex Bomb Micro',
  tags: [],
  capacityRequired: 2,
  cost: 25000,
  avail: '16F',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -25000,
    },
  ],
}
export const cortexBombAreaBomb = {
  key: 'cortexBombAreaBomb',
  name: 'Cortex Bomb Area',
  tags: [],
  capacityRequired: 3,
  cost: 40000,
  avail: '20F',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -40000,
    },
  ],
}

export const cyberdeck = {
  key: 'cyberdeck',
  name: 'cyberdeck',
  tags: [],
  capacityRequired: 4,
  cost: 5000,
  avail: '5R',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -5000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.4,
    },
  ],
}

const datajack = {
  key: 'datajack',
  name: 'datajack',
  tags: [],
  capacityRequired: 0,
  cost: 1000,
  avail: '2',
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

const datalock = {
  key: 'datalock',
  name: 'Data Lock',
  tags: [],
  capacityRequired: 0,
  cost: 1000,
  avail: '2',
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 13)
    .map(rating => createRating(rating, 1000 * rating, 2 * rating, [{
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    }])),
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

const olfactoryBooster = {
  key: 'olfactoryBooster',
  name: 'Olfactory Booster',
  tags: [],
  capacityRequired: 0,
  cost: 4000,
  avail: '3',
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, 4000 * rating, 3 * rating, [{
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    }])),
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

const simRig =  {
  key: 'simRig',
  name: 'Sim Rig',
  tags: [],
  cost: 4000,
  avail: '12R',
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

const skillJack = {
  key: 'skillJack',
  name: 'Skill Jack',
  tags: [],
  capacityRequired: 0,
  cost: 4000,
  avail: '3',
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, 20000 * rating, 2 * rating, [{
      modType: modTypes.ESSENCE_MOD,
      effect: -rating * 0.1,
    }])),
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

const tasteBooster = {
  key: 'tasteBooster',
  name: 'Taste Booster',
  tags: [],
  capacityRequired: 0,
  cost: 4000,
  avail: '3',
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 3000, rating * 2, [{
      modType: modTypes.ESSENCE_MOD,
      effect: -rating * 0.2,
    }])),
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
}

const toothCompartment =  {
  key: 'toothCompartment',
  name: 'Tooth Compartment',
  tags: [],
  cost: 800,
  avail: '8',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -800,
    },
  ],
}

const ultrasoundSensor = {
  key: 'ultrasoundSensor',
  name: 'Ultrasound Sensor',
  tags: [],
  capacityRequired: 2,
  cost: 4000,
  avail: '10',
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 12000, 10, [{
      modType: modTypes.ESSENCE_MOD,
      effect: -0.25,
    }])),
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -12000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.25,
    },
  ],
}

const voiceModulator = {
  key: 'voiceModulator',
  name: 'Voice Modulator',
  tags: [],
  cost: 5000,
  avail: '3F',
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 5000, rating * 3 + 'F', [{
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    }])),
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -5000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
  ],
}

export default [
  commlink,
  controlRig,
  cortexBombKink,
  cortexBombMicroBomb,
  cortexBombAreaBomb,
  cyberdeck,
  datajack,
  datalock,
  olfactoryBooster,
  simRig,
  skillJack,
  tasteBooster,
  toothCompartment,
  ultrasoundSensor,
  voiceModulator,
]
