import * as modTypes from './modTypes'

export default [
  {
    key: 'aresPredatorV',
    name: 'Ares Predator V',
    tags: ['heavy pistol', 'pistol', 'smartlink'],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -725,
      },
    ],
  },
  {
    key: 'streetLineSpecial',
    name: 'Streetline Special',
    tags: ['holdout', 'pistol'],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -125,
      },
    ],
  },
  {
    key: 'traumaPatch',
    name: 'Trauma Patch',
    tags: ['healing'],
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -500,
      },
    ],
  },
]
