import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import { addPower, removePower } from '../../actions/powerActions'
import { characterAdeptPowersSelector, adeptPowersSelector } from '../../selectors/adeptPowerSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import AdeptPowerItem from './AdeptPowerItem'
import PropTypes from 'prop-types'

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

AdeptPowerPicker.propTypes = {
  adeptPowerList: PropTypes.array,
  handleAddPower: PropTypes.func,
  handleRemovePower: PropTypes.func,
  characterAdeptPowers: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdeptPowerPicker)
