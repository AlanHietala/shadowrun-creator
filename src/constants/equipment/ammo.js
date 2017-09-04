import { createRating } from '../ware/wareHelpers'
import { COUNT } from './equipmentTypes'

const apds = {
  key: 'apdsRounds',
  name: 'APDS Rounds',
  tags: ['ammo'],
  ...createRating(1, 120, '12F',  []),
  itemType: COUNT,
  count: 1,
}

const assaultCannonRounds = {
  key: 'assaultCannonAmmo',
  name: 'Assault Cannon Rounds',
  tags: ['ammo'],
  ...createRating(1, 400, '12F',  []),
  itemType: COUNT,
  count: 1,
}

const explosiveRounds = {
  key: 'explosiveRounds',
  name: 'Explosive Rounds',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 80, '9F',  []),
  itemType: COUNT,
  count: 1,
}
const flechetteRounds = {
  key: 'flechetteRounds',
  name: 'Flechette Rounds',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 65, '6R',  []),
  itemType: COUNT,
  count: 1,
}

const gelRounds = {
  key: 'gelRounds',
  name: 'Gel Rounds',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 25, '2R',  []),
  itemType: COUNT,
  count: 1,
}

const hollowPoints = {
  key: 'hollowPoints',
  name: 'Hollow Points',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 70, '4F',  []),
  itemType: COUNT,
  count: 1,
}

const injectionDarts = {
  key: 'injectionDarts',
  name: 'Injection Darts',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 75, '4R',  []),
  itemType: COUNT,
  count: 1,
}

const regularAmmo = {
  key: 'regularAmmo',
  name: 'Regular Ammo',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 20, '2R',  []),
  itemType: COUNT,
  count: 1,
}

const stickNShock = {
  key: 'stickNShock',
  name: 'Stick-N-Shock',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 80, '6R',  []),
  itemType: COUNT,
  count: 1,
}

const tracer = {
  key: 'tracerRounds',
  name: 'Tracer Rounds',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 60, '6R',  []),
  itemType: COUNT,
  count: 1,
}

const taserDart = {
  key: 'taserDart',
  name: 'Taser Dart',
  tags: ['ammo', 'rounds'],
  ...createRating(1, 50, 3,  []),
  itemType: COUNT,
  count: 1,
}

const flashBang = {
  key: 'flashBang',
  name: 'Flash-bang Grenade',
  tags: ['ammo', 'grenade'],
  ...createRating(1, 100, '6R',  []),
  itemType: COUNT,
  count: 1,
}

const flashPak = {
  key: 'flashPak',
  name: 'Flash-pak Grenade',
  tags: ['ammo', 'grenade'],
  ...createRating(1, 125, 4,  []),
  itemType: COUNT,
  count: 1,
}

const fragmentation = {
  key: 'fragmentation',
  name: 'Fragmentation Grenade',
  tags: ['ammo', 'grenade'],
  ...createRating(1, 100, '11F',  []),
  itemType: COUNT,
  count: 1,
}

const highExplosive = {
  key: 'highExplosive',
  name: 'High Explosive Grenade',
  tags: ['ammo', 'grenade'],
  ...createRating(1, 100, '11F',  []),
  itemType: COUNT,
  count: 1,
}

const smoke = {
  key: 'smoke',
  name: 'Smoke Grenade',
  tags: ['ammo', 'grenade'],
  ...createRating(1, 40, '4R',  []),
  itemType: COUNT,
  count: 1,
}

const thermalSmoke = {
  key: 'thermalSmoke',
  name: 'Thermal Smoke Grenade',
  tags: ['ammo', 'grenade'],
  ...createRating(1, 60, '6R',  []),
  itemType: COUNT,
  count: 1,
}

const antiVehicleRocket = {
  key: 'antiVehicleRocket',
  name: 'Anti-vehicle Rocket',
  tags: ['ammo', 'rocket'],
  ...createRating(1, 2800, '18F',  []),
  itemType: COUNT,
  count: 1,
}

const fragmentationRocket = {
  key: 'fragmentationRocket',
  name: 'Framentation Rocket',
  tags: ['ammo', 'rocket'],
  ...createRating(1, 2000, '18F',  []),
  itemType: COUNT,
  count: 1,
}

const highExplosiveRocket = {
  key: 'highExplosiveRocket',
  name: 'High-explosive Rocket',
  tags: ['ammo', 'rocket'],
  ...createRating(1, 2100, '18F',  []),
  itemType: COUNT,
  count: 1,
}

export default [
  apds,
  assaultCannonRounds,
  explosiveRounds,
  flechetteRounds,
  gelRounds,
  hollowPoints,
  injectionDarts,
  regularAmmo,
  stickNShock,
  tracer,
  taserDart,
  flashBang,
  flashPak,
  fragmentation,
  highExplosive,
  smoke,
  thermalSmoke,
  antiVehicleRocket,
  fragmentationRocket,
  highExplosiveRocket,
]
