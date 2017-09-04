import * as modTypes from '../modTypes'
import { createRating, installableOption } from './wareHelpers'
import { limbInstallables as installableBodyOptions } from './bodyware'
import cyberWeapons from './cyberweapons'

import R from 'ramda'

const armorEnhancement = {
  key: 'armorEnhancment',
  name: 'Armor Enhancement',
  tags: [],
  ...createRating(1, 3000, 5,  [{
    modType: modTypes.ARMOR_MOD,
    effect: 1,
  }], null, 1),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 3000, rating * 5, [
      {
        modType: modTypes.ARMOR_MOD,
        effect: rating,
      }], null, rating)),
}

const strengthEnhancement = {
  key: 'strengthEnhancment',
  name: 'Strength Enhancement',
  tags: [],
  ...createRating(1, 6500, '3R',  [{
    modType: modTypes.ARMOR_MOD,
    effect: 1,
  }], null, 1),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 3000, rating * 5, [
      {
        modType: modTypes.ARMOR_MOD,
        effect: rating,
      }], null, rating)),
}

const agilityEnhancement = {
  key: 'agilityEnhancment',
  name: 'Agility Enhancement',
  tags: [],
  ...createRating(1, 6500, 3, [{
    modType: modTypes.AGILITY_MOD,
    effect: 1,
  }], null, 1),
  selectedRatingIndex: 0,
  rating: 1,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 6500, rating * 3 + 'R', [
      {
        modType: modTypes.AGILITY_MOD,
        effect: rating * -0.1,
      }], null, rating)),
}

const cyberarmGyromount = {
  key: 'cyberarmGyromount',
  name: 'Cyberarm Gyromount',
  tags: [],
  ...createRating(null ,6000, '12F', [], null, 8),
}

const cyberarmSlide = {
  key: 'cyberarmSlide',
  name: 'Cyberarm Slide',
  tags: [],
  ...createRating(null ,3000, '12R', [], null, 3),
}

const cyberarmHolster = {
  key: 'cyberarmHolster',
  name: 'Cyber Holster',
  tags: [],
  ...createRating(null ,2000, '8R', [], null, 5),
}

const hydraulicJacks = {
  key: 'hydraulicJacks',
  name: 'Hydraulic Jacks',
  tags: [],
  ...createRating(null ,2000, '8R', [], null, 5),
  rating: 1,
  selectedRatingIndex: 0,
  ratings: R.range(1, 7)
    .map(rating => createRating(rating, rating * 2500, 9, [], null, rating)),
}

const largeSmugglingCompartment = {
  key: 'largeSmugglingCompartment',
  name: 'Large Smuggling Compartment',
  tags: [],
  ...createRating(null ,8000, 6, [], null, 5),
}

const cyberLimbStandardOptions = [
  ...installableBodyOptions.map(option => installableOption(option)),
  agilityEnhancement,
  armorEnhancement,
  strengthEnhancement,
  installableOption(cyberarmGyromount),
  installableOption(cyberarmSlide),
  installableOption(cyberarmHolster),
  installableOption(hydraulicJacks),
  installableOption(largeSmugglingCompartment),
]

const obviousFullArm = {
  key: 'obviousFullArm',
  name: 'Obvious Full Arm',
  grade: 'Standard',
  ...createRating(null,15000, 4,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1,
  }], 15),
  tags: [],
  availableOptions: [
    ...cyberLimbStandardOptions,
    ...cyberWeapons.map(option => installableOption(option)),
  ],
}

const syntheticFullArm = {
  ...obviousFullArm,
  key: 'synthenticFullArm',
  name: 'Synthetic Full Arm',
  ...createRating(null,20000, 4,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1,
  }], 8),
}

const obviousHand = {
  key: 'obviousHand',
  name: 'Obvious Hand',
  grade: 'Standard',
  ...createRating(null, 5000, 2,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.25,
  }], 4),
  tags: [],
  availableOptions: [
    ...cyberLimbStandardOptions,
    ...cyberWeapons.map(option => installableOption(option)),
  ],
}

