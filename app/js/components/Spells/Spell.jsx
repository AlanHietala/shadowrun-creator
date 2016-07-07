import React from 'react';
export default ({spell, showAddButton, showRemoveButton, clickAddFn, clickRemoveFn}) => {
	const infoString = getInfoString(spell);
	let buttons = [];
	if(showAddButton) {
		buttons.push((<button className="btn" key="add" onClick={clickAddFn}>Add</button>))
	}

	if(showRemoveButton) {
		buttons.push((<button className="btn" key="remove" onClick={clickRemoveFn}>Remove</button>))
	}
	return (<div className="row">
				<div className="col-md-4">
					<div>{spell.name}</div>
					<div>{infoString}</div>
					<div>{spell.duration}</div>
					<div>{spell.drain}</div>
					{ buttons }
				</div>
			</div>)
}

const getInfoString = (spell) => {
	let infoArray = [];
	if(spell.isActive) {
		infoArray.push('active')
	}

	if(spell.isDirectional) {
		infoArray.push('directional')
	}

	if(spell.isMana) {
		infoArray.push('mana')
	} else {
		infoArray.push('physical')
	}

	if(spell.isLOS) {
		infoArray.push('LOS')
	}

	if(spell.isArea) {
		infoArray.push('AOE')
	}

	if(spell.isExtendedArea) {
		infoArray.push('Extended AOE')
	}

	if(spell.isPsychic) {
		infoArray.push('psychic')
	}

	return infoArray.join(', ');

}