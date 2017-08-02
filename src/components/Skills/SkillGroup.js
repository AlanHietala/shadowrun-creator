import React from 'react'

export default ({skillGroup, modifySkillGroupFn}) => {
  const skills = skillGroup.skills.map((skill) => {
    return (<li key={ skill.name }> { skill.name }</li>)
  })

  return (
    <div>
      <div><button className="btn" onClick={ () => {modifySkillGroupFn(skillGroup, -1)}}>-</button> {skillGroup.points} - { skillGroup.name } <button className="btn" onClick={ () => {modifySkillGroupFn(skillGroup, 1)}}>+</button></div>
      <ul>
        { skills }
      </ul>
    </div>
  )
}
