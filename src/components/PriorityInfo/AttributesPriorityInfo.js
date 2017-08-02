import React from 'react'
import PropTypes from 'prop-types'

const AttributesPriorityInfo = ({ priorityInfo }) => (<div>{`You Receive ${priorityInfo} attribute points`}</div>)

AttributesPriorityInfo.propTypes = {
  priorityInfo: PropTypes.number
}

export default AttributesPriorityInfo