const syntheticHand = {
  ...obviousHand,
  key: 'syntheticHand',
  name: 'Synthetic Hand',
  ...createRating(null, 6000, 2,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.25,
  }], 2),
}

const obviousFoot = {
  key: 'obviousFoot',
  name: 'Obvious Foot',
  grade: 'Standard',
  ...createRating(null, 5000, 2,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.25,
  }], 4),
  tags: [],
  availableOptions: [
    ...cyberLimbStandardOptions,
  ],
}

const syntheticFoot = {
  ...obviousFoot,
  key: 'syntheticFoot',
  name: 'Synthetic Foot',
  ...createRating(null, 6000, 2,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.25,
  }], 2),
}

const obviousFullLeg = {
  key: 'obviousFullLeg',
  name: 'Obvious Full Leg',
  grade: 'Standard',
  ...createRating(null, 15000, 4,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1,
  }], 20),
  tags: [],
  availableOptions: [
    ...cyberLimbStandardOptions,
  ],
}

const syntheticFullLeg = {
  ...obviousFullLeg,
  key: 'syntheticFullLeg',
  name: 'Synthetic Full Leg',
  ...createRating(null, 20000, 4,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1,
  }], 10),
}

const obviousLowerArm = {
  key: 'obviousLowerArm',
  name: 'Obvious Lower Arm',
  grade: 'Standard',
  ...createRating(null, 10000, 4,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.45,
  }], 10),
  tags: [],
  availableOptions: [
    ...cyberLimbStandardOptions,
    ...cyberWeapons.map(option => installableOption(option)),
  ],
}

const syntheticLowerArm = {
  ...obviousLowerArm,
  key: 'syntheticLowerArm',
  name: 'Synthetic Lower Arm',
  ...createRating(null, 12000, 4,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.45,
  }], 5),
}

const obviousLowerLeg = {
  key: 'obviousLowerLeg',
  name: 'Obvious Lower Leg',
  grade: 'Standard',
  ...createRating(null, 10000, 4,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.45,
  }], 12),
  tags: [],
  availableOptions: [
    ...cyberLimbStandardOptions,
  ],
}

const syntheticLowerLeg = {
  ...obviousLowerLeg,
  key: 'syntheticLowerLeg',
  name: 'Synthetic Lower Leg',
  ...createRating(null, 12000, 4,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.45,
  }], 6),
}

const obviousTorso = {
  key: 'obviousTorso',
  name: 'Obvious Torso',
  grade: 'Standard',
  ...createRating(null, 20000, 12, [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1.5,
  }], 10),
  tags: [],
  availableOptions: [
    ...cyberLimbStandardOptions,
  ],
}

const syntheticTorso = {
  ...obviousTorso,
  key: 'syntheticTorso',
  name: 'Synthetic Torso',
  ...createRating(null, 25000, 12,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -1.5,
  }], 5),
}

const obviousSkull = {
  key: 'obviousSkull',
  name: 'Obvious Skull',
  grade: 'Standard',
  ...createRating(null, 10000, 16, [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.75,
  }], 10),
  tags: [],
  availableOptions: [
    ...cyberLimbStandardOptions,
  ],
}

const syntheticSkull = {
  ...obviousSkull,
  key: 'syntheticSkull',
  name: 'Synthetic Skull',
  ...createRating(null, 15000, 16,  [{
    modType: modTypes.ESSENCE_MOD,
    effect: -0.75,
  }], 2),
}

export default [
  obviousFullArm,
  obviousFullLeg,
  obviousFoot,
  obviousHand,
  obviousLowerLeg,
  obviousLowerArm,
  obviousTorso,
  obviousSkull,
  syntheticFullArm,
  syntheticFullLeg,
  syntheticHand,
  syntheticFoot,
  syntheticLowerArm,
  syntheticLowerLeg,
  syntheticTorso,
  syntheticSkull,
]
