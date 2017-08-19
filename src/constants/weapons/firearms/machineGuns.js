import * as modTypes from '../../modTypes'
import * as accessoryTypes from './accessories/accessoryTypes'

export default [
  {
    key: 'IngramValiant',
    name: 'Ingram Valiant',
    tags: ['machine gun'],
    accessories: [],
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.BARREL,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.UNDER,
      accessoryTypes.STOCK,
    ],
    weaponStats: {
      acc: 5,
      accWithMods: 6,
      damage: '9P',
      ap: -2,
      mode: 'BF/FA',
      rc: '2/(3)',
      ammo: '50(c) or 100(belt)',
      avail: '12F',
      cost: 5800,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -5800,
      },
    ],
  },
  {
    key: 'StonerAresM202',
    name: 'Stoner Ares M202',
    tags: ['machine gun'],
    accessories: [],
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.TOP,
      accessoryTypes.BARREL,
      accessoryTypes.UNDER,
      accessoryTypes.STOCK,
    ],
    weaponStats: {
      acc: 5,
      accWithMods: null,
      damage: '10P',
      ap: -3,
      mode: 'FA',
      rc: null,
      ammo: '50(c) or 100(belt)',
      avail: '12F',
      cost: 7000,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -7000,
      },
    ],
  },
  {
    key: 'RPKHMG',
    name: 'RPK HMG',
    tags: ['machine gun'],
    accessories: [],
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.UNDER,
      accessoryTypes.STOCK,
    ],
    weaponStats: {
      acc: 5,
      accWithMods: null,
      damage: '12P',
      ap: -4,
      mode: 'FA',
      rc: '(6)',
      ammo: '50(c) or 100(belt)',
      avail: '16F',
      cost: 16300,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -16300,
      },
    ],
  },
]
