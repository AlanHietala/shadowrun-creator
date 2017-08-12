import * as modTypes from '../../modTypes'

export default [
  {
    key: 'AK97',
    name: 'AK97',
    tags: ['assault rifle'],
    weaponStats: {
      acc: 5,
      accWithMods: null,
      damage: '10P',
      ap: -2,
      mode: 'SA/BF/FA',
      rc: null,
      ammo: '38(c)',
      avail: '4R',
      cost: 950,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -950,
      },
    ],
  },
  {
    key: 'Ares Alpha',
    name: 'Ares Alpha',
    tags: ['assault rifle'],
    weaponStats: {
      acc: 5,
      accWithMods: 7,
      damage: '11P',
      ap: -2,
      mode: 'SA/BF/FA',
      rc: 2,
      ammo: '42(c)',
      avail: '11F',
      cost: 2650,
    },
    subItem: [
      {
        key: 'aresAlphaGL',
        name: 'Grenade Launcher',
        tags: ['grenade Launcher'],
        weaponStats: {
          acc: 4,
          accWithMods: 6,
          damage: '-',
          ap: '-',
          mode: 'SS',
          rc: null,
          ammo: '6(c)',
          avail: '-',
          cost: 0,
        },
        mods: [
          {
            modType: modTypes.RESOURCES_MOD,
            effect: -0,
          },
        ],
      },
    ],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -2650,
      },
    ],
  },
  {
    key: 'coltm23',
    name: 'Colt M23',
    tags: ['assault rifle'],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '9P',
      ap: -2,
      mode: 'SA/BF/FA',
      rc: null,
      ammo: '40(c)',
      avail: '4R',
      cost: 1500,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1500,
      },
    ],
  },
  {
    key: 'yamaharaiden',
    name: 'Yamaha reloadWithDebugInfo',
    tags: ['assault rifle'],
    weaponStats: {
      acc: 6,
      accWithMods: 8,
      damage: '11P',
      ap: -2,
      mode: 'BF/FA',
      rc: 1,
      ammo: '60(c)',
      avail: '14F',
      cost: 2600,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -2600,
      },
    ],
  },
]
