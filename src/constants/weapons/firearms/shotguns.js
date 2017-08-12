import * as modTypes from '../../modTypes'

export default [
  {
    key: 'DefianceT-250',
    name: 'Defiance T-250',
    tags: ['shotgun'],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '10P',
      ap: -1,
      mode: 'SS/SA',
      rc: null,
      ammo: '5(m)',
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
  {
    key: 'EnfieldAS-7',
    name: 'Enfield AS-7',
    tags: ['shotgun'],
    weaponStats: {
      acc: 4,
      accWithMods: 5,
      damage: '13P',
      ap: -1,
      mode: 'SA/BF',
      rc: null,
      ammo: '10(c) or 24(d)',
      avail: '12F',
      cost: 1100,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1100,
      },
    ],
  },
  {
    key: 'PJSSModel55',
    name: 'PJSS Model 55',
    tags: ['shotgun'],
    weaponStats: {
      acc: 6,
      accWithMods: null,
      damage: '11P',
      ap: -1,
      mode: 'SS',
      rc: '(1)',
      ammo: '2(b)',
      avail: '9R',
      cost: 1000,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1000,
      },
    ],
  },
]
