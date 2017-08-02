import React from 'react'
import {ListItem} from 'material-ui/List'
import ContentAdd from 'material-ui/svg-icons/content/add'

export default ({skillGroup, modifySkillGroupFn}) => {
  const skills = skillGroup.skills.map((skill) => {
    return skill.name
  }).join(', ')

  return (
    <ListItem
      rightIcon={<ContentAdd />}
      onTouchTap={ () => {modifySkillGroupFn(skillGroup, 1)}}>
      { skillGroup.name } ({skills})
    </ListItem>
  )
}
