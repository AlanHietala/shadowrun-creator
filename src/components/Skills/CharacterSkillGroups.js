import React from 'react'
import SkillGroup from './SkillGroup'
import PropTypes from 'prop-types'

const CharacterSkillGroups = ({ skillGroups, filterFn, modifySkillGroupFn }) => {
  const passThrough = () => true

  filterFn = filterFn || passThrough

  const skillGroupList = skillGroups
    .filter(filterFn)
    .map((skillGroup) => {
      return (<SkillGroup key={ skillGroup.name } skillGroup={ skillGroup } modifySkillGroupFn={ modifySkillGroupFn } />)
    })

  return (<div>
    {skillGroupList}
  </div>)
}

CharacterSkillGroups.propTypes = {
  skillGroups: PropTypes.array,
  filterFn: PropTypes.func,
  modifySkillGroupFn: PropTypes.func,
}

export default CharacterSkillGroups
