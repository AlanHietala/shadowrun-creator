import { createRating } from '../ware/wareHelpers'
import R from 'ramda'

const fakeSIN = {
  key: 'fakeSIN',
  name: 'fake SIN',
  tags: ['sin'],
  selectedRatingIndex: 0,
  rating: 1,
  ...createRating(1, 2500, '3F', []),
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 2500, rating * 3 + 'F', [])),
}

const fakeLicense = {
  key: 'fakeLicense',
  name: 'Fake License',
  tags: ['sin'],
  selectedRatingIndex: 0,
  rating: 1,
  ...createRating(1, 200, '3F', []),
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 200, rating * 3 + 'F', [])),
}

export default [
  fakeSIN,
  fakeLicense,
]
