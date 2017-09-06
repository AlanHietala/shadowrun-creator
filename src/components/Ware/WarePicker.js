import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import {changeItemGrade, changeItemCapacityRating, changeItemRating, addItem, removeItem, toggleItemCapacityOption } from '../../actions/itemActions'
import wareList from '../../constants/ware'
import { characterWareSelector, wareListSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import WareItem from './WareItem'
import AddedItem from '../CharacterSheetSection/AddedItem'
import PropTypes from 'prop-types'
import { WARE } from '../../constants/itemTypes'

class WarePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {characterWare, handleAddWare, handleRemoveWare, handleWareGradeChange, handleToggleCapacityOption, handleRatingChange, handleChangeCapacityRating} = this.props
    return (<Paper style={{minWidth:300, flexGrow: 1, margin: 5}}>
      <h3 style={styles.header}>Ware</h3>
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

const styles = {
  header: {
    margin: 10,
  },
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
      const addWareAction = addItem(ware, WARE)
      dispatch(addWareAction)
    },
    handleRemoveWare: (wareIndex) => {
      const removeWareAction = removeItem(wareIndex, WARE)
      dispatch(removeWareAction)
    },
    handleToggleCapacityOption: (wareIndex, capacityOption) => {
      const addCapacityOptionAction = toggleItemCapacityOption(wareIndex, capacityOption, WARE)
      dispatch(addCapacityOptionAction)
    },
    handleRatingChange: (wareIndex, ratingIndex) => {
      const changeWareRatingAction = changeItemRating(wareIndex, ratingIndex, WARE)
      dispatch(changeWareRatingAction)
    },
    handleChangeCapacityRating: (wareIndex, capacityIndex, ratingIndex) => {
      const changeWareCapacityRatingAction = changeItemCapacityRating(wareIndex, capacityIndex, ratingIndex, WARE)
      dispatch(changeWareCapacityRatingAction)
    },
    handleWareGradeChange: (wareIndex, grade) => {
      const changeWareGradeAction = changeItemGrade(wareIndex, grade, WARE)
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
