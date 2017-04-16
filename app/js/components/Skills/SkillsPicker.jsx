import React from 'react';
import { connect } from  'react-redux';
import {modifySkill, modifyBonusSkill, modifySkillGroup, filterSkill, addSkillSpecialization, removeSkillSpecialization } from '../../actions/skillActions';
import CharacterSkills from './CharacterSkills.jsx';
import * as attributeTypes from  '../../constants/attributeTypes';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {
	return {
		skillPoints: state.character.creation.availableSkillPoints.points,
		skillGroupPoints: state.character.creation.availableSkillPoints.groupPoints,
		individualSkills: state.character.skills.individualSkills,
		skillGroups: state.character.skills.skillGroups,
		textFilter: state.character.skills.textFilter,
		bonusSkills: state.character.creation.bonusSkills,
		isResonanceAllowed: state.character.attributes.resonance > 0,
		isMagicAllowed: state.character.attributes.magic > 0,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		modifySkillGroup: (skillGroup, addValue) => {
			const modifySkillGroupAction = modifySkillGroup(skillGroup, addValue);
			dispatch(modifySkillGroupAction);
		},
		modifySkill: (skill, addValue) => {
			const modifySkillAction = modifySkill(skill, addValue);
			dispatch(modifySkillAction);
		},
		filterSkills: (onChangeEvent) => {
			const filterSkillAction = filterSkill(onChangeEvent.target.value);
			dispatch(filterSkillAction);
		},
		modifyBonusSkill: (skill, addValue) => {
			const modifyBonusSkillAction = modifyBonusSkill(skill, addValue);
			dispatch(modifyBonusSkillAction);
		},
		addSpecialization: (skillIndex, specializationIndex) => {
			const addSpecializationAction = addSkillSpecialization(skillIndex, specializationIndex);
			dispatch(addSpecializationAction);
		},
		removeSpecialization: (skillIndex, specializationIndex) => {
			const removeSpecializationAction = removeSkillSpecialization(skillIndex, specializationIndex);
			dispatch(removeSpecializationAction);
		}
	}
};

class SkillPicker extends React.Component {
	render() {
		const {
			modifySkill,
			modifySkillGroup,
			skillPoints,
			skillGroupPoints,
			individualSkills,
			skillGroups,
			filterSkills,
			textFilter,
			bonusSkills,
			modifyBonusSkill,
			isMagicAllowed,
			isResonanceAllowed,
			addSpecialization,
			removeSpecialization
		} = this.props;

		const moreThanZeroPoints = (skills) => skills.points > 0;
		const zeroPoints = (skills) => {
			let isFilterActive = textFilter !== '';
			let isFilterMatching = skills.name.toLowerCase().indexOf(textFilter.toLowerCase()) > - 1;
			let isAllowedSkillForClass = true;

			if(skills.attribute === attributeTypes.RESONANCE && !isResonanceAllowed
				|| skills.attribute === attributeTypes.MAGIC && !isMagicAllowed) {
				isAllowedSkillForClass = false;
			}

			return skills.points === 0 && (!isFilterActive || isFilterMatching) && isAllowedSkillForClass;
		};

		const bonusSkillsFilter = (skills) => {
			return skills.points === 0 && bonusSkills && skills.attribute === bonusSkills.attributeType;
		};

		const bonusPoints = bonusSkills ? bonusSkills.count : 0;
		const bonusRating = bonusSkills ? bonusSkills.rating : 0;
		const nextString = '/creation/spells';
		return (<div>
			<div className="row">
				<div className="col-md-10">Skill Points: { skillPoints } Skill Group Points: { skillGroupPoints } Bonus Points: { bonusPoints } at level { bonusRating }</div>
				<button onClick={() => browserHistory.push(nextString) }>next</button>
			</div>
			<div className="row">
				<div className="col-md-4">
					<h2>Character Skills</h2>
					<CharacterSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ moreThanZeroPoints } modifyFn={ modifySkill } modifySkillGroupFn={ modifySkillGroup } addSpecializationFn={addSpecialization} removeSpecializationFn={removeSpecialization}/>
				</div>
				<div className="col-md-4">
					<h2>Bonus Skills</h2>
					<CharacterSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ bonusSkillsFilter } modifyFn={ modifyBonusSkill } modifySkillGroupFn={ modifySkillGroup } />
					<h2>Skill List</h2>
					<input type="text" onChange={ filterSkills } />
					<CharacterSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ zeroPoints } modifyFn={ modifySkill } modifySkillGroupFn={ modifySkillGroup }/>
				</div>
			</div>
		</div>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPicker);