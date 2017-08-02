import React from 'react'
import { ListItem } from 'material-ui/List'
import ContentAdd from 'material-ui/svg-icons/content/add'
import PropTypes from 'prop-types'

const AddSkill = ({ skill, modifyFn }) => {
  return (
    <ListItem
      rightIcon={<ContentAdd />}
      onTouchTap={ ()=>{ modifyFn(skill, 1) } }>
      { skill.name }
    </ListItem>
  )
}

AddSkill.propTypes = {
  skill: PropTypes.object,
  modifyFn: PropTypes.func,
}

export default AddSkill
