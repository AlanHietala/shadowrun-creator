import * as modTypes from '../../modTypes'

export default [
  {
    key: 'fichettiTiffaniNeedler',
    name: 'Fichetti Tiffani Needler',
    tags: ['holdout', 'semiauto'],
    weaponStats: {
      acc: 5,
      accWithMods: null,
      damage: '8P(f)',
      ap: 5,
      mode: 'SA',
      rc: null,
      ammo: '4(c)',
      avail: '5R',
      cost: 1000,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1000,
      },
    ],
  },
  {
    key: 'StreetlineSpecial',
    name: 'Streetline Special',
    tags: ['holdout'],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '6P',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '6c',
      avail: '4R',
      cost: 120,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -120,
      },
    ],
  },
  {
    key: 'WaltherPalmPistol',
    name: 'Walther Palm Pistol',
    tags: ['holdout'],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '7P',
      ap: null,
      mode: 'SS/BF',
      rc: null,
      ammo: '2(b)',
      avail: '4R',
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
