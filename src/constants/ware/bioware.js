import * as modTypes from '../modTypes'
import { createRating } from './wareHelpers'
import R from 'ramda'

const adrenalinePump = {
  key: 'adrenalinePump',
  name: 'Adrenaline Pump',
  tags: ['bioware'],
  ...createRating(1, 55000, '6F', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.75,
  }]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, rating * 55000, rating * 6 +'F', [{
      modType: modTypes.ESSENCE_MOD,
      effect: rating * -0.75,
    }])),
}

const boneDensityAug = {
  key: 'boneDensityAug',
  name: 'Bone Density Augmentation',
  tags: ['bioware'],
  ...createRating(1, 5000, 4, [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.3,
  },
  {
    modType: modTypes.BODY_MOD,
    effect: 1,
  }]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 5)
    .map(rating => createRating(rating, rating * 5000, rating * 4, [{
      modType: modTypes.ESSENCE_MOD,
      effect: rating * -0.3,
    },
    {
      modType: modTypes.BODY_MOD,
      effect: rating,
    }])),
}

const catsEye = {
  key: 'catsEye',
  name: 'Cats Eye',
  tags: ['bioware'],
  ...createRating(null, 4000, 4, [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.1,
  }]),
}

const enhancedArticulation = {
  key: 'enhancedArticulation',
  name: 'Enhanced Articulation',
  tags: ['bioware'],
  ...createRating(null, 24000, 12, [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.3,
  }]),
}

const muscleAugmentation = {
  key: 'muscleAugmentation',
  name: 'Muscle Augmentation',
  tags: ['bioware'],
  ...createRating(1, 31000, '5R', [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
    {
      modType: modTypes.STRENGTH_MOD,
      effect: 1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 5)
    .map(rating => createRating(rating, rating * 31000, rating * 5 + 'R', [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.2,
      },
      {
        modType: modTypes.STRENGTH_MOD,
        effect: rating,
      },
    ])),
}

const muscleToner = {
  key: 'muscleToner',
  name: 'Muscle Toner',
  tags: ['bioware'],
  ...createRating(1, 32000, '5R', [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
    {
      modType: modTypes.AGILITY_MOD,
      effect: 1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 5)
    .map(rating => createRating(rating, rating * 32000, rating * 5 + 'R', [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.2,
      },
      {
        modType: modTypes.AGILITY_MOD,
        effect: rating,
      },
    ])),
}

const orthoskin = {
  key: 'orthoskin',
  name: 'Orthoskin',
  tags: ['bioware'],
  ...createRating(1, 6000, '5R', [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.25,
    },
    {
      modType: modTypes.ARMOR_MOD,
      effect: 1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 5)
    .map(rating => createRating(rating, rating * 6000, rating * 4 + 'R', [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.25,
      },
      {
        modType: modTypes.ARMOR_MOD,
        effect: rating,
      },
    ])),
}

const pathogenicDefense = {
  key: 'pathogenicDefense',
  name: 'Pathogenic Defense',
  tags: ['bioware'],
  ...createRating(1, 4500, '5R', [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 4500, rating * 2, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.1,
      },
    ])),
}

const plateletFactories = {
  key: 'plateletFactories',
  name: 'Platelet Factories',
  tags: ['bioware'],
  ...createRating(null, 17000, 12, [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.2,
  }]),
}

const skinPocket = {
  key: 'skinPocket',
  name: 'Skin Pocket',
  tags: ['bioware'],
  ...createRating(null, 12000, 4, [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.1,
  }]),
}

const suprathyroidGland = {
  key: 'suprathyroidGland',
  name: 'Suprathyroid Gland',
  tags: ['bioware'],
  ...createRating(null, 140000, '20R', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.7,
  }]),
}

const symbiotes = {
  key: 'symbiotes',
  name: 'Symbiotes',
  tags: ['bioware'],
  ...createRating(1, 3500, 5, [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 5)
    .map(rating => createRating(rating, rating * 3500, rating * 5, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.2,
      },
    ])),
}

const synthacardium = {
  key: 'synthacardium',
  name: 'Synthacardium',
  tags: ['bioware'],
  ...createRating(1, 30000, 4, [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 5)
    .map(rating => createRating(rating, rating * 30000, rating * 4, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.1,
      },
    ])),
}

const tailoredPheromones = {
  key: 'tailoredPheromones',
  name: 'Tailored Pheromones',
  tags: ['bioware'],
  ...createRating(1, 30000, 4, [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
    {
      modType: modTypes.SOCIAL_LIMIT_MOD,
      effect: 1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, rating * 31000, rating * 4 + 'R', [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.2,
      },
      {
        modType: modTypes.SOCIAL_LIMIT_MOD,
        effect: rating,
      },
    ])),
}

const toxinExtractor = {
  key: 'toxinExtractor',
  name: 'Toxin Extractor',
  tags: ['bioware'],
  ...createRating(1, 4800, 3, [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.2,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 4800, rating * 3, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.2,
      },
    ])),
}

const trachealFilter = {
  key: 'trachealFilter',
  name: 'Tracheal Filter',
  tags: ['bioware'],
  ...createRating(1, 4500, 3, [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 4500, rating * 3, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.2,
      },
    ])),
}
export default [
  adrenalinePump,
  boneDensityAug,
  catsEye,
  enhancedArticulation,
  muscleAugmentation,
  muscleToner,
  orthoskin,
  pathogenicDefense,
  plateletFactories,
  skinPocket,
  suprathyroidGland,
  symbiotes,
  synthacardium,
  tailoredPheromones,
  toxinExtractor,
  trachealFilter,
]
