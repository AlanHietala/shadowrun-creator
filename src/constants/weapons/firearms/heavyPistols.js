import * as modTypes from '../../modTypes'

export default [
  {
    key: 'AresPredatorV',
    name: 'Ares Predator V',
    tags: ['heavy pistol', 'pistol'],
    weaponStats: {
      acc: 5,
      accWithMods: 7,
      damage: '8P',
      ap: -1,
      mode: 'SA',
      rc: null,
      ammo: '15(c)',
      avail: '5R ',
      cost: 725,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -725,
      },
    ],
  },
  {
    key: 'AresViperSilverGun',
    name: 'Ares Viper Silvergun',
    tags: ['heavy pistol', 'pistol'],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '9P(f)',
      ap: 4,
      mode: 'SA/BF',
      rc: null,
      ammo: '30c',
      avail: '8F',
      cost: 380,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -380,
      },
    ],
  },
  {
    key: 'BrowningUltraPower',
    name: 'Browning Ultra-Power',
    tags: ['heavy pistol', 'pistol'],
    weaponStats: {
      acc: 5,
      accWithMods: 6,
      damage: '8P',
      ap: -1,
      mode: 'SA',
      rc: null,
      ammo: '10(c)',
      avail: '4R',
      cost: 640,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -640,
      },
    ],
  },
  {
    key: 'ColtGovernment2066',
    name: 'Colt Government 2066',
    tags: ['heavy pistol'],
    weaponStats: {
      acc: 6,
      accWithMods: null,
      damage: '8P',
      ap: -1,
      mode: 'SA',
      rc: null,
      ammo: '14(c)',
      avail: '7R',
      cost: 425,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -425,
      },
    ],
  },
  {
    key: 'Remington Roomsweeper',
    name: 'Remington Roomsweeper',
    tags: ['heavy pistol'],
    weaponStats: {
      acc: 4,
      accWithMods: null,
      damage: '7P',
      ap: -1,
      mode: 'SA',
      rc: null,
      ammo: '8(m)',
      avail: '6R',
      cost: 250,
    },
    subItems: [
      {
        key: 'remington w flechettes',
        name: 'w/ flechettes',
        tags: [],
        weaponStats: {
          acc: null,
          accWithMods: null,
          damage: '9P(f)',
          ap: +4,
          mode: null,
          rc: null,
          ammo: null,
          avail: null,
          cost: null,
        },
        mods: [
        ],
      },
    ],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -250,
      },
    ],
  },
  {
    key: 'RugerSuperWarhawk',
    name: 'Ruger Super Warhawk',
    tags: ['heavy pistol'],
    weaponStats: {
      acc: 5,
      accWithMods: null,
      damage: '9P',
      ap: -2,
      mode: 'SS',
      rc: null,
      ammo: '6(cyl)',
      avail: '4R',
      cost: 400,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -400,
      },
    ],
  },
]
