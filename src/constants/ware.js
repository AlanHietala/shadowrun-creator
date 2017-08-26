import * as modTypes from './modTypes'
import cyberEyes from './ware/cybereyes/cybereyes'

export default [
  ...cyberEyes,
  {
    name: 'Reaction Enhancer 1',
    tags: [],
    mods: [
      {
        modType: modTypes.REACTION_MOD,
        effect: 1,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -1,
      },
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -18000,
      },
    ],
  },
  {
    name: 'Muscle Toner 1',
    tags: [],
    mods: [
      {
        modType: modTypes.STRENGTH_MOD,
        effect: 1,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -1,
      },
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -18000,
      },
    ],
  },
  {
    name: 'Tailored Pheremones I',
    tags: [],
    mods: [
      {
        modType: modTypes.SOCIAL_LIMIT_MOD,
        effect: 1,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -0.2,
      },
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -13000,
      },
    ],
  },
]
