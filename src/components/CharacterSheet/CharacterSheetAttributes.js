import React from 'react'
import PropTypes from 'prop-types'

const AttributeItem = ({title, value}) => {
  return (<div style={styles.attribute}>
    <div style={styles.attributeLine}>{title}</div>
    <div style={styles.attributeLine}>{value}</div>
  </div>)
}

AttributeItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
}

const CharacterSheetAttributes = ({attributes}) => {
  const {
    strength,
    agility,
    willpower,
    magic,
    body,
    reaction,
    charisma,
    intuition,
    logic,
    essence,
    initiative,
    initiativeDice,
    resources
  } = attributes
  return (
    <div style={styles.attributeList}>
      <AttributeItem title="Bod" value={body.value} />
      <AttributeItem title="Str" value={strength.value} />
      <AttributeItem title="Agi" value={agility.value} />
      <AttributeItem title="Rea" value={reaction.value} />
      <AttributeItem title="Wil" value={willpower.value} />
      <AttributeItem title="Int" value={intuition.value} />
      <AttributeItem title="Log" value={logic.value} />
      <AttributeItem title="Cha" value={charisma.value} />
      <AttributeItem title="Magic" value={magic.value} />
      <AttributeItem title="Ess" value={essence.value} />
      <AttributeItem title="Init" value={`${initiative.value} + ${initiativeDice.value}d6`} />
      <AttributeItem title="Res" value={resources.value} />
    </div>
  )
}

const styles = {
  attributeList: {
    display: 'flex',
    flexDirection: 'row'
  },
  attribute: {
    flexDirection: 'column',
    margin: '0.5rem'
  },
  attributeLine: {
    textAlign: 'center'
  }
}

CharacterSheetAttributes.propTypes = {
  attributes: PropTypes.object.isRequired
}
export default CharacterSheetAttributes
