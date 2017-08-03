export default (state, action) => {
  return {
    ...state,
    skills: {
      ...state.skills,
      textFilter: action.payload,
    },
  }
}