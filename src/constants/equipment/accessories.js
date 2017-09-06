import { createRating } from '../ware/wareHelpers'

const arGloves = {
  key: 'metaLink',
  name: 'Meta Link',
  deviceRating: 3,
  ...createRating(null, 150, '-',  []),
  tags: ['accessories'],
}

const biometricReader = {
  key: 'biometricReader',
  name: 'Biometric Reader',
  deviceRating: 3,
  ...createRating(null, 200, 4,  []),
  tags: ['accessories'],
}

const electronicPaper = {
  key: 'electronicPaper',
  name: 'Electronic Paper',
  deviceRating: 1,
  ...createRating(null, 5, '-',  []),
  tags: ['accessories'],
}

const printer = {
  key: 'printer',
  name: 'printer',
  deviceRating: 3,
  ...createRating(null, 25, '-',  []),
  tags: ['accessories'],
}

const sateliteLink = {
  key: 'sateliteLink',
  name: 'Satelite Link',
  deviceRating: 4,
  ...createRating(null, 500, 6,  []),
  tags: ['accessories'],
}

const simrig = {
  key: 'simrig',
  name: 'Simrig',
  deviceRating: 3,
  ...createRating(null, 1000, 12,  []),
  tags: ['accessories'],
}


const subvocalMic = {
  key: 'subvocalMic',
  name: 'Subvocal Mic',
  deviceRating: 3,
  ...createRating(null, 50, 4,  []),
  tags: ['accessories'],
}

const tridProjector = {
  key: 'tridProjector',
  name: 'Trid Projector',
  deviceRating: 3,
  ...createRating(null, 200, '-',  []),
  tags: ['accessories'],
}

const trodes = {
  key: 'trodes',
  name: 'Trodes',
  deviceRating: 3,
  ...createRating(null, 70, '-',  []),
  tags: ['accessories'],
}



export default [
  arGloves,
  biometricReader,
  electronicPaper,
  printer,
  sateliteLink,
  simrig,
  subvocalMic,
  tridProjector,
  trodes,
]
