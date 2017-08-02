import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import { addWare, removeWare } from '../../actions/itemActions'
import wareList from '../../constants/ware'
import { characterWareSelector, wareListSelector } from '../../selectors/itemSelectors'
import {essenceSelector, resourcesSelector} from '../../selectors/characterSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import WareItem from './WareItem'

class WarePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {resources, essence, characterWare, handleAddWare, handleRemoveWare} = this.props
    return (<Paper>
      <h2>Ware</h2>
      <span>essence: {essence.computed} resources: {resources}</span>
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
const style = {
  actionButton: {

  }
}
const mapStateToProps = (state) => {
  return {
    characterWare: characterWareSelector(state),
    essence: essenceSelector(state),
    resources: resourcesSelector(state),
    wareList: wareListSelector(state)
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WarePicker)
