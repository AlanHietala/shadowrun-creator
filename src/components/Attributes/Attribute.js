import React from 'react'
import PropTypes from 'prop-types'

const Attribute = ({attributeData, addAttribute, subtractAttribute}) => (
  <div className="row">
    <div className="col-md-1">{attributeData.key}</div>
    <div className="col-md-2"><button className="btn btn-default" onClick={subtractAttribute}>-</button> {attributeData.value} <button className="btn btn-default" onClick={addAttribute}>+</button></div>
  </div>
)


Attribute.propTypes = {
  attributeData: PropTypes.object,
  addAttribute: PropTypes.func,
  subtractAttribute: PropTypes.func,
}

export default Attribute
