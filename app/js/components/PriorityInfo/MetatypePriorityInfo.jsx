import React from 'react';


export default ({priorityInfo}) => {
	const metatypeString = priorityInfo.map((item) => {

		return `${item.metatype} (${item.specialAttributePoints})`
	}).join(', ');

	return (<div>{`You can use these metatypes (special attribute points): ${metatypeString}`}</div>)
}