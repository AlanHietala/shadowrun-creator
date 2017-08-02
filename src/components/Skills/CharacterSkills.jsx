import React from 'react';
import Skill from './Skill.jsx';
import { List } from 'material-ui/List';

export default ({skills,  skillGroups, editable, filterFn, modifyFn, modifySkillGroupFn, addSpecializationFn, removeSpecializationFn}) => {
	const passThrough = a => true;
	const createAddSpecializationForSkill = skillIndex => specializationIndex => {
		addSpecializationFn(skillIndex, specializationIndex)
	}

	const createRemoveSpecializationForSkill = skillIndex => specializationIndex => {
		removeSpecializationFn(skillIndex, specializationIndex)
	}

	filterFn = filterFn || passThrough;
	const skillList = skills
						.filter(filterFn)
						.map((skill, index) => {
							const addSpecialization = createAddSpecializationForSkill(index);
							const removeSpecialization = createRemoveSpecializationForSkill(index);
							return (<Skill key={skill.name} skill={skill} modifyFn={ modifyFn } addSpecializationFn={addSpecialization} removeSpecializationFn={removeSpecialization}/>)
						});

	return (<List>
		{skillList}
	</List>);
}