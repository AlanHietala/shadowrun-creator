export const STANDARD = 'Standard'
export const ALPHAWARE = 'Alphaware'
export const BETAWARE = 'Betaware'
export const DELTAWARE = 'Deltaware'
export const USED = 'Used'

export const wareGrades = [
  STANDARD,
  ALPHAWARE,
  BETAWARE,
  DELTAWARE,
  USED,
]

export const wareMultipliers = {
  [STANDARD]: {
    ESSENCE_MOD: 1.0,
    RESOURCES_MOD: 1.0,
    AVAILABILITY_MOD: 0,
  },
  [ALPHAWARE]: {
    ESSENCE_MOD: 0.8,
    RESOURCES_MOD: 1.2,
    AVAILABILITY_MOD: 2,
  },
  [BETAWARE]: {
    ESSENCE_MOD: 0.7,
    RESOURCES_MOD: 1.5,
    AVAILABILITY_MOD: 4,
  },

  [DELTAWARE]: {
    ESSENCE_MOD: 0.5,
    RESOURCES_MOD: 2.5,
    AVAILABILITY_MOD: 8,
  },
  [USED]: {
    ESSENCE_MOD: 1.25,
    RESOURCES_MOD: 0.75,
    AVAILABILITY_MOD: -4,
  },
}
