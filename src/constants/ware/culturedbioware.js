
import * as modTypes from '../modTypes'
import { createRating } from './wareHelpers'
import R from 'ramda'

const cerebralBooster = {
  key: 'cerebralBooster',
  name: 'Cerebral Booster',
  ...createRating(1, 31500, 6, [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, rating * 31500, rating * 6, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.2,
      },
    ])),
}

const damageCompensators = {
  key: 'damageCompensator',
  name: 'Damage Compensator',
  ...createRating(1, 2000, 3, [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 12)
    .map(rating => createRating(rating, rating * 2000, rating * 3, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.1,
      },
    ])),
}

const mnemonicEnhancer = {
  key: 'mnemonicEnhancer',
  name: 'Mnemonic Enhancer',
  ...createRating(1, 9000, 5, [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 0,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, rating * 2000, rating * 5, [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.1,
      },
    ])),
}

const painEditor = {
  key: 'painEditor',
  name: 'Pain Editor',
  tags: [],
  ...createRating(null ,48000, '18F', [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.3,
    },
  ]),
}

const sleepRegulator = {
  key: 'sleepRegulator',
  name: 'Sleep Regulator',
  tags: [],
  ...createRating(null ,12000, '6', [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ]),
}

const synapticBooster = {
  key: 'synapticBooster',
  name: 'Synaptic Booster',
  ...createRating(1, 95000, '6R', [
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.5,
    },
    {
      modType: modTypes.REACTION_MOD,
      effect: 1,
    },
    {
      modType: modTypes.INITIATIVE_DICE_MOD,
      effect: 1,
    },
  ]),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 4)
    .map(rating => createRating(rating, rating * 95000, rating * 6 + 'R', [
      {
        modType: modTypes.ESSENCE_MOD,
        effect: rating * -0.5,
      },
      {
        modType: modTypes.REACTION_MOD,
        effect: rating,
      },
      {
        modType: modTypes.INITIATIVE_DICE_MOD,
        effect: rating,
      },
    ])),
}
export default [
  cerebralBooster,
  damageCompensators,
  mnemonicEnhancer,
  painEditor,
  sleepRegulator,
  synapticBooster,
]
