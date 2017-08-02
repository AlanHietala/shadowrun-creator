import React from 'react'
import PrioritiesList from './PrioritiesList/PrioritiesList'
import MetatypePicker from './MetatypePicker/MetatypePicker'
import MagicTypes from './MagicTypes/MagicTypes'
import Attributes from './Attributes/Attributes'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class RootComponent extends React.Component {
  render() {
    let visibleComponents = []
    const { priorityVisible, metatypeVisible, magicTypesVisible, attributesVisible } = this.props
    if(priorityVisible) {
      visibleComponents.push(<PrioritiesList key="prioritiesList"/>)
    }
    if(metatypeVisible) {
      visibleComponents.push(<MetatypePicker key="metatypePicker" />)
    }

    if(magicTypesVisible) {
      visibleComponents.push(<MagicTypes key="magicTypes" />)
    }
    if(attributesVisible) {
      visibleComponents.push(<Attributes key="attributes" />)
    }

    return (<div>{visibleComponents}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.visibility
}

RootComponent.propTypes = {
  priorityVisible: PropTypes.bool,
  metatypeVisible: PropTypes.bool,
  magicTypesVisible: PropTypes.bool,
  attributesVisible: PropTypes.bool,
}

export default connect(mapStateToProps, null)(RootComponent)
