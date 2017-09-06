import magicalEquipment from './equipment/magicalEquipment'
import ammo from './equipment/ammo'
import comlinks from './equipment/comlinks'
import accessories from './equipment/accessories'
import rfidtags from './equipment/rfidtags'
import communications from './equipment/communications'
import identification from './equipment/identification'

const items = [
  ...magicalEquipment,
  ...ammo,
  ...comlinks,
  ...accessories,
  ...rfidtags,
  ...communications,
  ...identification,
]

export default items
