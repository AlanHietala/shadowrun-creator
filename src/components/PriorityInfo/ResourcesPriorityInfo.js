import React from 'react'
import PropTypes from 'prop-types'


const ResourcesPriorityInfo = ({priorityInfo}) =>  (
  <div>{`You Receive ${priorityInfo} nuyen`}</div>
)

ResourcesPriorityInfo.propTypes = {
  priorityInfo: PropTypes.number,
}

export default ResourcesPriorityInfo
