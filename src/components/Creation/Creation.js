import React from 'react'
import CreationSummary from '../CreationSummary/CreationSummary'
import PropTypes from 'prop-types'

const Creation = ({children}) => (<div>
    <CreationSummary />
    {children}
  </div>
  )

Creation.propTypes = {
  children: PropTypes.any
}
