import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import {changeWareGrade, changeWareCapacityRating, changeWareRating, addWare, removeWare, toggleCapacityOption } from '../../actions/itemActions'
import wareList from '../../constants/ware'
import { characterWareSelector, wareListSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import WareItem from './WareItem'
import AddedItem from '../CharacterSheetSection/AddedItem'
import PropTypes from 'prop-types'

class WarePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {characterWare, handleAddWare, handleRemoveWare, handleWareGradeChange, handleToggleCapacityOption, handleRatingChange, handleChangeCapacityRating} = this.props
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
        handleChangeCapacityRating={handleChangeCapacityRating}
        handleWareGradeChange={handleWareGradeChange}
        ItemComponent={WareItem}
        AddedItemComponent={AddedItem}
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
    handleChangeCapacityRating: (wareIndex, capacityIndex, ratingIndex) => {
      const changeWareCapacityRatingAction = changeWareCapacityRating(wareIndex, capacityIndex, ratingIndex)
      dispatch(changeWareCapacityRatingAction)
    },
    handleWareGradeChange: (wareIndex, grade) => {
      const changeWareGradeAction = changeWareGrade(wareIndex, grade)
      dispatch(changeWareGradeAction)
    },
  }
}

WarePicker.propTypes = {
  characterWare: PropTypes.array,
  handleAddWare: PropTypes.func,
  handleRemoveWare: PropTypes.func,
  handleToggleCapacityOption: PropTypes.func,
  handleRatingChange: PropTypes.func,
  handleChangeCapacityRating: PropTypes.func,
  handleWareGradeChange: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(WarePicker)
