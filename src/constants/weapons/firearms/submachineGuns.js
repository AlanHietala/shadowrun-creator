import * as modTypes from '../../modTypes'
import * as accessoryTypes from './accessories/accessoryTypes'
import internalize from './accessories/accessoryHelpers'
import { suppressorGasVentII, suppressor, foldingStock, gasVentSystemII, smartgunSystemInternal, laserSight } from './accessories/accessories'

export default [
  {
    key: 'coltCobratz-12',
    name: 'Colt Cobra TZ-120',
    tags: ['machine pistol'],
    accessories: {
      stock: internalize(foldingStock),
      top: internalize(laserSight),
      barrel: internalize(gasVentSystemII),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.INTERNAL,
      accessoryTypes.TOP,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.FOLDING_STOCK,
    ],
    weaponStats: {
      acc: 4,
      accWithMods: 5,
      damage: '7P',
      ap: null,
      mode: 'SA/BF/FA',
      rc: '2(3)',
      ammo: '32(c)',
      avail: '5R',
      cost: 660,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -660,
      },
    ],
  },
  {
    key: 'FNP93praetor',
    name: 'FN P93 Praetor',
    tags: ['submachine gun'],
    accessories: {},
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.INTERNAL,
      accessoryTypes.TOP,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.FOLDING_STOCK,
    ],
    weaponStats: {
      acc: 6,
      accWithMods: null,
      damage: '8P',
      ap: null,
      mode: 'SA/BF/FA',
      rc: '1(2)',
      ammo: '50(c)',
      avail: '11F',
      cost: 900,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -900,
      },
    ],
  },
  {
    key: 'HK-227',
    name: 'HK-227',
    tags: ['submachine gun'],
    accessories: {
      internal: internalize(smartgunSystemInternal),
      barrel: internalize(suppressor),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.INTERNAL,
      accessoryTypes.TOP,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.FOLDING_STOCK,
    ],
    weaponStats: {
      acc: 5,
      accWithMods: 7,
      damage: '7P',
      ap: null,
      mode: 'SA/BF/FA',
      rc: '(1)',
      ammo: '28(c)',
      avail: '8R',
      cost: 730,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -730,
      },
    ],
  },
  {
    key: 'IngramSmartgunX',
    name: 'Ingram Smartgun X',
    tags: ['submachine gun'],
    accessories: {
      internal: internalize(smartgunSystemInternal),
      barrel: internalize(suppressorGasVentII),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.INTERNAL,
      accessoryTypes.TOP,
      accessoryTypes.SUPPRESSOR_GAS_VENT_II,
      accessoryTypes.BARREL,
      accessoryTypes.FOLDING_STOCK,
    ],
    weaponStats: {
      acc: 4,
      accWithMods: 6,
      damage: '8P',
      ap: null,
      mode: 'BF/FA',
      rc: 2,
      ammo: '32(c)',
      avail: '6R',
      cost: 800,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -800,
      },
    ],
  },
  {
    key: 'SCKModel100',
    name: 'SCK Model 100',
    tags: ['submachine gun'],
    accessories: {
      internal: internalize(smartgunSystemInternal),
      stock: internalize(foldingStock),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.INTERNAL,
      accessoryTypes.TOP,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.FOLDING_STOCK,
    ],
    weaponStats: {
      acc: 5,
      accWithMods: 7,
      damage: '8P',
      ap: null,
      mode: 'SA/BF',
      rc: '(1)',
      ammo: '30(c)',
      avail: '6R',
      cost: 875,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -875,
      },
    ],
  },
  {
    key: 'UziIV',
    name: 'Uzi IV',
    accessories: {
      stock: internalize(foldingStock),
      top: internalize(laserSight),
    },
    allowedAccessories: [
      accessoryTypes.ALL,
      accessoryTypes.INTERNAL,
      accessoryTypes.TOP,
      accessoryTypes.SILENCER_SUPPRESSOR,
      accessoryTypes.BARREL,
      accessoryTypes.FOLDING_STOCK,
    ],
    tags: ['submachine gun'],
    weaponStats: {
      acc: 4,
      accWithMods: 5,
      damage: '7P',
      ap: null,
      mode: 'BF',
      rc: '(1)',
      ammo: '24(c)',
      avail: '4R',
      cost: 450,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -450,
      },
    ],
  },
]
