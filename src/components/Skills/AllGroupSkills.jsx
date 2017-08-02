import React from 'react';
import AddSkill from './AddSkill.jsx';
import AddSkillGroup from './AddSkillGroup.jsx';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default ({skills,  skillGroups, editable, filterFn, modifyFn, modifySkillGroupFn, addSpecializationFn, removeSpecializationFn}) => {
	const passThrough = a => true;

	filterFn = filterFn || passThrough;

	const skillGroupList = skillGroups
		.filter(filterFn)
		.map((skillGroup) => {
			return (<AddSkillGroup key={ skillGroup.name } skillGroup={ skillGroup } modifySkillGroupFn={ modifySkillGroupFn } />)
		});

	return (<List>
		<Subheader>Skill Groups</Subheader>
		{skillGroupList}
	</List>);
}