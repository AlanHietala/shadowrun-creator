import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import {changeWareCapacityRating, changeWareRating, addWare, removeWare, toggleCapacityOption } from '../../actions/itemActions'
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
    const {characterWare, handleAddWare, handleRemoveWare, handleToggleCapacityOption, handleRatingChange, handleChangeWareCapacityRating} = this.props
    return (<Paper style={{minWidth:300, flexGrow: 1, margin: 5}}>
      <h2>Ware</h2>
      <CharacterSheetSection
        sectionTitle={'ware'}
        characterSheetItems={characterWare}
        allItems={wareList}
        handleAddItem={handleAddWare}
        handleRemoveItem={handleRemoveWare}
        handleRatingChange={handleRatingChange}
        handleToggleCapacityOption={handleToggleCapacityOption}
        handleChangeWareCapacityRating={handleChangeWareCapacityRating}
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
    handleToggleCapacityOption: (wareIndex, capacityOption) => {
      const addCapacityOptionAction = toggleCapacityOption(wareIndex, capacityOption)
      dispatch(addCapacityOptionAction)
    },
    handleRatingChange: (wareIndex, ratingIndex) => {
      const changeWareRatingAction = changeWareRating(wareIndex, ratingIndex)
      dispatch(changeWareRatingAction)
    },
    handleChangeWareCapacityRating: (wareIndex, capacityIndex, ratingIndex) => {
      const changeWareCapacityRatingAction = changeWareCapacityRating(wareIndex, capacityIndex, ratingIndex)
      dispatch(changeWareCapacityRatingAction)
    },
  }
}

WarePicker.propTypes = {
  characterWare: PropTypes.array,
  handleAddWare: PropTypes.func,
  handleRemoveWare: PropTypes.func,
  handleToggleCapacityOption: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handleChangeWareCapacityRating: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(WarePicker)
