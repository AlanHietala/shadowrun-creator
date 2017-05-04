import React from 'react';
import SkillGroup from './SkillGroup.jsx';

export default ({skills,  skillGroups, editable, filterFn, modifyFn, modifySkillGroupFn, addSpecializationFn, removeSpecializationFn}) => {
	const passThrough = a => true;

	filterFn = filterFn || passThrough;

	const skillGroupList = skillGroups
		.filter(filterFn)
		.map((skillGroup) => {
			return (<SkillGroup key={ skillGroup.name } skillGroup={ skillGroup } modifySkillGroupFn={ modifySkillGroupFn } />)
		});

	return (<div>
		{skillGroupList}
	</div>);
}