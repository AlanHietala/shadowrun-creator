import React from 'react';
import { connect } from  'react-redux';
import {modifySkill, modifySkillGroup, filterSkill } from '../../actions/SkillActions';
import CharacterSkills from './CharacterSkills.jsx';
const mapStateToProps = (state) => {
	return {
		skillPoints: state.character.qualities,
		skillGroupPoints: state.character.karma,
		individualSkills: state.character.skills.individualSkills,
		skillGroups: state.character.skills.skillGroups,
		textFilter: state.character.skills.textFilter
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
		}
	}
};

class SkillPicker extends React.Component {
	render() {
		const { modifySkill, modifySkillGroup, skillPoints, skillGroupPoints, individualSkills, skillGroups, filterSkills, textFilter } = this.props;
		const moreThanZeroPoints = (skills) => skills.points > 0;
		const zeroPoints = (skills) => {
			let isFilterActive = textFilter !== '';
			let isFilterMatching = skills.name.toLowerCase().indexOf(textFilter.toLowerCase()) > - 1;
			return skills.points === 0 && (!isFilterActive || isFilterMatching);
		};
		return (<div>
			<div className="row">
				<div className="col-md-10">Skill Points: { skillPoints } Skill Group Points: { skillGroupPoints }</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<h2>Character Skills</h2>
					<CharacterSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ moreThanZeroPoints } modifySkillFn={ modifySkill } modifySkillGroupFn={ modifySkillGroup } />
				</div>
				<div className="col-md-4">
					<h2>Skill List</h2>
					<input type="text" onChange={ filterSkills } />
					<CharacterSkills skills={ individualSkills } skillGroups={ skillGroups } editable={true} filterFn={ zeroPoints } modifyFn={ modifySkill } modifySkillGroupFn={ modifySkillGroup } />
				</div>
			</div>
		</div>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPicker);