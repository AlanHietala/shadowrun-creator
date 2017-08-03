import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addAttribute, subtractAttribute} from '../../actions/attributeActions'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'

const getAttributeCreator = (addAttributeFn, subtractAttributeFn) => (attribute)  => {
  const AttributeComponent =  (<div key={attribute.key}>
    <span style={{width: '75px', display: 'inline-block'}}>{attribute.key}</span>
    <FlatButton label="-" onTouchTap={(event) => {
      event.preventDefault()
      subtractAttributeFn(attribute)
    }}/>
    {attribute.value}
    <FlatButton label="+"
      onTouchTap={(event) => {
        event.preventDefault()
        addAttributeFn(attribute)
      }}/>
  </div>)
  return AttributeComponent
}


class AttributesComponent extends React.Component {

  render() {
    const { body } = this.props
    if(body) {
      const {attributePoints, specialAttributePoints, agility, racial, reaction, strength, willpower, logic, intuition, charisma, edge, essence, magic, resonance, addAttribute, subtractAttribute} = this.props
      const createAttribute = getAttributeCreator(addAttribute, subtractAttribute)
      //const createSpecialAttribute = getAttributeCreator(addSpecialAttribute, subtractSpecialAttribute)
      let attributeList = [body, agility, reaction, strength, willpower, logic, intuition, charisma, edge, essence]

      if(magic) {
        attributeList.push(magic)
      } else if(resonance) {
        attributeList.push(resonance)
      }

      const attributeElements = attributeList.map((attributeData) => createAttribute(attributeData))
      return (
        <div>
          <h2>Assign Attributes</h2>
          <div>Special Attribute Points Left: {specialAttributePoints} Attribute Points Left: {attributePoints}</div>
          <div>
            {attributeElements}
            {racial.value}
          </div>
        </div>)
    } else {
      return (<div>{'Can\'t Select Attributes yet'}</div>)
    }
  }
}

const mapStateToProps = (state) => {
  let props = {}
  if(state.character.attributes) {
    const {availableAttributePoints, availableSpecialAttributePoints} = state.character.creation
    const availablePointsSum = availableSpecialAttributePoints + availableAttributePoints
    props = {
      ...state.character.attributes,
      specialAttributePoints: availableSpecialAttributePoints,
      attributePoints: availableAttributePoints,
      arePointsAvailable: availablePointsSum > 0
    }
  }

  return props
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addAttribute: addAttribute,
    subtractAttribute: subtractAttribute
  }, dispatch)
}

AttributesComponent.propTypes = {
  attributePoints: PropTypes.number,
  specialAttributePoints: PropTypes.number,
  body: PropTypes.object,
  agility: PropTypes.object,
  racial: PropTypes.object,
  reaction: PropTypes.object,
  strength: PropTypes.object,
  willpower: PropTypes.object,
  logic: PropTypes.object,
  intuition: PropTypes.object,
  charisma: PropTypes.object,
  edge: PropTypes.object,
  essence: PropTypes.object,
  magic: PropTypes.object,
  resonance: PropTypes.object,
  addAttribute: PropTypes.func,
  subtractAttribute: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesComponent)
