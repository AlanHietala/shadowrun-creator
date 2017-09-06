import { createRating, installableOption } from '../ware/wareHelpers'

const simModule = {
  key: 'simModule',
  name: 'Sim Module',
  ...createRating(null, 100, 2,  []),
  tags: [],
}
const hotSim = {
  key: 'hotSim',
  name: 'Hot-sim',
  ...createRating(null, 250, 2,  []),
  tags: [],
}

const comlinkOptions = [
  simModule,
  hotSim,
]

const metaLink = {
  key: 'metaLink',
  name: 'Meta Link',
  deviceRating: 1,
  ...createRating(null, 100, 2,  []),
  tags: ['comlink'],
  availableOptions: comlinkOptions.map(option => installableOption(option)),
}

const sonyEmperor = {
  key: 'sonyEmperor',
  name: 'Sony Emperor',
  deviceRating: 2,
  ...createRating(null, 700, 4,  []),
  tags: ['comlink'],
  availableOptions: comlinkOptions.map(option => installableOption(option)),
}

const renrakuSensei = {
  key: 'renrakuSensei',
  name: 'Renraku Sensei',
  deviceRating: 3,
  ...createRating(null, 1000, 6,  []),
  tags: ['comlink'],
  availableOptions: comlinkOptions.map(option => installableOption(option)),
}

const erikaElite = {
  key: 'erikaElite',
  name: 'Erika Elite',
  deviceRating: 4,
  ...createRating(null, 2500, 8,  []),
  tags: ['comlink'],
  availableOptions: comlinkOptions.map(option => installableOption(option)),
}

const hermesIkon = {
  key: 'hermesIkon',
  name: 'Hermes Ikon',
  deviceRating: 5,
  ...createRating(null, 3000, 10,  []),
  tags: ['comlink'],
  availableOptions: comlinkOptions.map(option => installableOption(option)),
}

const transysAvalon = {
  key: 'transysAvalon',
  name: 'Transys Avalon',
  deviceRating: 6,
  ...createRating(null, 5000, 12,  []),
  tags: ['comlink'],
  availableOptions: comlinkOptions.map(option => installableOption(option)),
}

const fairlightCaliban = {
  key: 'fairlightCaliban',
  name: 'Fairlight Caliban',
  deviceRating: 7,
  ...createRating(null, 8000, 14,  []),
  tags: ['comlink'],
  availableOptions: comlinkOptions.map(option => installableOption(option)),
}

export default [
  metaLink,
  sonyEmperor,
  renrakuSensei,
  erikaElite,
  hermesIkon,
  transysAvalon,
  fairlightCaliban,
]
