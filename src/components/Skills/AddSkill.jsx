import React from 'react'

import {ListItem} from 'material-ui/List'
import ContentAdd from 'material-ui/svg-icons/content/add'

export default ({ skill, modifyFn, addSpecializationFn, removeSpecializationFn }) => {
  const specializations = skill.specializations.map((specialization, index) => {
    return (<button key={specialization} onClick={() => addSpecializationFn(index)}>{specialization}</button> )
  })

  const selectedSpecializations = skill.selectedSpecializations.map((specialization, index) => {
    return (<button key={specialization} onClick={ () => removeSpecializationFn(index)}>{specialization}</button> )
  })

  return (
    <ListItem
      rightIcon={<ContentAdd />}
      onTouchTap={ ()=>{ modifyFn(skill, 1) } }>
      { skill.name }
    </ListItem>
  )
}