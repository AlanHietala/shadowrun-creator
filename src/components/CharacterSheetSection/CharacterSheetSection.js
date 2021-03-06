import React from 'react'
import CharacterItems from './CharacterItems'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import AllItemsList from './AllItemsList'
import PropTypes from 'prop-types'

class CharacterSheetSection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  handleOpen = () => {
    this.setState({
      open: true,
    })
  }

  render() {
    const {
      sectionTitle,
      characterSheetItems,
      allItems,
      ItemComponent,
      AddedItemComponent,
      handleAddItem,
      ...props
    } = this.props

    const actions = [
      <FlatButton
        key="close"
        label="close"
        primary={true}
        onTouchTap={this.handleClose}
      />]
    const CharacterItemComponent = AddedItemComponent || ItemComponent
    return (<div>
      <CharacterItems
        ItemComponent={CharacterItemComponent}
        characterItems={characterSheetItems}
        {...props}
      />
      <Dialog actions={actions}
        modal={false}
        open={this.state.open}
        autoScrollBodyContent={true}
        onRequestClose={this.handleClose}>
        <AllItemsList title={sectionTitle} allItems={allItems} handleAddItem={handleAddItem} ItemComponent={ItemComponent}/>
      </Dialog>
      <RaisedButton style={styles.button} label="Add" primary={true} onTouchTap={this.handleOpen} />
    </div>)
  }
}
const styles = {
  button: {
    marginTop: 10,
  },
}
CharacterSheetSection.propTypes = {
  sectionTitle: PropTypes.string,
  characterSheetItems: PropTypes.array,
  allItems: PropTypes.array,
  handleAddItem: PropTypes.func,
  handleRemoveItem: PropTypes.func,
  handleSelectOption: PropTypes.func,
  handleAddCapacityOption: PropTypes.func,
  handleRemoveCapacityOption: PropTypes.func,
  ItemComponent: PropTypes.func,
  AddedItemComponent:  PropTypes.func,
}

export default CharacterSheetSection
