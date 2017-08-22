import * as modTypes from '../../modTypes'

const installableOption = (option) => {
  const essenceIndex = option.mods.findIndex(mod => mod.modType === modTypes.ESSENCE_MOD)
  const mods = [
    ...option.mods.slice(0, essenceIndex),
    ...option.mods.slice(essenceIndex + 1),
  ]
  return {
    ...option,
    mods,
  }
}

const flareCompensation = {
  key: 'flareCompensation',
  name: 'Flare Compensation',
  tags: [],
  capacity: -1,
  cost: 1000,
  avail: 3,
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -1000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
  ],
}


export default [
  flareCompensation,
  {
    key: 'cybereyesI',
    name: 'Cybereyes I',
    tags: [],
    installedOptions: [],
    availableOptions: [
      installableOption(flareCompensation),
    ],
    capacity: 4,
    cost: 4000,
    avail: 3,
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -4000,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -0.2,
      },
    ],
  },
]
