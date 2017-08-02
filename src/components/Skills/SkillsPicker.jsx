import React from 'react'
import { connect } from  'react-redux'
import {modifySkill, modifyBonusSkill, modifySkillGroup, filterSkill, addSkillSpecialization, removeSkillSpecialization } from '../../actions/skillActions'
import CharacterSkills from './CharacterSkills.jsx'
import CharacterSkillGroups from './CharacterSkillGroups.jsx'

import * as attributeTypes from  '../../constants/attributeTypes'
import { browserHistory } from 'react-router'
import AllSkills from './AllSkills.jsx'
import AllGroupSkills from './AllGroupSkills.jsx'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'

const style = {
  marginRight: 20,
}

const styles = {
  column: {
    flexGrow: 1,
    minWidth: '300px',
    margin: '0.5rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    margin: '1rem'
  }
}

class SkillPicker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      skillOpen: false,
      groupOpen: false
    }


  }

 handleGroupClose = () => {
   this.setState({
     groupOpen: false
   })
 }

 handleGroupOpen = () => {
   this.setState({
     groupOpen: true
   })
 }
 handleClose = () => {
   this.setState({
     skillOpen: false
   })
 }

 handleOpen = () => {
   this.setState({
     skillOpen: true
   })
 }
 render() {
   const {
     modifySkill,
     modifySkillGroup,
     skillPoints,
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
     removeSpecialization
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

   const bonusPoints = bonusSkills ? bonusSkills.count : 0
   const bonusRating = bonusSkills ? bonusSkills.rating : 0
   const nextString = '/creation/spells'

   const actions = [
     <FlatButton
       label="close"
       primary={true}
       onTouchTap={this.handleClose}
     />]

   const groupActions = [
     <FlatButton
       label="close"
       primary={true}
       onTouchTap={this.handleGroupClose}
     />]
   return (<div>
     <div className="row">
       <div className="col-md-10">Skill Points: { skillPoints } Skill Group Points: { skillGroupPoints } Bonus Points: { bonusPoints } at level { bonusRating }</div>
     </div>
     <div style={styles.container}>
       <Paper style={styles.column}>
         <h2>Skill Groups</h2>
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
         <FloatingActionButton style={style} onTouchTap={this.handleGroupOpen}>
           <ContentAdd />
         </FloatingActionButton>
       </Paper>
       <Paper style={styles.column}>
         <div className="col-md-4">
           <h2>Skills</h2>
           <CharacterSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ moreThanZeroPoints } modifyFn={ modifySkill } modifySkillGroupFn={ modifySkillGroup } addSpecializationFn={addSpecialization} removeSpecializationFn={removeSpecialization}/>
         </div>
         <Dialog actions={actions}
           modal={false}
           open={this.state.skillOpen}
           autoScrollBodyContent={true}
           onRequestClose={this.handleClose}>

           <h2>Bonus Skills</h2>
           <AllSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ bonusSkillsFilter } modifyFn={ modifyBonusSkill } modifySkillGroupFn={ modifySkillGroup } />
           <h2>Skill List</h2>
           <input type="text" onChange={ filterSkills } />
           <AllSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ zeroPoints } modifyFn={ modifySkill } modifySkillGroupFn={ modifySkillGroup }/>
         </Dialog>

         <FloatingActionButton style={styles.button} onTouchTap={this.handleOpen}>
           <ContentAdd />
         </FloatingActionButton>
       </Paper>
     </div>
   </div>)
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPicker)
