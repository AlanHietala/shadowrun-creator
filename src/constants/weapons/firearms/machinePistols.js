import * as modTypes from '../../modTypes'
import * as accessoryTypes from './accessories/accessoryTypes'

export default [
  {
    key: 'aresCrusaderII',
    name: 'Ares Crusader II',
    tags: ['machine pistol'],
    accessories: {},
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.BARREL,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.QUICK_DRAW_HOLSTER,
      accessoryTypes.CONCEALED_HOLSTER,
    ],
    weaponStats: {
      acc: 5,
      accWithMods: 7,
      damage: '7P',
      ap: null,
      mode: 'SA/BF',
      rc: 2,
      ammo: '40(c)',
      avail: '9R',
      cost: 830,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -830,
      },
    ],
  },
  {
    key: 'CeskaBlackScorpion',
    name: 'Ceska Black Scorpion',
    tags: ['machine pistol'],
    accessories: {},
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.BARREL,
      accessoryTypes.QUICK_DRAW_HOLSTER,
      accessoryTypes.CONCEALED_HOLSTER,
    ],
    weaponStats: {
      acc: 5,
      accWithMods: null,
      damage: '6P',
      ap: null,
      mode: 'SA/BF',
      rc: 1,
      ammo: '35(c)',
      avail: '6R',
      cost: 270,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -270,
      },
    ],
  },
  {
    key: 'SteyrTMP',
    name: 'Steyr TMP',
    tags: ['machine pistol'],
    accessories: {},
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.BARREL,
      accessoryTypes.QUICK_DRAW_HOLSTER,
      accessoryTypes.CONCEALED_HOLSTER,
    ],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '7P',
      ap: null,
      mode: 'SA/BF/FA',
      rc: null,
      ammo: '30(c)',
      avail: '8R',
      cost: 350,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -350,
      },
    ],
  },
]
