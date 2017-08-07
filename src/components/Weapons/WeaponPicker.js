
import React from 'react'
import {connect} from 'react-redux'
import weaponsList from '../../constants/weapons'
import { addWeapon, removeWeapon } from '../../actions/itemActions'
import { characterWeaponsSelector } from '../../selectors/itemSelectors'
import CharacterSheetSection from '../CharacterSheetSection'
import WeaponItem from './WeaponItem'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

class EquipmentPicker extends React.Component {

  render() {
    const { characterWeapons, handleAddWeapon, handleRemoveWeapon} = this.props
    return(<Paper>
      <h2>Weapons</h2>
      <CharacterSheetSection
        sectionTitle={'Equipment'}
        characterSheetItems={characterWeapons}
        allItems={weaponsList}
        handleAddItem={handleAddWeapon}
        handleRemoveItem={handleRemoveWeapon}
        ItemComponent={WeaponItem}
      />
    </Paper>)
  }
}

const mapStateToProps = (state) => {
  return {
    characterWeapons: characterWeaponsSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddWeapon: weapon => dispatch(addWeapon(weapon)),
    handleRemoveWeapon: index => dispatch(removeWeapon(index)),
  }
}

EquipmentPicker.propTypes = {
  characterWeapons: PropTypes.array,
  handleAddWeapon: PropTypes.func,
  handleRemoveWeapon: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentPicker)
