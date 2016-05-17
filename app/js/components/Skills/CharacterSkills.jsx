import React from 'react';
import Skill from './Skill.jsx';
import SkillGroup from './SkillGroup.jsx';

export default ({skills,  skillGroups, editable, filterFn, modifyFn, modifySkillGroupFn}) => {
	const passThrough = a => true
	filterFn = filterFn || passThrough;
	const skillList = skills
						.filter(filterFn)
						.map((skill) => {
		return (<Skill key={skill.name} skill={skill} modifyFn={ modifyFn }  />)
	});

	const skillGroupList = skillGroups
							.filter(filterFn)
							.map((skillGroup) => {
		return (<SkillGroup key={ skillGroup.name } skillGroup={ skillGroup } modifySkillGroupFn={ modifySkillGroupFn } />)
	});

	return (<div>
		{skillGroupList}
		{skillList}

	</div>);
}