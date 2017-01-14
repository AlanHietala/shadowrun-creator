import {addSkillSpecialization} from '../../app/js/actions/skillActions';
import * as attributesTypes from '../../app/js/constants/attributeTypes';
import skillSpecializationReducer from '../../app/js/reducers/skills/skillSpecializationReducer';

describe('Skills Reducer', function () {
	describe('Specialization Reducer', function () {
		it('should add a specialization to a skill referenced by the passed in index and subtract 2 skill points', function () {
			const initalState = {
				creation: {
					availableSkillPoints: {
						points: 5
					}
				},
				skills: {
					individualSkills: [
						{
							name: 'foo',
							points: 2,
							attribute: attributesTypes.AGILITY,
							canDefault: true,
							specializations: [
								'bar'
							],
							selectedSpecializations: []
						}
					]
				}
			}

			const stateAfter = {
				creation: {
					availableSkillPoints: {
						points: 3
					}
				},
				skills: {
					individualSkills: [{
						name: 'foo',
						points: 2,
						attribute: attributesTypes.AGILITY,
						canDefault: true,
						specializations: [
							'bar'
						],
						selectedSpecializations: ['bar']
					}]
				}
			};

			const action = addSkillSpecialization(0, 0);


			expect(skillSpecializationReducer(initalState, action)).toEqual(stateAfter);
		});

		it('should not add a specialization if there are less than 2 skill points remaining', function () {
			const initalState = {
				creation: {
					availableSkillPoints: {
						points: 1
					}
				},
				skills: {
					individualSkills: [
						{
							name: 'foo',
							points: 2,
							attribute: attributesTypes.AGILITY,
							canDefault: true,
							specializations: [
								'bar'
							],
							selectedSpecializations: []
						}
					]
				}
			}

			const stateAfter = {
				creation: {
					availableSkillPoints: {
						points: 1
					}
				},
				skills: {
					individualSkills: [{
						name: 'foo',
						points: 2,
						attribute: attributesTypes.AGILITY,
						canDefault: true,
						specializations: [
							'bar'
						],
						selectedSpecializations: []
					}]
				}
			};

			const action = addSkillSpecialization(0, 0);


			expect(skillSpecializationReducer(initalState, action)).toEqual(stateAfter);
		});

		it('should not add a specialization if there are 0 points in a skill', function () {
			const initalState = {
				creation: {
					availableSkillPoints: {
						points: 3
					}
				},
				skills: {
					individualSkills: [
						{
							name: 'foo',
							points: 0,
							attribute: attributesTypes.AGILITY,
							canDefault: true,
							specializations: [
								'bar'
							],
							selectedSpecializations: []
						}
					]
				}
			}

			const stateAfter = {
				creation: {
					availableSkillPoints: {
						points: 3
					}
				},
				skills: {
					individualSkills: [{
						name: 'foo',
						points: 0,
						attribute: attributesTypes.AGILITY,
						canDefault: true,
						specializations: [
							'bar'
						],
						selectedSpecializations: []
					}]
				}
			};

			const action = addSkillSpecialization(0, 0);


			expect(skillSpecializationReducer(initalState, action)).toEqual(stateAfter);
		});
	});
});