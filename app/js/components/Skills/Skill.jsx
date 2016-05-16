import React from 'react';
export default ({ skill, modifyFn }) => {
	return (
		<div>
			<button className="btn" onClick={ ()=>{ modifyFn(skill, -1) } }>-</button>
			{ skill.points } - { skill.name }
			<button className="btn" onClick={ ()=>{ modifyFn(skill, 1) } }>+</button>
		</div>
	)
}