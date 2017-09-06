import { createRating } from '../ware/wareHelpers'
import R from 'ramda'

const bugScanner = {
  key: 'bugScanner',
  name: 'Bug Scanner',
  tags: ['communications'],
  selectedRatingIndex: 0,
  rating: 1,
  ...createRating(1, 100, '1R', []),
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 100, rating + 'R', [])),
}

const dataTap = {
  key: 'dataTap',
  name: 'Data Tap',
  tags: ['communications'],
  ...createRating(null, 300, '6R',  []),
}

const headJammer = {
  key: 'headJammer',
  name: 'Head Jammer',
  tags: ['communications'],
  selectedRatingIndex: 0,
  rating: 1,
  ...createRating(1, 150, '1R', []),
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 150, rating + 'R', [])),
}

const jammerArea = {
  key: 'jammerArea',
  name: 'Jammer Area',
  tags: ['communications'],
  selectedRatingIndex: 0,
  rating: 1,
  ...createRating(1, 200, '3R', []),
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 200, rating * 3 + 'R', [])),
}

const jammerDirectional = {
  key: 'jammerDirectional',
  name: 'Jammer Directional',
  tags: ['communications'],
  selectedRatingIndex: 0,
  rating: 1,
  ...createRating(1, 200, '2R', []),
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 200, rating * 2 + 'R', [])),
}

const microTransceiver = {
  key: 'microTransceiver',
  name: 'Micro Transceiver',
  tags: ['communications'],
  ...createRating(null, 100, 2,  []),
}


const tagEraser = {
  key: 'tagEraser',
  name: 'Tag Eraser',
  tags: ['communications'],
  ...createRating(null, 450, '6R',  []),
}

const whiteNoiseGenerator = {
  key: 'whiteNoiseGenerator',
  name: 'White Noise Generator',
  tags: ['communications'],
  selectedRatingIndex: 0,
  rating: 1,
  ...createRating(1, 50, 1, []),
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 50, rating, [])),
}

export default [
  bugScanner,
  dataTap,
  headJammer,
  jammerArea,
  jammerDirectional,
  microTransceiver,
  tagEraser,
  whiteNoiseGenerator,
]
