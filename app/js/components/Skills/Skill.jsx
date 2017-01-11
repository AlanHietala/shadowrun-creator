import React from 'react';
export default ({ skill, modifyFn, addSpecializationFn }) => {
	const specializations = skill.specializations.map((specialization, index) => {
		return (<button key={specialization} onClick={() => addSpecializationFn(index)}>{specialization}</button> )
	});

	const selectedSpecializations = skill.selectedSpecializations.map((specialization) => {
		return (<div key={specialization}>{specialization}</div> )
	});

	return (
		<div>
			<button className="btn" onClick={ ()=>{ modifyFn(skill, -1) } }>-</button>
			<div>{ skill.points } - { skill.name }</div>
			<div>Available Specializations: {specializations}</div>
			<div>Selected Specializations: {selectedSpecializations}</div>
			<button className="btn" onClick={ ()=>{ modifyFn(skill, 1) } }>+</button>
		</div>
	)
}