import * as modTypes from './modTypes'

export default [
  {
    key: 'aresPredatorV',
    name: 'Ares Predator V',
    tags: ['heavy pistol', 'pistol', 'smartlink'],
    weaponStats: {
      acc: 5,
      accWithMods: 7,
      damage: '7P',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '15c',
      avail: '5R',
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
    key: 'streetlineSpecial',
    name: 'Streetline Special',
    tags: ['holdout', 'pistol'],
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
]
