import React from 'react'
import CreationSummary from '../CreationSummary/CreationSummary'
export default ({children}) => {

  return (<div>
    <CreationSummary />
    {children}
  </div>
  )
}
