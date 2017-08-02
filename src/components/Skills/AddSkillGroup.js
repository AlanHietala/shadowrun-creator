import React from 'react'
import {ListItem} from 'material-ui/List'
import ContentAdd from 'material-ui/svg-icons/content/add'
import PropTypes from 'prop-types'

const AddSkillGroup = ({ skillGroup, modifySkillGroupFn }) => {
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

AddSkillGroup.propTypes = {
  skillGroup: PropTypes.array,
  modifySkillGroupFn: PropTypes.func,
}

export default AddSkillGroup
