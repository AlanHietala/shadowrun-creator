import * as attributeTypes from './attributeTypes'
const skillArray = [
  {
    name: 'Archery',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    specializations: [
      'Bow',
      'Crossbow',
      'Non-Standard Ammunition',
      'Slingshot'
    ],
    selectedSpecializations: []
  },
  {
    name: 'Automatics',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: [
      'Assault Rifles',
      'Cyber-Implant',
      'Machine Pistols',
      'Submachine Guns'
    ]
  },
  {
    name: 'Blades',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: [
      'Axes',
      'Knives',
      'Swords',
      'Parrying'
    ]
  },
  {
    name: 'Clubs',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: [
      'Batons',
      'Hammers',
      'Saps',
      'Staves',
      'Parrying'
    ]
  },
  {
    name: 'Escape Artist',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: []
  },
  {
    name: 'Exotic Melee Weapon',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: []
  },
  {
    name: 'Exotic Range Weapon',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: []
  },
  {
    name: 'Gunnery',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: []
  },
  {
    name: 'Gymnastics',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: []
  },
  {
    name: 'Heavy Weapons',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: [
      'Assault Cannons',
      'Grenade Launchers',
      'Guided Missiles',
      'Machine Guns',
      'Rocket Launchers']
  },
  {
    name: 'Locksmith',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: []
  },
  {
    name: 'Longarms',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: [
      'Extended-Range Shots',
      'Long-Range Shots',
      'Shotguns',
      'Sniper Rifles'
    ]
  },
  {
    name: 'Palming',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: []
  },
  {
    name: 'Pistols',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: [
      'Holdouts',
      'Revolvers',
      'Semi-Automatics',
      'Tasers'
    ]
  },
  {
    name: 'Sneaking',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: []
  },
  {
    name: 'Throwing Weapons',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: [
      'Aerodynamic',
      'Blades',
      'Non-Aerodynamic'
    ]
  },
  {
    name: 'Unarmed Combat',
    points: 0,
    attribute: attributeTypes.AGILITY,
    canDefault: true,
    selectedSpecializations: [],specializations: [
      'Blocking',
      'Cyber Implants',
      'Subduing Combat'
    ]
  },
  {
    name: 'Diving',
    points: 0,
    attribute: attributeTypes.BODY,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Free-Fall',
    points: 0,
    attribute: attributeTypes.BODY,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Pilot Aerospace',
    points: 0,
    attribute: attributeTypes.REACTION,
    canDefault: false, selectedSpecializations: [],specializations: []

  },
  {
    name: 'Pilot Aircraft',
    points: 0,
    attribute: attributeTypes.REACTION,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Pilot Walker',
    points: 0,
    attribute: attributeTypes.REACTION,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Pilot Exotic Vehicle',
    points: 0,
    attribute: attributeTypes.REACTION,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Pilot Ground Craft',
    points: 0,
    attribute: attributeTypes.REACTION,
    canDefault: true, selectedSpecializations: [],specializations: []

  },
  {
    name: 'Pilot Watercraft',
    points: 0,
    attribute: attributeTypes.REACTION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Running',
    points: 0,
    attribute: attributeTypes.STRENGTH,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Swimming',
    points: 0,
    attribute: attributeTypes.STRENGTH,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Con',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Etiquette',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Instruction',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Intimidation',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Leadership',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Negotiation',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Performance',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Impersonation',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Animal Handling',
    points: 0,
    attribute: attributeTypes.CHARISMA,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Artisan',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Assensing',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Disguise',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Interests Knowledge',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Language',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Navigation',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Perception',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Street Knowledge',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Tracking',
    points: 0,
    attribute: attributeTypes.INTUITION,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Academic Knowledge',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Aeronautics Mechanics',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Arcane',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Armorer',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Automotive Mechanics',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Biotechnology',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Chemistry',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Computer',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Cybertechnology',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Cybercombat',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Demolitions',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Electronic Warfare',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'First Aid',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Industrial Mechanics',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Hacking',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Hardware',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Medicine',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Nautical Mechanics',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Professional Knowledge',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Software',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Forgery',
    points: 0,
    attribute: attributeTypes.LOGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Astral Combat',
    points: 0,
    attribute: attributeTypes.WILLPOWER,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Survival',
    points: 0,
    attribute: attributeTypes.WILLPOWER,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Alchemy',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Artificing',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: true, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Banishing',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Binding',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Counterspelling',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Ritual Spellcasting',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Spellcasting',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Summoning',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Enchanting',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Disenchanting',
    points: 0,
    attribute: attributeTypes.MAGIC,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Compiling',
    points: 0,
    attribute: attributeTypes.RESONANCE,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Decompiling',
    points: 0,
    attribute: attributeTypes.RESONANCE,
    canDefault: false, selectedSpecializations: [],specializations: []
  },
  {
    name: 'Registering',
    points: 0,
    attribute: attributeTypes.RESONANCE,
    canDefault: false, selectedSpecializations: [],specializations: []
  }
]
const skillMap = {
  archery: skillArray[0],
  automatics: skillArray[1],
  blades: skillArray[2],
  clubs: skillArray[3],
  escapeArtist: skillArray[4],
  exoticMeleeWeapon: skillArray[5],
  exoticRangeWeapon: skillArray[6],
  gunnery: skillArray[7],
  gymnastics: skillArray[8],
  heavyWeapons: skillArray[9],
  locksmith: skillArray[10],
  longarms: skillArray[11],
  palming: skillArray[12],
  pistols: skillArray[13],
  sneaking: skillArray[14],
  throwingWeapon: skillArray[15],
  unarmedCombat: skillArray[16],
  diving: skillArray[17],
  freeFall: skillArray[18],
  pilotAerospace: skillArray[19],
  pilotAircraft: skillArray[20],
  pilotWalker: skillArray[21],
  pilotExoticVehicle: skillArray[22],
  pilotGroundCraft: skillArray[23],
  pilotWatercraft: skillArray[24],
  running: skillArray[25],
  swimming: skillArray[26],
  con: skillArray[27],
  etiquette: skillArray[28],
  instruction: skillArray[29],
  intimidation: skillArray[30],
  leadership: skillArray[31],
  negotiation: skillArray[32],
  performance: skillArray[33],
  impersonation: skillArray[34],
  animalHandling: skillArray[35],
  artisan: skillArray[36],
  assensing: skillArray[37],
  disguise: skillArray[38],
  interestsKnowledge: skillArray[39],
  language: skillArray[40],
  navigation: skillArray[41],
  perception: skillArray[42],
  streetKnowledge: skillArray[43],
  tracking: skillArray[44],
  academicKnowledge: skillArray[45],
  aeronauticsMechanics: skillArray[46],
  arcane: skillArray[47],
  armorer: skillArray[48],
  automotiveMechanics: skillArray[49],
  biotechnology: skillArray[50],
  chemistry: skillArray[51],
  computer: skillArray[52],
  cybertechnology: skillArray[53],
  cybercombat: skillArray[54],
  demolitions: skillArray[55],
  electronicWarfare: skillArray[56],
  firstAid: skillArray[57],
  industrialMechanics: skillArray[58],
  hacking: skillArray[59],
  hardware: skillArray[60],
  medicine: skillArray[61],
  nauticalMechanics: skillArray[62],
  professionalKnowledge: skillArray[63],
  software: skillArray[64],
  forgery: skillArray[65],
  astralCombat: skillArray[66],
  survival: skillArray[67],
  alchemy: skillArray[68],
  artificing: skillArray[69],
  banishing: skillArray[70],
  binding: skillArray[71],
  counterspelling: skillArray[72],
  ritualSpellcasting: skillArray[73],
  spellcasting: skillArray[74],
  summoning: skillArray[75],
  enchanting: skillArray[76],
  disenchanting: skillArray[77],
  compiling: skillArray[78],
  decompiling: skillArray[79],
  registering: skillArray[80]
}
export default {
  skillArray,
  skillMap
}
