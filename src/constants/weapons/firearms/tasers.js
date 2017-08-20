import * as modTypes from '../../modTypes'
import * as accessoryTypes from './accessories/accessoryTypes'

export default [
  {
    key: 'exShocker',
    name: 'Defiance EX Shocker',
    tags: ['taser'],
    accessories: {},
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.CONCEALED_HOLSTER,
      accessoryTypes.QUICK_DRAW_HOLSTER,
      accessoryTypes.ARM_SLIDE,
    ],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '9S(e)',
      ap: -5,
      mode: 'SS',
      rc: null,
      ammo: '4(m)',
      avail: '-',
      cost: 250,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -250,
      },
    ],
  },
  {
    key: 'yamahaPulsar',
    name: 'Yamaha Pulsar',
    tags: ['taser'],
    accessories: {},
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.CONCEALED_HOLSTER,
      accessoryTypes.QUICK_DRAW_HOLSTER,
      accessoryTypes.ARM_SLIDE,
    ],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '7S(e)',
      ap: -5,
      mode: 'SA',
      rc: null,
      ammo: '4(m)',
      avail: '-',
      cost: 180,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -180,
      },
    ],
  },
]
