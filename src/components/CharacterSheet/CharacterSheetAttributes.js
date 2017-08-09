import React from 'react'
import Toggle from 'material-ui/Toggle'
import CharacterSheetAttributesView from './CharacterSheetAttributesView'
import Attributes from '../Attributes'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

class CharacterSheetAttributes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editToggled: false,
    }
  }

  toggleEdit = () => {
    this.setState((prevState) => {
      return {
        editToggled: !prevState.editToggled,
      }
    })
  }

  render() {
    const {attributes} = this.props
    const characterSheetAttributeComponent = this.state.editToggled ?
      <Attributes /> :
      <CharacterSheetAttributesView attributes={attributes} />

    return (
      <div>
        <Paper>
          {characterSheetAttributeComponent}
          <div style={styles.toggleBlock}>
            <Toggle
              toggle={this.state.editToggled}
              onToggle={this.toggleEdit}
              label={'edit'} />
          </div>
        </Paper>

      </div>
    )
  }
}

const styles = {
  toggleBlock: {
    maxWidth: 100,
  },
  attributeList: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  attribute: {
    flexDirection: 'column',
    margin: '0.5rem',
  },
  attributeLine: {
    textAlign: 'center',
  },
}

CharacterSheetAttributes.propTypes = {
  attributes: PropTypes.object.isRequired,
}
export default CharacterSheetAttributes
