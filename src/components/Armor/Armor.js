import React from 'react'
import {connect} from 'react-redux'
import armorList from '../../constants/armor/armor'
import {changeItemCapacityRating, changeCount, addItem, removeItem, changeItemRating, toggleItemCapacityOption } from '../../actions/itemActions'
import { characterArmorSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import ArmorItem from './ArmorItem'
import AddedItem from '../CharacterSheetSection/AddedItem'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import { ARMOR } from '../../constants/itemTypes'

class ArmorPicker extends React.Component {

  render() {
    const { characterArmor, handleAddEquipment, handleChangeCapacityRating, handleToggleCapacityOption, handleChangeCount, handleRatingChange, handleRemoveEquipment} = this.props
    return(<Paper style={{minWidth: 300, flexGrow: 1, margin: 5}}>
      <h2>Armor</h2>
      <CharacterSheetSection
        sectionTitle={'Armor'}
        characterSheetItems={characterArmor}
        allItems={armorList}
        handleAddItem={handleAddEquipment}
        handleRatingChange={handleRatingChange}
        handleRemoveItem={handleRemoveEquipment}
        handleToggleCapacityOption={handleToggleCapacityOption}
        handleChangeCapacityRating={handleChangeCapacityRating}
        ItemComponent={ArmorItem}
        handleChangeCount={handleChangeCount}
        AddedItemComponent={AddedItem}
      />
    </Paper>)
  }

}

const mapStateToProps = (state) => {
  return {
    characterArmor: characterArmorSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddEquipment: equipment => dispatch(addItem(equipment, ARMOR)),
    handleRemoveEquipment: index => dispatch(removeItem(index, ARMOR)),
    handleRatingChange: (index, ratingIndex) => dispatch(changeItemRating(index, ratingIndex, ARMOR)),
    handleChangeCount: (index, count) => dispatch(changeCount(index, count, ARMOR)),
    handleToggleCapacityOption: (index, capacityIndex) => dispatch(toggleItemCapacityOption(index, capacityIndex, ARMOR)),
    handleChangeCapacityRating: (index, capacityIndex, ratingIndex) => dispatch(changeItemCapacityRating(index, capacityIndex, ratingIndex, ARMOR)),
  }
}

ArmorPicker.propTypes = {
  characterArmor: PropTypes.array,
  handleAddEquipment: PropTypes.func,
  handleRemoveEquipment: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handleChangeCount: PropTypes.func,
  handleToggleCapacityOption: PropTypes.func,
  handleChangeCapacityRating: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmorPicker)
