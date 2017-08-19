import React from 'react'
import { connect } from  'react-redux'
import { positiveQualities, negativeQualities} from '../../constants/qualities'
import {addQuality, removeQuality } from '../../actions/qualityActions'
import Paper from 'material-ui/Paper'
import CharacterSheetSection from '../CharacterSheetSection'
import QualityItem from './QualityItem'
import AddedQualityItem from './AddedQualityItem'
import PropTypes from 'prop-types'

class QualityPicker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { selectedQualities, removeQuality, addQuality, karma } = this.props
    const qualities = positiveQualities.concat(negativeQualities)
    return (<Paper style={{minWidth: 300, flexGrow: 1, margin: 5}}>
      <h2>Qualities</h2>
      <div>Karma: { karma }</div>
      <CharacterSheetSection
        sectionTitle={'Qualities'}
        characterSheetItems={selectedQualities}
        allItems={qualities}
        handleAddItem={addQuality}
        handleRemoveItem={removeQuality}
        ItemComponent={QualityItem}
        AddedItemComponent={AddedQualityItem}
      />
    </Paper>)
  }
}

const mapStateToProps = (state) => {
  return {
    selectedQualities: state.character.qualities,
    karma: state.character.karma,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuality: (index) => {
      const removeQualityAction = removeQuality(index)
      dispatch(removeQualityAction)
    },
    addQuality: (quality) => {
      const addQualityAction = addQuality(quality)
      dispatch(addQualityAction)
    },
  }
}

QualityPicker.propTypes = {
  selectedQualities: PropTypes.array,
  removeQuality: PropTypes.func,
  addQuality: PropTypes.func,
  karma: PropTypes.number,
}
export default connect(mapStateToProps, mapDispatchToProps)(QualityPicker)
