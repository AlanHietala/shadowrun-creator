import React from 'react';
import Skill from './Skill.jsx';
export default ({skills,  skillGroups, editable, filterFn, modifyFn}) => {
	const passThrough = a => true
	filterFn = filterFn || passThrough;
	const skillList = skills.filter(filterFn).map((skill) => {
		return (<Skill key={skill.name} skill={skill} modifyFn={ modifyFn }  />)
	});

	return (<div>
		{skillList}

	</div>);
}