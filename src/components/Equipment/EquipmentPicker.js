import React from 'react'
import {connect} from 'react-redux'
import equipmentList from '../../constants/equipment'
import {changeItemCapacityRating, changeCount, addItem, removeItem, changeItemRating, toggleItemCapacityOption } from '../../actions/itemActions'
import { characterItemsSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import EquipmentItem from './EquipmentItem'
import AddedItem from '../CharacterSheetSection/AddedItem'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import { EQUIPMENT } from '../../constants/itemTypes'

class EquipmentPicker extends React.Component {

  render() {
    const { characterEquipment, handleAddEquipment, handleChangeCapacityRating, handleToggleCapacityOption, handleChangeCount, handleRatingChange, handleRemoveEquipment} = this.props
    return(<Paper style={{minWidth: 300, flexGrow: 1, margin: 5}}>
      <h3 style={styles.header}>Equipment</h3>
      <CharacterSheetSection
        sectionTitle={'Equipment'}
        characterSheetItems={characterEquipment}
        allItems={equipmentList}
        handleAddItem={handleAddEquipment}
        handleRatingChange={handleRatingChange}
        handleRemoveItem={handleRemoveEquipment}
        handleToggleCapacityOption={handleToggleCapacityOption}
        handleChangeCapacityRating={handleChangeCapacityRating}
        ItemComponent={EquipmentItem}
        handleChangeCount={handleChangeCount}
        AddedItemComponent={AddedItem}
      />
    </Paper>)
  }

}

const mapStateToProps = (state) => {
  return {
    characterEquipment: characterItemsSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddEquipment: equipment => dispatch(addItem(equipment, EQUIPMENT)),
    handleRemoveEquipment: index => dispatch(removeItem(index, EQUIPMENT)),
    handleRatingChange: (index, ratingIndex) => dispatch(changeItemRating(index, ratingIndex, EQUIPMENT)),
    handleChangeCount: (index, count) => dispatch(changeCount(index, count, EQUIPMENT)),
    handleToggleCapacityOption: (index, capacityIndex) => dispatch(toggleItemCapacityOption(index, capacityIndex, EQUIPMENT)),
    handleChangeCapacityRating: (index, capacityIndex, ratingIndex) => dispatch(changeItemCapacityRating(index, capacityIndex, ratingIndex, EQUIPMENT)),
  }
}

const styles = {
  header: {
    margin: 10,
  },
}

EquipmentPicker.propTypes = {
  characterEquipment: PropTypes.array,
  handleAddEquipment: PropTypes.func,
  handleRemoveEquipment: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handleChangeCount: PropTypes.func,
  handleToggleCapacityOption: PropTypes.func,
  handleChangeCapacityRating: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentPicker)
