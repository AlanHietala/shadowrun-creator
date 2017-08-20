const internalize = accessory => {
  return {
    ...accessory,
    isInstalled: true,
    mods: [],
  }
}

export default internalize
