import React from 'react';
import * as priorityValues from '../../constants/priorityValues';
import css from './priority.scss';
import NonePriorityInfo from '../PriorityInfo/NonePriorityInfo.jsx';
import MagicOrResonancePriorityInfo from '../PriorityInfo/MagicOrResonancePriorityInfo.jsx'
import MetatypePriorityInfo from '../PriorityInfo/MetatypePriorityInfo.jsx'
import SkillsPriorityInfo from '../PriorityInfo/SkillsPriorityInfo.jsx'
import ResourcesPriorityInfo from '../PriorityInfo/ResourcesPriorityInfo.jsx'
import AttributesPriorityInfo from '../PriorityInfo/AttributesPriorityInfo.jsx'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

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
	console.log(priorityData.priority);
	return (<div>

			<div style={{display: 'inline-block'}}>
			<SelectField
				floatingLabelText={priorityData.name}
				value={priorityData.priority}
				onChange={(event, index, value) => {
					priorityChanged(priorityData.id, value);}
				}
			>
				<MenuItem value={priorityValues.PRIORITY_NONE} primaryText={priorityValues.PRIORITY_NONE}></MenuItem>
				<MenuItem value={priorityValues.PRIORITY_A} primaryText={priorityValues.PRIORITY_A}></MenuItem>
				<MenuItem value={priorityValues.PRIORITY_B} primaryText={priorityValues.PRIORITY_B}></MenuItem>
				<MenuItem value={priorityValues.PRIORITY_C} primaryText={priorityValues.PRIORITY_C}></MenuItem>
				<MenuItem value={priorityValues.PRIORITY_D} primaryText={priorityValues.PRIORITY_D}></MenuItem>
				<MenuItem value={priorityValues.PRIORITY_E} primaryText={priorityValues.PRIORITY_E}></MenuItem>
			</SelectField>
			</div>
			<div style={{display:'inline-block', fontSize: '0.8em'}}>
				{priorityInfo}
			</div>
	</div>)
}