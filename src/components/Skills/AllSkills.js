import React from 'react'
import AddSkill from './AddSkill'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import PropTypes from 'prop-types'

const AllSkills = ({skills, filterFn, modifyFn, addSpecializationFn, removeSpecializationFn}) => {
  const passThrough = () => true
  const createAddSpecializationForSkill = skillIndex => specializationIndex => {
    addSpecializationFn(skillIndex, specializationIndex)
  }

  const createRemoveSpecializationForSkill = skillIndex => specializationIndex => {
    removeSpecializationFn(skillIndex, specializationIndex)
  }

  filterFn = filterFn || passThrough
  const skillList = skills
    .filter(filterFn)
    .map((skill, index) => {
      const addSpecialization = createAddSpecializationForSkill(index)
      const removeSpecialization = createRemoveSpecializationForSkill(index)
      return (<AddSkill key={skill.name} skill={skill} modifyFn={ modifyFn } addSpecializationFn={addSpecialization} removeSpecializationFn={removeSpecialization}/>)
    })

  return (
    <List>
      <Subheader>Skillssss</Subheader>
      {skillList}

    </List>)
}

AllSkills.propTypes = {
  skills: PropTypes.array,
  filterFn: PropTypes.func,
  modifyFn: PropTypes.func,
  addSpecializationFn: PropTypes.func,
  removeSpecializationFn: PropTypes.func,
}

export default AllSkills
