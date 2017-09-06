import { createRating } from '../ware/wareHelpers'

const standardTags = {
  key: 'standardTags',
  name: 'Standard Tags',
  deviceRating: 1,
  ...createRating(null, 1, '-',  []),
  tags: ['rfid'],
}

const dataChip = {
  key: 'standardTags',
  name: 'Standard Tags',
  deviceRating: 1,
  ...createRating(null, 5, '-',  []),
  tags: ['rfid'],
}

const securityTags = {
  key: 'securityTags',
  name: 'Security Tags',
  deviceRating: 3,
  ...createRating(null, 5, 3,  []),
  tags: ['rfid'],
}


const sensorTags = {
  key: 'sensorTags',
  name: 'Sensor Tags',
  deviceRating: 2,
  ...createRating(null, 40, 5,  []),
  tags: ['rfid'],
}

const stealthTags = {
  key: 'stealthTags',
  name: 'Stealth Tags',
  deviceRating: 3,
  ...createRating(null, 10, '7R',  []),
  tags: ['rfid'],
}


export default [
  standardTags,
  dataChip,
  securityTags,
  sensorTags,
  stealthTags,
]
