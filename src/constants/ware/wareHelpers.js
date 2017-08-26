import * as modTypes from '../modTypes'

export const installableOption = (option) => {
  const essenceIndex = option.mods.findIndex(mod => mod.modType === modTypes.ESSENCE_MOD)
  const mods = [
    ...option.mods.slice(0, essenceIndex),
    ...option.mods.slice(essenceIndex + 1),
  ]
  return {
    ...option,
    mods,
    isInstalled: false,
  }
}
