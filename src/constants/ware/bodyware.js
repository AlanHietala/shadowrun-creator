import * as modTypes from '../modTypes'
import { createRating } from './wareHelpers'
import R from 'ramda'

const plasticBoneLacing = {
  key: 'plasticBoneLacing',
  name: 'Plastic Bone Lacing',
  tags: [],
  cost: 8000,
  avail: '8R',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -8000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.5,
    },
  ],
}

const aluminumBoneLacing = {
  key: 'aluminumBoneLacing',
  name: 'Aluminum Bone Lacing',
  tags: [],
  cost: 18000,
  avail: '12R',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -12000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -1,
    },
  ],
}

const titaniumBoneLacing = {
  key: 'titaniumBoneLacing',
  name: 'Titanium Bone Lacing',
  tags: [],
  cost: 30000,
  avail: '16R',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -30000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -1.5,
    },
  ],
}

const dermalPlating = {
  key: 'dermalPlating',
  name: 'Dermal Plating',
  tags: [],
  cost: 3000,
  avail: '4R',
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 4 + 'R' ,rating * 3000, [{
      modType: modTypes.ESSENCE_MOD,
      effect: rating * -0.5,
    }])),
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -3000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.5,
    },
  ],
}

export const fingertipCompartment = {
  key: 'fingertipCompartment',
  name: 'Fingertip Compartment',
  tags: [],
  cost: 3000,
  avail: '4',
  capacityRequired: 1,
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -3000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

export const grappleGun = {
  key: 'grappleGun',
  name: 'Grapple Gun',
  tags: [],
  cost: 5000,
  avail: '8',
  capacityRequired: 4,
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -5000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.5,
    },
  ],
}

const airTank = {
  key: 'airTank',
  name: 'Air Tank',
  tags: [],
  cost: 4500,
  avail: '1',
  capacityRequired: 3,
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, rating, rating * 4500, [{
      modType: modTypes.ESSENCE_MOD,
      effect: rating * -0.25,
    }]), null, 3),
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -4500,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.25,
    },
  ],
}

const muscleReplacement = {
  key: 'muscleReplacement',
  name: 'Muscle Replacement',
  tags: [],
  ...createRating(1, '5R', 25000,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1,
  },
  {
    modType: modTypes.STRENGTH_MOD,
    effect: 1,
  },
  {
    modType: modTypes.AGILITY_MOD,
    effect: 1,
  },
  ]),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 5)
    .map(rating => createRating(rating, rating, rating * 25000, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -1,
      },
      {
        modType: modTypes.STRENGTH_MOD,
        effect: rating,
      },
      {
        modType: modTypes.AGILITY_MOD,
        effect: rating,
      },
    ])),
}

const reactionEnhancers = {
  key: 'reactionEnhancers',
  name: 'Reaction Enhancers',
  tags: [],
  ...createRating(1, '5R', 13000,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.3,
  },
  {
    modType: modTypes.REACTION_MOD,
    effect: 1,
  },
  ]),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, rating * 5 + 'R', rating * 13000, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.3,
      },
      {
        modType: modTypes.REACTION_MOD,
        effect: rating,
      },
    ])),
}

const skillwires = {
  key: 'skillwires',
  name: 'Skillwires',
  tags: [],
  ...createRating(1, 4, 20000,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.1,
  }]),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 4, rating * 20000, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.1,
      }])),
}

export const smugglingCompartment = {
  key: 'smugglingCompartment',
  name: 'Smuggling Compartment',
  tags: [],
  capacityRequired: 2,
  ...createRating(1, 6, 7500,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.2,
  }]),
}

const wiredReflexes = {
  key: 'wiredReflexes',
  name: 'Wired Reflexes',
  tags: [],
  ...createRating(1, '8R', 39000,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -2,
  },
  {
    modType: modTypes.INITIATIVE_DICE_MOD,
    effect: 1,
  },
  {
    modType: modTypes.REACTION_MOD,
    effect: 1,
  },
  ]),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: [
    createRating(1, '8R', 39000,  [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -2,
      },
      {
        modType: modTypes.INITIATIVE_DICE_MOD,
        effect: 1,
      },
      {
        modType: modTypes.REACTION_MOD,
        effect: 1,
      },
    ]),
    createRating(2, '12R', 149000,  [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -3,
      },
      {
        modType: modTypes.INITIATIVE_DICE_MOD,
        effect: 2,
      },
      {
        modType: modTypes.REACTION_MOD,
        effect: 2,
      },
    ]),
    createRating(3, '20R', 217000,  [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -5,
      },
      {
        modType: modTypes.INITIATIVE_DICE_MOD,
        effect: 3,
      },
      {
        modType: modTypes.REACTION_MOD,
        effect: 3,
      },
    ]),
  ],
}

export default [
  plasticBoneLacing,
  aluminumBoneLacing,
  titaniumBoneLacing,
  dermalPlating,
  fingertipCompartment,
  grappleGun,
  airTank,
  muscleReplacement,
  reactionEnhancers,
  skillwires,
  smugglingCompartment,
  wiredReflexes,
]
