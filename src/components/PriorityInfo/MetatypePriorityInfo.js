import React from 'react'
import PropTypes from 'prop-types'

const MetatypePriorityInfo = ({ priorityInfo }) => {
  const metatypeString = priorityInfo.map(item => {

    return `${item.metatype} (${item.specialAttributePoints})`
  }).join(', ')

  return (<div>{`${metatypeString}`}</div>)
}

MetatypePriorityInfo.propTypes = {
  priorityInfo: PropTypes.array,
}

export default MetatypePriorityInfo
