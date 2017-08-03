import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import { addWare, removeWare } from '../../actions/itemActions'
import wareList from '../../constants/ware'
import { characterWareSelector, wareListSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import WareItem from './WareItem'
import PropTypes from 'prop-types'

class WarePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {characterWare, handleAddWare, handleRemoveWare} = this.props
    return (<Paper>
      <h2>Ware</h2>
      <CharacterSheetSection
        sectionTitle={'ware'}
        characterSheetItems={characterWare}
        allItems={wareList}
        handleAddItem={handleAddWare}
        handleRemoveItem={handleRemoveWare}
        ItemComponent={WareItem}
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
  }
}

WarePicker.propTypes = {
  characterWare: PropTypes.array,
  handleAddWare: PropTypes.func,
  handleRemoveWare: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(WarePicker)
