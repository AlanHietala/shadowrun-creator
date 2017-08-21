import * as modTypes from '../../modTypes'
import * as accessoryTypes from './accessories/accessoryTypes'
import internalize from './accessories/accessoryHelpers'
import { supressor, shockPad, imagingScope } from './accessories/accessories'

export default [
  {
    key: 'AresDesertStrike',
    name: 'Ares Desert Strike',
    tags: ['sniper rifle'],
    accessories: {
      stock: internalize(shockPad),
      top: internalize(imagingScope),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.UNDER,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.STOCK,
    ],
    weaponStats: {
      acc: 7,
      accWithMods: null,
      damage: '13p',
      ap: -4,
      mode: 'SA',
      rc: '(1)',
      ammo: '14(c)',
      avail: '10F',
      cost: 17500,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -17500,
      },
    ],
  },
  {
    key: 'CavalierArmsCrocketEBR',
    name: 'Cavalier Arms Crocket EBR',
    tags: ['sniper rifle'],
    accessories: {
      stock: internalize(shockPad),
      top: internalize(imagingScope),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.UNDER,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.STOCK,
    ],
    weaponStats: {
      acc: 6,
      accWithMods: null,
      damage: '12P',
      ap: -3,
      mode: 'SA/BF',
      rc: '(1)',
      ammo: '20(c)',
      avail: '12F',
      cost: 10300,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -10300,
      },
    ],
  },
  {
    key: 'RangerArmsSM-5',
    name: 'Ranger Arms SM-5',
    tags: ['sniper rifle'],
    accessories: {
      stock: internalize(shockPad),
      top: internalize(imagingScope),
      barrel: internalize(supressor),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.UNDER,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.STOCK,
    ],
    weaponStats: {
      acc: 8,
      accWithMods: null,
      damage: '14P',
      ap: -5,
      mode: 'SA',
      rc: '(1)',
      ammo: '15(c)',
      avail: '16F',
      cost: 28000,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -28000,
      },
    ],
  },
  {
    key: 'Remington950',
    name: 'Remington 950',
    tags: ['sniper rifle'],
    accessories: {
      top: internalize(imagingScope),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.STOCK,
    ],
    weaponStats: {
      acc: 7,
      accWithMods: null,
      damage: '12P',
      ap: -4,
      mode: 'SS',
      rc: null,
      ammo: '5(m)',
      avail: '4R',
      cost: 2100,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -2100,
      },
    ],
  },
  {
    key: 'Ruger100',
    name: 'Ruger 100',
    tags: ['sniper rifle'],
    accessories: {
      stock: internalize(shockPad),
      top: internalize(imagingScope),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.TOP,
      accessoryTypes.UNDER,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.STOCK,
    ],
    weaponStats: {
      acc: 6,
      accWithMods: null,
      damage: '11P',
      ap: -3,
      mode: 'SA',
      rc: '(1)',
      ammo: '8(m)',
      avail: '4R',
      cost: 1300,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1300,
      },
    ],
  },
]
