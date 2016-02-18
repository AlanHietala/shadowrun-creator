import React from 'react';
export default ({key, attributeData, addAttribute, subtractAttribute}) => {
	return (
		<div className="row">
			<div className="col-md-1">{attributeData.key}</div>
			<div className="col-md-2"><button className="btn btn-default" onClick={subtractAttribute}>-</button> {attributeData.value} <button className="btn btn-default" onClick={addAttribute}>+</button></div>
		</div>
	)
}