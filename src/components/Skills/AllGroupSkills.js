import React from 'react'
import AddSkillGroup from './AddSkillGroup'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import PropTypes from 'prop-types'

const AllGroupSkills = ({ skillGroups, filterFn, modifySkillGroupFn }) => {
  const passThrough = () => true

  filterFn = filterFn || passThrough

  const skillGroupList = skillGroups
    .filter(filterFn)
    .map((skillGroup) => {
      return (<AddSkillGroup key={ skillGroup.name } skillGroup={ skillGroup } modifySkillGroupFn={ modifySkillGroupFn } />)
    })

  return (<List>
    <Subheader>Skill Groups</Subheader>
    {skillGroupList}
  </List>)
}

AllGroupSkills.propTypes = {
  skillGroups: PropTypes.array,
  filterFn: PropTypes.func,
  modifySkillGroupFn: PropTypes.func,
}

export default AllGroupSkills
