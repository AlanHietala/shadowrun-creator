import React from 'react';
import * as priorityValues from '../../constants/PriorityValues';
import css from './priority.scss';
import NonePriorityInfo from '../PriorityInfo/NonePriorityInfo.jsx';
import MagicOrResonancePriorityInfo from '../PriorityInfo/MagicOrResonancePriorityInfo.jsx'
import MetatypePriorityInfo from '../PriorityInfo/MetatypePriorityInfo.jsx'
import SkillsPriorityInfo from '../PriorityInfo/SkillsPriorityInfo.jsx'
import ResourcesPriorityInfo from '../PriorityInfo/ResourcesPriorityInfo.jsx'
import AttributesPriorityInfo from '../PriorityInfo/AttributesPriorityInfo.jsx'

export default ({priorityData, priorityChanged}) => {
	let priorityInfo;
	if(priorityData.priority === priorityValues.PRIORITY_NONE) {
		priorityInfo = (<NonePriorityInfo priorityInfo={priorityData.priorityInfo}/>);
	} else {

		switch (priorityData.id) {
			case 'attributes':
				priorityInfo = (<AttributesPriorityInfo priorityInfo={priorityData.priorityInfo} />);
				break;
			case 'skills':
				priorityInfo = (<SkillsPriorityInfo priorityInfo={priorityData.priorityInfo}/>);
				break;
			case 'magicOrResonance':
				priorityInfo = <MagicOrResonancePriorityInfo priorityInfo={priorityData.priorityInfo}/>;
				break;
			case 'metatype':
				priorityInfo = (<MetatypePriorityInfo priorityInfo={priorityData.priorityInfo}/>);
				break;
			case 'resources':
				priorityInfo = (<ResourcesPriorityInfo priorityInfo={priorityData.priorityInfo}/>);
				break;
		}
	}

	return (<div className={`row ${css.topPadding}`}>
		<div className="col-md-1">{priorityData.name}</div>
		<div className="col-md-1">
			<select className="form-control" value={priorityData.priority} onChange={(event) => { priorityChanged(priorityData.id, event.target.value);}}>
				<option value={priorityValues.PRIORITY_NONE}>None</option>
				<option value={priorityValues.PRIORITY_A}>A</option>
				<option value={priorityValues.PRIORITY_B}>B</option>
				<option value={priorityValues.PRIORITY_C}>C</option>
				<option value={priorityValues.PRIORITY_D}>D</option>
				<option value={priorityValues.PRIORITY_E}>E</option>
			</select>
		</div>
		<div className="col-md-3">
			{priorityInfo}
		</div>
	</div>)
}