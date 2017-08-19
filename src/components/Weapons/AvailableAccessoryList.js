import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

const AvailableAccessoryList = ({availableAccessories, accessoryTitle, selectedValue, handleSelectOption}) => {
  if (availableAccessories) {
    return (<div>
      <SelectField
        value={selectedValue}
        floatingLabelText={accessoryTitle}
        onChange={handleSelectOption}>
        <MenuItem value={null} primaryText={''}/>
        {availableAccessories.map(accessory => {
          const style = accessory.isInstalled ? styles.isInstalled : null
          return (
            <MenuItem style={style} key={accessory.key} value={accessory.key} primaryText={accessory.name} />
          )
        })}
      </SelectField>
    </div>)
  } else {
    return null
  }
}

const styles = {
  isInstalled: {
    color: '#eee',
  },
}

AvailableAccessoryList.propTypes = {
  availableAccessories: PropTypes.array,
  accessoryTitle: PropTypes.string,
  selectedValue: PropTypes.string,
  handleSelectOption: PropTypes.func,
}

export default AvailableAccessoryList
