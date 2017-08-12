import * as modTypes from '../../modTypes'

export default [
  {
    key: 'AresLightfire75',
    name: 'Ares Light Fire 75',
    tags: ['light pistol', 'pistol'],
    weaponStats: {
      acc: 5,
      accWithMods: 7,
      damage: '6P',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '16(c)',
      avail: '6F',
      cost: 1250,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1250,
      },
    ],
  },
  {
    key: 'AresLightFire70',
    name: 'Ares Light Fire 70',
    tags: ['light pistol', 'pistol'],
    weaponStats: {
      acc: 7,
      accWithMods: null,
      damage: '6P',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '16(c)',
      avail: '3R',
      cost: 200,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -200,
      },
    ],
  },
  {
    key: 'Beretta201T',
    name: 'Beretta 201T',
    tags: ['light pistol', 'pistol'],
    weaponStats: {
      acc: 6,
      accWithMods: null,
      damage: '6P',
      ap: null,
      mode: 'SA/BF',
      rc: 1,
      ammo: '21(c)',
      avail: '7R',
      cost: 210,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -210,
      },
    ],
  },
  {
    key: 's',
    name: 'Colt America L36',
    tags: ['light pistol', 'pistol'],
    weaponStats: {
      acc: 7,
      accWithMods: null,
      damage: '7P',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '11(c)',
      avail: '4R',
      cost: 320,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -320,
      },
    ],
  },
  {
    key: 'FichettiSecurity600',
    name: 'Fichetti Security 600',
    tags: ['light pistol', 'pistol'],
    weaponStats: {
      acc: 6,
      accWithMods: 7,
      damage: '7P',
      ap: null,
      mode: 'SA',
      rc: 1,
      ammo: '30(c)',
      avail: '6R',
      cost: 350,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -350,
      },
    ],
  },
  {
    key: 'TaurusOmni-6',
    name: 'Taurus Omni-6',
    tags: ['light pistol', 'pistol'],
    weaponStats: {
      acc: 5,
      accWithMods: 6,
      damage: '6P/7P',
      ap: '0/-1',
      mode: 'SA/SS',
      rc: null,
      ammo: '6(cyl)',
      avail: '3R',
      cost: 300,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -300,
      },
    ],
  },
]
