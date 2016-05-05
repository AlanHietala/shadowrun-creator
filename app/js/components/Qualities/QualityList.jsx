import React from 'react';

export default ({ qualities, clickHandler, buttonText }) => {

	const nodes = qualities.map((quality, index) => {
		return (<div>{ quality.name } cost: { quality.karmaCost } <button onClick={ () => clickHandler(quality, index) } className="btn">{ buttonText }</button></div>);
	});

	return (<div>
		{ nodes }
	</div>)
}