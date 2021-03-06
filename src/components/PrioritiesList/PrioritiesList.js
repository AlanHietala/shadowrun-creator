import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Priority from '../Priority/Priority'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import * as priorityActionCreators from '../../actions/priorityActions'
import priorityStats from '../../constants/statsForPriorities'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'


class PrioritiesListComponent extends React.Component {

  render() {
    const { priorityItems, onSaveClick } = this.props
    const insertItems = priorityItems
      .map((item) => {
        return (<Priority
          key={item.id}
          priorityData={item}
          priorityChanged={this.props.onPriorityChange}
        />)
      })
    return (
      <Card>
        <CardHeader
          title={'Priorities'}
          actAsExpander={true}
          showExpandableButton={true} />
        <CardText
          expandable={true}>
          {insertItems}
          <CardActions>
            <RaisedButton
              label="Save"
              primary={true}
              disabled={!this.props.isValid}
              onTouchTap={() => {
                onSaveClick(this.props.metatypePriority,
                  this.props.attributesPriority,
                  this.props.magicOrResonancePriority,
                  this.props.resourcesPriority,
                  this.props.skillsPriority)
              }} />
          </CardActions>
        </CardText>
      </Card>
    )
  }
}


const createPriorityItem = (id, name, priority) => {
  return {
    id,
    name,
    priority,
    priorityInfo: priorityStats.getValuesForPriority(id, priority),
  }
}

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators({
    onPriorityChange: priorityActionCreators.setPriorityForPriorityName,
    onSaveClick: priorityActionCreators.savePriorities,
  }, dispatch)

  return boundActionCreators
}

const mapStateToProps = (state) => {
  const priorityItems = [
    createPriorityItem('attributes', 'Attributes', state.priority.attributes),
    createPriorityItem('skills', 'Skills', state.priority.skills),
    createPriorityItem('metatype', 'Metatype', state.priority.metatype),
    createPriorityItem('resources', 'Resources', state.priority.resources),
    createPriorityItem('magicOrResonance', 'Magic Or Resonance', state.priority.magicOrResonance),
  ]

  const isValid = state.priority.valid
  return {
    priorityItems,
    isValid,
    attributesPriority: state.priority.attributes,
    skillsPriority: state.priority.skills,
    metatypePriority: state.priority.metatype,
    resourcesPriority: state.priority.resources,
    magicOrResonancePriority: state.priority.magicOrResonance,
  }
}

PrioritiesListComponent.propTypes = {
  priorityItems: PropTypes.array,
  onPriorityChange: PropTypes.func,
  isValid: PropTypes.bool,
  onSaveClick: PropTypes.func,
  metatypePriority: PropTypes.string,
  attributesPriority: PropTypes.string,
  magicOrResonancePriority: PropTypes.string,
  resourcesPriority: PropTypes.string,
  skillsPriority: PropTypes.string,

}
export default connect(mapStateToProps, mapDispatchToProps)(PrioritiesListComponent)
