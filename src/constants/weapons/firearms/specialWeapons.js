import * as modTypes from '../../modTypes'

export default [
  {
    key: 'AresS-IIISuperSquirt',
    name: 'Ares S-III Super Squirt',
    tags: ['special weapon'],
    weaponStats: {
      acc: 3,
      accWithMods: null,
      damage: 'Chemical',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '20(c)',
      avail: '7R',
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
    key: 'FichettiPainInducer',
    name: 'Fichetti Pain Inducer',
    tags: ['special weapon'],
    weaponStats: {
      acc: 3,
      accWithMods: null,
      damage: 'special',
      ap: null,
      mode: 'SS',
      rc: null,
      ammo: 'special',
      avail: '11R',
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
    key: 'ParashieldDartPistol',
    name: 'Parashield Dart Pistol',
    tags: ['special weapon'],
    weaponStats: {
      acc: 5,
      accWithMods: null,
      damage: 'as Drug/Toxin',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '5(c)',
      avail: '4R',
      cost: 600,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -600,
      },
    ],
  },
  {
    key: 'ParashieldDartRifle',
    name: 'Parashield Dart Rifle',
    tags: ['special weapon'],
    weaponStats: {
      acc: 6,
      accWithMods: null,
      damage: 'as Drug/Toxin',
      ap: null,
      mode: 'SA',
      rc: null,
      ammo: '6(m)',
      avail: '6R',
      cost: 1200,
    },
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -1200,
      },
    ],
  },
]
