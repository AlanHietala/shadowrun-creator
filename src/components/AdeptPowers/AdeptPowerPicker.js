import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { addPower, removePower, increasePower, decreasePower } from '../../actions/powerActions'
import { characterAdeptPowersSelector, adeptPowersSelector } from '../../selectors/adeptPowerSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import AdeptPowerItem from './AdeptPowerItem'

class AdeptPowerPicker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {adeptPowerList, handleAddPower, handleRemovePower, characterAdeptPowers} = this.props

    return (<Paper>
      <h2>Adept Powers</h2>
      <CharacterSheetSection sectionTitle={'adept Powers'}
				 characterSheetItems={characterAdeptPowers}
				 allItems={adeptPowerList}
				 handleAddItem={handleAddPower}
				 handleRemoveItem={handleRemovePower}
				 ItemComponent={AdeptPowerItem}
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
    characterAdeptPowers: characterAdeptPowersSelector(state),
    adeptPowerList: adeptPowersSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPower: (power) => {
      const addPowerAction = addPower(power)
      dispatch(addPowerAction)
    },
    handleRemovePower: (powerIndex) => {
      const removePowerAction = removePower(powerIndex)
      dispatch(removePowerAction)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdeptPowerPicker)
