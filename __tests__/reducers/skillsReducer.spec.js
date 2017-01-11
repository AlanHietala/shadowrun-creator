import {addSkillSpecialization} from '../../app/js/actions/skillActions';
import * as attributesTypes from '../../app/js/constants/attributeTypes';
import skillSpecializationReducer from '../../app/js/reducers/skills/skillSpecializationReducer';

describe('Skills Reducer', function () {
	describe('Specialization Reducer', function () {
		it('should add a specialization to a skill referenced by the passed in index', function () {
			const initalState = {
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

		it('should subtract a skill point for the specialzation that is added', function () {
			expect(true).toEqual(false)
		});
		//
		// it('should add a skill point back for a specialization that is removed', function () {
		// 	expect(true).toEqual(false)
		// });
		//
		// it('should not add a specialzation to a skill that has 0 points in it', function () {
		// 	expect(true).toEqual(false)
		// });
		//
		// it('should not add a second specialization if still under chargen', function () {
		// 	expect(true).toEqual(false)
		// });
		//
		// it('should add a second specialization if character gen is closed and subtract the karma cost', function () {
		// 	expect(true).toEqual(false)
		// });
	});
});