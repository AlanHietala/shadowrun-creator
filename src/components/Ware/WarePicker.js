import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import { addWare, removeWare, addCapacityOption, removeCapacityOption } from '../../actions/itemActions'
import wareList from '../../constants/ware'
import { characterWareSelector, wareListSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import WareItem from './WareItem'
import AddedWareItem from './AddedWareItem'
import PropTypes from 'prop-types'

class WarePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {characterWare, handleAddWare, handleRemoveWare, handleAddCapacityOption, handleRemoveCapacityOption} = this.props
    return (<Paper style={{minWidth:300, flexGrow: 1, margin: 5}}>
      <h2>Ware</h2>
      <CharacterSheetSection
        sectionTitle={'ware'}
        characterSheetItems={characterWare}
        allItems={wareList}
        handleAddItem={handleAddWare}
        handleRemoveItem={handleRemoveWare}
        handleAddCapacityOption={handleAddCapacityOption}
        handleRemoveCapacityOption={handleRemoveCapacityOption}
        ItemComponent={WareItem}
        AddedItemComponent={AddedWareItem}
      />
    </Paper>)
  }

}

const mapStateToProps = (state) => {
  return {
    characterWare: characterWareSelector(state),
    wareList: wareListSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddWare: (ware) => {
      const addWareAction = addWare(ware)
      dispatch(addWareAction)
    },
    handleRemoveWare: (wareIndex) => {
      const removeWareAction = removeWare(wareIndex)
      dispatch(removeWareAction)
    },
    handleAddCapacityOption: (wareIndex, capacityOption) => {
      const addCapacityOptionAction = addCapacityOption(wareIndex, capacityOption)
      dispatch(addCapacityOptionAction)
    },
    handleRemoveCapacityOption: (wareIndex, capacityIndex) => {
      const removeCapacityOptionAction = removeCapacityOption(wareIndex, capacityIndex)
      dispatch(removeCapacityOptionAction)
    },
  }
}

WarePicker.propTypes = {
  characterWare: PropTypes.array,
  handleAddWare: PropTypes.func,
  handleRemoveWare: PropTypes.func,
  handleAddCapacityOption: PropTypes.func,
  handleRemoveCapacityOption: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(WarePicker)
