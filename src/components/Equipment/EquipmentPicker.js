import React from 'react'
import {connect} from 'react-redux'
import equipmentList from '../../constants/equipment'
import { addItem, removeItem } from '../../actions/itemActions'
import { characterItemsSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import EquipmentItem from './EquipmentItem'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

class EquipmentPicker extends React.Component {

  render() {
    const { characterEquipment, handleAddEquipment, handleRemoveEquipment} = this.props
    return(<Paper>
        <h2>Equipment</h2>
        <CharacterSheetSection
          sectionTitle={'Equipment'}
          characterSheetItems={characterEquipment}
          allItems={equipmentList}
          handleAddItem={handleAddEquipment}
          handleRemoveItem={handleRemoveEquipment}
          ItemComponent={EquipmentItem}
        />
      </Paper>)
  }

}

const mapStateToProps = (state) => {
  return {
    characterEquipment: characterItemsSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddEquipment: equipment => dispatch(addItem(equipment)),
    handleRemoveEquipment: index => dispatch(removeItem(index))
  }
}

EquipmentPicker.propTypes = {
  characterEquipment: PropTypes.array,
  handleAddEquipment: PropTypes.func,
  handleRemoveEquipment: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentPicker)
