import React from 'react'
import {List, ListItem} from 'material-ui/List'
import ContentAdd from 'material-ui/svg-icons/content/add'
import PropTypes from 'prop-types'

const QualityList = ({ qualities, clickHandler }) => {

  const nodes = qualities.map((quality, index) => {
    return (<ListItem
      key={quality.name}
      rightIcon={<ContentAdd />}
      onTouchTap={ () => clickHandler(quality, index) }>
      { quality.name } cost: { quality.karmaCost }
    </ListItem>)

  })

  return (<List>
    { nodes }
  </List>)
}

QualityList.propTypes = {
  qualities: PropTypes.array,
  clickHandler: PropTypes.func,
}

export default QualityList
