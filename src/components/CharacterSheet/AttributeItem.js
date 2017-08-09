import React from 'react'
import PropTypes from 'prop-types'

const AttributeItem = ({title, value}) => {
  return (<div style={styles.attribute}>
    <div style={styles.attributeLine}>{title}</div>
    <div style={styles.attributeLine}>{value}</div>
  </div>)
}

const styles = {
  attribute: {
    flexDirection: 'column',
    margin: '0.5rem',
  },
  attributeLine: {
    textAlign: 'center',
  },
}

AttributeItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
}

export default AttributeItem
