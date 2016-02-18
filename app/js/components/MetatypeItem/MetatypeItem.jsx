import React from 'react';

export default ({metatypeData, selectMetatype}) => {
	return (<div className="row">
		<div className="col-md-1">{metatypeData.metatype}</div>
		<div className="col-md-1">{metatypeData.specialAttributePoints}</div>
			<div><button className="btn btn-default" onClick={selectMetatype}>Select</button></div>
		</div>
	)
}