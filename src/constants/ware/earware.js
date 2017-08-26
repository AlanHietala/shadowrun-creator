import * as modTypes from '../modTypes'
import {installableOption} from './wareHelpers'

const audioEnhancementI = {
  key: 'audioEnhancementI',
  name: 'Audio Enchancement I',
  tags: [],
  capacityRequired: 1,
  cost: 4000,
  avail: '3',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -4000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const audioEnhancementII = {
  key: 'audioEnhancementII',
  name: 'Audio Enhancement II',
  tags: [],
  capacityRequired: 2,
  cost: 8000,
  avail: '6',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -8000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const audioEnhancementIII = {
  key: 'audioEnhancementIII',
  name: 'Audio Enhancement III',
  tags: [],
  capacityRequired: 3,
  cost: 12000,
  avail: '9',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -12000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const balanceAugmenter = {
  key: 'balanceAugmenter',
  name: 'Balance Augmenter',
  tags: [],
  capacityRequired: 4,
  cost: 8000,
  avail: '8',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -8000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const damper = {
  key: 'damper',
  name: 'Damper',
  tags: [],
  capacityRequired: 1,
  cost: 2250,
  avail: '6',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -2250,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const selectSoundFilter = {
  key: 'selectSoundFilter',
  name: 'Select Sound Filter TBD',
  tags: [],
  capacityRequired: 1,
  cost: 3500,
  avail: '3',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -3500,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const soundLink = {
  key: 'soundLink',
  name: 'Sound Link',
  tags: [],
  capacityRequired: 1,
  cost: 1000,
  avail: '4',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -1000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}

const spacialRecognizer = {
  key: 'spacialRecognizer',
  name: 'Spacial Recognizer',
  tags: [],
  capacityRequired: 2,
  cost: 4000,
  avail: '8',
  mods: [
    {
      modType: modTypes.RESOURCES_MOD,
      effect: -4000,
    },
    {
      modType: modTypes.ESSENCE_MOD,
      effect: -0.1,
    },
  ],
}
export default [
  audioEnhancementI,
  audioEnhancementII,
  audioEnhancementIII,
  balanceAugmenter,
  damper,
  selectSoundFilter,
  soundLink,
  spacialRecognizer,
  {
    key: 'cyberearsI',
    name: 'Cyberears I',
    tags: [],
    availableOptions: [
      installableOption(audioEnhancementI),
      installableOption(audioEnhancementII),
      installableOption(audioEnhancementIII),
      installableOption(balanceAugmenter),
      installableOption(damper),
      installableOption(selectSoundFilter),
      installableOption(spacialRecognizer),
    ],
    capacity: 4,
    cost: 3000,
    avail: 3,
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -3000,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -0.2,
      },
    ],
  },
  {
    key: 'cyberearsII',
    name: 'Cyberears II',
    tags: [],
    availableOptions: [
      installableOption(audioEnhancementI),
      installableOption(audioEnhancementII),
      installableOption(audioEnhancementIII),
      installableOption(balanceAugmenter),
      installableOption(damper),
      installableOption(selectSoundFilter),
      installableOption(spacialRecognizer),
    ],
    capacity: 8,
    cost: 4500,
    avail: 6,
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -4500,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -0.3,
      },
    ],
  },
  {
    key: 'cyberearsIII',
    name: 'Cyberears III',
    tags: [],
    availableOptions: [
      installableOption(audioEnhancementI),
      installableOption(audioEnhancementII),
      installableOption(audioEnhancementIII),
      installableOption(balanceAugmenter),
      installableOption(damper),
      installableOption(selectSoundFilter),
      installableOption(spacialRecognizer),
    ],
    capacity: 12,
    cost: 7500,
    avail: 9,
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -7500,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -0.4,
      },
    ],
  },
  {
    key: 'cyberearsIV',
    name: 'Cyberears IV',
    tags: [],
    availableOptions: [
      installableOption(audioEnhancementI),
      installableOption(audioEnhancementII),
      installableOption(audioEnhancementIII),
      installableOption(balanceAugmenter),
      installableOption(damper),
      installableOption(selectSoundFilter),
      installableOption(spacialRecognizer),
    ],
    capacity: 16,
    cost: 11000,
    avail: 12,
    mods: [
      {
        modType: modTypes.RESOURCES_MOD,
        effect: -12000,
      },
      {
        modType: modTypes.ESSENCE_MOD,
        effect: -0.5,
      },
    ],
  },
]
