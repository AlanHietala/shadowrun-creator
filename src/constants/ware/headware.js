
import * as modTypes from '../modTypes'

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

const controlRigI = {
  key: 'controlRigI',
  name: 'Control Rig I',
  tags: [],
  capacityRequired: 0,
  cost: 43000,
  avail: '5R',
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

const controlRigII = {
  key: 'controlRigII',
  name: 'Control Rig II',
  tags: [],
  capacityRequired: 0,
  cost: 97000,
  avail: '10R',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -97000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -2,
    },
  ],
}
const controlRigIII = {
  key: 'controlRigIII',
  name: 'Control Rig III',
  tags: [],
  capacityRequired: 0,
  cost: 208000,
  avail: '15R',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -208000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -3,
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

export default [
  commlink,
  controlRigI,
  controlRigII,
  controlRigIII,
  cortexBombKink,
  cortexBombMicroBomb,
  cortexBombAreaBomb,
  cyberdeck,
  datajack,
]
