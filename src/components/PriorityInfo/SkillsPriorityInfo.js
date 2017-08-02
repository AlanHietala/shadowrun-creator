import React from 'react'
import PropTypes from 'prop-types'

const SkillsPriorityInfo = ({priorityInfo}) => {
  return (<div>{`Group pts: ${priorityInfo.groupPoints} skill pts: ${priorityInfo.points}`}</div>)
}

SkillsPriorityInfo.propTypes = {
  priorityInfo: PropTypes.object,
}

export default SkillsPriorityInfo
