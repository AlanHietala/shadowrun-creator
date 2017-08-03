import statsForPriorities from '../../constants/statsForPriorities'

export default (state, action) => {
  return {
    ...state,
    creation: {
      availableMetatypes: statsForPriorities[action.payload.metatypePriority].metatype,
      availableSkillPoints: statsForPriorities[action.payload.skillsPriority].skills,
      availableResources: statsForPriorities[action.payload.resourcesPriority].resources,
      availableMagicOrResonanceClasses: statsForPriorities[action.payload.magicOrResonancePriority].magicOrResonance,
      availableAttributePoints: statsForPriorities[action.payload.attributePriority].attributes,
    },
  }
}
