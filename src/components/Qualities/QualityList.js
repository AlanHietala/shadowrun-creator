import React from 'react'
import {List, ListItem} from 'material-ui/List'
import ContentAdd from 'material-ui/svg-icons/content/add'

export default ({ qualities, clickHandler, buttonText }) => {

  const nodes = qualities.map((quality, index) => {
    return (<ListItem
      rightIcon={<ContentAdd />}
      onTouchTap={ () => clickHandler(quality, index) }>
      { quality.name } cost: { quality.karmaCost }
    </ListItem>)

  })

  return (<List>
    { nodes }
  </List>)
}