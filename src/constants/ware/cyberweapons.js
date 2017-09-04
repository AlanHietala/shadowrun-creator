import * as modTypes from '../modTypes'
import { createRating } from './wareHelpers'

const cyberHoldout = {
  key: 'cyberHoldout',
  name: 'Hold-out Pistol',
  tags: [],
  ...createRating(null , 2000, '8R', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.1,
  }], null, 2),
}

const cyberLightPistol = {
  key: 'cyberLightPistol',
  name: 'Light Pistol',
  tags: [],
  ...createRating(null , 3900, '10R', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.25,
  }], null, 4),
}

const cyberMachinePistol = {
  key: 'cyberMachinePistol',
  name: 'Machine Pistol',
  tags: [],
  ...createRating(null , 3500, '12R', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.5,
  }], null, 6),
}

const cyberHeavyPistol = {
  key: 'cyberHeavyPistol',
  name: 'Heavy Pistol',
  tags: [],
  ...createRating(null , 4300, '12R', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.5,
  }], null, 6),
}

const cyberSubmachineGun = {
  key: 'cyberSubmachineGun',
  name: 'Submachine Gun',
  tags: [],
  ...createRating(null , 4800, '12R', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1,
  }], null, 8),
}

const cyberShotgun = {
  key: 'cyberShotgun',
  name: 'Shotgun',
  tags: [],
  ...createRating(null , 8500, '12R', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1.25,
  }], null, 10),
}

const cyberGrenadeLauncher = {
  key: 'cyberGrenadeLauncher',
  name: 'Grenade Launcher',
  tags: [],
  ...createRating(null , 30000, '20F', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1.5,
  }], null, 15),
}

const cyberLaserSight = {
  key: 'cyberLaserSight',
  name: 'Laser Sight',
  tags: [],
  ...createRating(null , 1000,'-', [], null, 1),
}

const cyberSilencerSupressor = {
  key: 'cyberSilencerSuppressor',
  name: 'Silencer / Suppressor',
  tags: [],
  ...createRating(null , 1000,'-', [], null, 2),
}

const cyberExternalClipPort = {
  key: 'cyberExternalClipPort',
  name: 'External Clip Port',
  tags: [],
  ...createRating(null , 1000,'-', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.1,
  }], null, 1),
}

const cyberHandBlade = {
  key: 'cyberHandBlade',
  name: 'Hand Blade',
  tags: [],
  ...createRating(null , 2500,'10F', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.25,
  }], null, 2),
}

const cyberHandRazors = {
  key: 'cyberHandRazors',
  name: 'Hand Razors',
  tags: [],
  ...createRating(null , 1250,'8F', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.2,
  }], null, 2),
}

const cyberSpurs = {
  key: 'cyberSpurs',
  name: 'Spurs',
  tags: [],
  ...createRating(null , 5000, '12F', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.3,
  }], null, 3),
}

const cyberShockHand = {
  key: 'cyberShockHand',
  name: 'Shock Hand',
  tags: [],
  ...createRating(null , 5000, '8R', [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.25,
  }], null, 4),
}

export default [
  cyberHoldout,
  cyberLightPistol,
  cyberMachinePistol,
  cyberHeavyPistol,
  cyberSubmachineGun,
  cyberShotgun,
  cyberGrenadeLauncher,
  cyberLaserSight,
  cyberSilencerSupressor,
  cyberExternalClipPort,
  cyberHandBlade,
  cyberHandRazors,
  cyberSpurs,
  cyberShockHand,
]
