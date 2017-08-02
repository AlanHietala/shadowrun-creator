import React from 'react'
import AddSkill from './AddSkill.jsx'
import AddSkillGroup from './AddSkillGroup.jsx'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

export default ({skills,  skillGroups, editable, filterFn, modifyFn, modifySkillGroupFn, addSpecializationFn, removeSpecializationFn}) => {
  const passThrough = a => true
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
      <Subheader>Skills</Subheader>
      {skillList}

    </List>)
}