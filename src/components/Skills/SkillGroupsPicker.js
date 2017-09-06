import React from 'react'
import { connect } from  'react-redux'
import {modifySkill, modifyBonusSkill, modifySkillGroup, filterSkill, addSkillSpecialization, removeSkillSpecialization } from '../../actions/skillActions'
import CharacterSkillGroups from './CharacterSkillGroups'

import * as attributeTypes from  '../../constants/attributeTypes'
import AllSkills from './AllSkills'
import AllGroupSkills from './AllGroupSkills'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

const styles = {
  column: {
    flexGrow: 1,
    minWidth: '300px',
    margin: '0.5rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 10,
  },
  header: {
    margin: 10,
  },
}

class SkillPicker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      skillOpen: false,
      groupOpen: false,
    }


  }

  handleGroupClose = () => {
    this.setState({
      groupOpen: false,
    })
  }

  handleGroupOpen = () => {
    this.setState({
      groupOpen: true,
    })
  }
  handleClose = () => {
    this.setState({
      skillOpen: false,
    })
  }

  handleOpen = () => {
    this.setState({
      skillOpen: true,
    })
  }
  render() {
    const {
      modifySkill,
      modifySkillGroup,
      skillGroupPoints,
      individualSkills,
      skillGroups,
      filterSkills,
      textFilter,
      bonusSkills,
      modifyBonusSkill,
      isMagicAllowed,
      isResonanceAllowed,
      addSpecialization,
      removeSpecialization,
    } = this.props

    const moreThanZeroPoints = (skills) => skills.points > 0
    const zeroPoints = (skills) => {
      let isFilterActive = textFilter !== ''
      let isFilterMatching = skills.name.toLowerCase().indexOf(textFilter.toLowerCase()) > - 1
      let isAllowedSkillForClass = true

      if(skills.attribute === attributeTypes.RESONANCE && !isResonanceAllowed
    || skills.attribute === attributeTypes.MAGIC && !isMagicAllowed) {
        isAllowedSkillForClass = false
      }

      return skills.points === 0 && (!isFilterActive || isFilterMatching) && isAllowedSkillForClass
    }

    const bonusSkillsFilter = (skills) => {
      return skills.points === 0 && bonusSkills && skills.attribute === bonusSkills.attributeType
    }


    const groupActions = [
      <FlatButton
        key="close"
        label="close"
        primary={true}
        onTouchTap={this.handleGroupClose}
      />]

    return (<Paper style={{minWidth: 300, flexGrow: 1, margin: 5}}>
      <div>
        <div>Skill Group Points: { skillGroupPoints }</div>
      </div>
      <h3 style={styles.header}>Skill Groups</h3>
      <CharacterSkillGroups skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ moreThanZeroPoints } modifyFn={ modifySkill } modifySkillGroupFn={ modifySkillGroup } addSpecializationFn={addSpecialization} removeSpecializationFn={removeSpecialization}/>

      <Dialog actions={groupActions}
        modal={false}
        open={this.state.groupOpen}
        autoScrollBodyContent={true}
        onRequestClose={this.handleGroupClose}>

        <h2>Bonus Skills</h2>
        <AllSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ bonusSkillsFilter } modifyFn={ modifyBonusSkill } modifySkillGroupFn={ modifySkillGroup } />
        <h2>Skill List</h2>
        <input type="text" onChange={ filterSkills } />
        <AllGroupSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ zeroPoints } modifyFn={ modifySkill } modifySkillGroupFn={ modifySkillGroup }/>
      </Dialog>
      <RaisedButton style={styles.button} label="Add" primary={true} onTouchTap={this.handleGroupOpen} />
    </Paper>)
  }
}

const mapStateToProps = (state) => {
  return {
    skillPoints: state.character.creation.availableSkillPoints.points,
    skillGroupPoints: state.character.creation.availableSkillPoints.groupPoints,
    individualSkills: state.character.skills.individualSkills,
    skillGroups: state.character.skills.skillGroups,
    textFilter: state.character.skills.textFilter,
    bonusSkills: state.character.creation.bonusSkills,
    isResonanceAllowed: state.character.attributes.resonance > 0,
    isMagicAllowed: state.character.attributes.magic > 0,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifySkillGroup: (skillGroup, addValue) => {
      const modifySkillGroupAction = modifySkillGroup(skillGroup, addValue)
      dispatch(modifySkillGroupAction)
    },
    modifySkill: (skill, addValue) => {
      const modifySkillAction = modifySkill(skill, addValue)
      dispatch(modifySkillAction)
    },
    filterSkills: (onChangeEvent) => {
      const filterSkillAction = filterSkill(onChangeEvent.target.value)
      dispatch(filterSkillAction)
    },
    modifyBonusSkill: (skill, addValue) => {
      const modifyBonusSkillAction = modifyBonusSkill(skill, addValue)
      dispatch(modifyBonusSkillAction)
    },
    addSpecialization: (skillIndex, specializationIndex) => {
      const addSpecializationAction = addSkillSpecialization(skillIndex, specializationIndex)
      dispatch(addSpecializationAction)
    },
    removeSpecialization: (skillIndex, specializationIndex) => {
      const removeSpecializationAction = removeSkillSpecialization(skillIndex, specializationIndex)
      dispatch(removeSpecializationAction)
    },
  }
}

SkillPicker.propTypes = {
  modifySkill: PropTypes.func,
  modifySkillGroup: PropTypes.func,
  skillPoints: PropTypes.number,
  skillGroupPoints: PropTypes.number,
  individualSkills: PropTypes.array,
  skillGroups: PropTypes.array,
  filterSkills: PropTypes.func,
  textFilter: PropTypes.string,
  bonusSkills: PropTypes.object,
  modifyBonusSkill: PropTypes.func,
  isMagicAllowed: PropTypes.bool,
  isResonanceAllowed: PropTypes.bool,
  addSpecialization: PropTypes.func,
  removeSpecialization: PropTypes.func,

}
export default connect(mapStateToProps, mapDispatchToProps)(SkillPicker)
