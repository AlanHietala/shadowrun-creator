import React from 'react'
import PropTypes from 'prop-types'

const CharacterItems = ({ItemComponent, characterItems, handleRemoveItem, handleSelectOption, handleToggleCapacityOption, ...props}) => {
  const itemComponents = characterItems
    .map((item, index) => (<ItemComponent
      key={index} item={item}
      handleToggleCapacityOption={(capacityIndex) => {handleToggleCapacityOption(index, capacityIndex)}}
      handleSelectOption={(accessoryPosition, accessory) => {handleSelectOption(index, accessoryPosition, accessory)}}
      {...props}
      handleRemoveItem={ () => { handleRemoveItem(index)} }/>))
  return (<div>
    {itemComponents}
  </div>)
}

CharacterItems.propTypes = {
  ItemComponent: PropTypes.func,
  characterItems: PropTypes.array,
  handleRemoveItem: PropTypes.func,
  handleSelectOption: PropTypes.func,
  handleToggleCapacityOption: PropTypes.func,
}

export default CharacterItems
