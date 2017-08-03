import React from 'react'
import CreationSummary from '../CreationSummary/CreationSummary'
import {Route} from 'react-router-dom'
import PrioritiesList from '../PrioritiesList/PrioritiesList'
import MetatypePicker from '../MetatypePicker/MetatypePicker'
import MagicTypes from '../MagicTypes/MagicTypes'
import Attributes from '../Attributes/Attributes'
import QualityPicker from '../Qualities/QualityPicker'
import SkillsPicker from '../Skills/SkillsPicker'
import SpellsPicker from '../Spells/SpellsPicker'
import EquipmentPicker from '../Equipment/EquipmentPicker'
import WarePicker from '../Ware/WarePicker'

const Creation = () => (<div>
  <CreationSummary />
  <Route path="/creation/priority" component={ PrioritiesList } />
  <Route path="/creation/metatype" component={ MetatypePicker } />
  <Route path="/creation/magic" component={ MagicTypes } />
  <Route path="/creation/attributes" component={ Attributes } />
  <Route path="/creation/qualities" component={ QualityPicker } />
  <Route path="/creation/skills" component={ SkillsPicker } />
  <Route path="/creation/spells" component={ SpellsPicker } />
  <Route path="/creation/ware" component={ WarePicker } />
  <Route path="/creation/equipment" component={ EquipmentPicker } />
</div>
)

export default Creation
