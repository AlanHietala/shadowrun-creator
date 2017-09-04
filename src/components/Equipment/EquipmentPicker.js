import React from 'react'
import {connect} from 'react-redux'
import equipmentList from '../../constants/equipment'
import {changeCount, addItem, removeItem, changeItemRating } from '../../actions/itemActions'
import { characterItemsSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import EquipmentItem from './EquipmentItem'
import AddedEquipmentItem from './AddedEquipmentItem'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

class EquipmentPicker extends React.Component {

  render() {
    const { characterEquipment, handleAddEquipment, handleChangeCount, handleRatingChange, handleRemoveEquipment} = this.props
    return(<Paper style={{minWidth: 300, flexGrow: 1, margin: 5}}>
      <h2>Equipment</h2>
      <CharacterSheetSection
        sectionTitle={'Equipment'}
        characterSheetItems={characterEquipment}
        allItems={equipmentList}
        handleAddItem={handleAddEquipment}
        handleRatingChange={handleRatingChange}
        handleRemoveItem={handleRemoveEquipment}
        ItemComponent={EquipmentItem}
        handleChangeCount={handleChangeCount}
        AddedItemComponent={AddedEquipmentItem}
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
    handleAddEquipment: equipment => dispatch(addItem(equipment)),
    handleRemoveEquipment: index => dispatch(removeItem(index)),
    handleRatingChange: (index, ratingIndex) => dispatch(changeItemRating(index, ratingIndex)),
    handleChangeCount: (index, count) => dispatch(changeCount(index, count)),
  }
}

EquipmentPicker.propTypes = {
  characterEquipment: PropTypes.array,
  handleAddEquipment: PropTypes.func,
  handleRemoveEquipment: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handleChangeCount: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentPicker)
