import React from 'react'
import PropTypes from 'prop-types'

const CharacterItems = ({ItemComponent, characterItems, handleRemoveItem, handleSelectOption}) => {
  const itemComponents = characterItems
    .map((item, index) => <ItemComponent key={index} item={item} handleSelectOption={handleSelectOption} handleRemoveItem={ () => { handleRemoveItem(index)} }/>)
  return (<div>
    {itemComponents}
  </div>)
}

CharacterItems.propTypes = {
  ItemComponent: PropTypes.func,
  characterItems: PropTypes.array,
  handleRemoveItem: PropTypes.func,
  handleSelectOption: PropTypes.func,
}

export default CharacterItems
