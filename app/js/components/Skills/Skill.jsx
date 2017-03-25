import React from 'react';
export default ({ skill, modifyFn, addSpecializationFn, removeSpecializationFn }) => {
	const specializations = skill.specializations.map((specialization, index) => {
		return (<button key={specialization} onClick={() => addSpecializationFn(index)}>{specialization}</button> )
	});

	const selectedSpecializations = skill.selectedSpecializations.map((specialization, index) => {
		return (<button key={specialization} onClick={ () => removeSpecializationFn(index)}>{specialization}</button> )
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