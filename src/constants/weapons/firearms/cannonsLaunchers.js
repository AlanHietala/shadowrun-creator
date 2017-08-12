import * as modTypes from '../../modTypes'

export default [
  {
    key: 'AresAntioch-2',
    name: 'Ares Antioch-2',
    tags: ['grenade launcher'],
    weaponStats: {
      acc: 4,
      accWithMods: 6,
      damage: 'grenade',
      ap: null,
      mode: 'SS',
      rc: null,
      ammo: '8)m',
      avail: '8F',
      cost: 3200,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -3200,
      },
    ],
  },
  {
    key: 'ArmTechMGL-12',
    name: 'ArmTech MGL-12',
    tags: ['grenade launcher'],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: 'grenade',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '12(c)',
      avail: '10F',
      cost: 5000,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -5000,
      },
    ],
  },
  {
    key: 'AztechnologyStriker',
    name: 'Aztechnology Striker',
    tags: ['missile launcher'],
    weaponStats: {
      acc: 5,
      accWithMods: null,
      damage: 'missile',
      ap: null,
      mode: 'SS',
      rc: null,
      ammo: '1(ml)',
      avail: '10F',
      cost: 1200,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1200,
      },
    ],
  },
  {
    key: 'KrimeCannon',
    name: 'Krime Cannon',
    tags: ['cannon'],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '16P',
      ap: -6,
      mode: 'SA',
      rc: '(1)',
      ammo: '6(m)',
      avail: '20F',
      cost: 21000,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -21000,
      },
    ],
  },
  {
    key: 'OnotariInterceptor',
    name: 'Onotari Interceptor',
    tags: ['missile launcher'],
    weaponStats: {
      acc: 4,
      accWithMods: 6,
      damage: 'missile',
      ap: null,
      mode: 'SS',
      rc: null,
      ammo: '2(ml)',
      avail: '18F',
      cost: 14000,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -14000,
      },
    ],
  },
  {
    key: 'PantherXXL',
    name: 'Panther XXL',
    tags: ['cannon'],
    weaponStats: {
      acc: 5,
      accWithMods: 7,
      damage: '17P',
      ap: -6,
      mode: 'SS',
      rc: null,
      ammo: '15(c)',
      avail: '20F',
      cost: 43000,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -43000,
      },
    ],
  },

]
