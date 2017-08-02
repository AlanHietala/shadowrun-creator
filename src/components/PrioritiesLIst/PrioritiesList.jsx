import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Priority from '../Priority/Priority.jsx'
import * as priorityActionCreators from '../../actions/priorityActions'
import priorityStats from '../../constants/statsForPriorities'
import {browserHistory} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import css from './priority.scss'

function createPriorityItem(id, name, priority) {
  return {
    id,
    name,
    priority,
    priorityInfo: priorityStats.getValuesForPriority(id, priority)
  }
}

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators({
    onPriorityChange: priorityActionCreators.setPriorityForPriorityName,
    onSaveClick: priorityActionCreators.savePriorities
  }, dispatch)

  return boundActionCreators
}

const mapStateToProps = (state) => {
  const priorityItems = [
    createPriorityItem('attributes', 'Attributes', state.priority.attributes),
    createPriorityItem('skills', 'Skills', state.priority.skills),
    createPriorityItem('metatype', 'Metatype', state.priority.metatype),
    createPriorityItem('resources', 'Resources', state.priority.resources),
    createPriorityItem('magicOrResonance', 'Magic Or Resonance', state.priority.magicOrResonance)
  ]

  const isValid = state.priority.valid
  return {
    priorityItems,
    isValid,
    attributesPriority: state.priority.attributes,
    skillsPriority: state.priority.skills,
    metatypePriority: state.priority.metatype,
    resourcesPriority: state.priority.resources,
    magicOrResonancePriority: state.priority.magicOrResonance
  }
}

class PrioritiesListComponent extends React.Component {

  render() {
    const priorityItems = this.props.priorityItems
      .map((item) => {
        return (<Priority
          key={item.id}
          priorityData={item}
          priorityChanged={this.props.onPriorityChange}
        />)
      })
    return (
      <div>
        <h2>Priorities</h2>
        {priorityItems}

        <RaisedButton
          label="Save"
          primary={true}
          disabled={!this.props.isValid}
          onClick={() => {
            this.props.onSaveClick(this.props.metatypePriority,
              this.props.attributesPriority,
              this.props.magicOrResonancePriority,
              this.props.resourcesPriority,
              this.props.skillsPriority)
            browserHistory.push('/creation/metatype')
          }} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrioritiesListComponent)

