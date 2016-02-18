import React from 'react';

export default ({magicData, selectType}) => {


	return (
		<div>{magicData.name} <button className="btn btn-default" onClick={selectType}>select</button></div>
	)
}