import React from 'react'
import CharacterItems from './CharacterItems'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import AllItemsList from './AllItemsList'
export default class CharacterSheetSection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  render() {
    const {sectionTitle, characterSheetItems, allItems, handleAddItem, handleRemoveItem, ItemComponent} = this.props

    const actions = [
      <FlatButton
       label="close"
       primary={true}
       onTouchTap={this.handleClose}
     />]

    return (<div>
     <CharacterItems ItemComponent={ItemComponent} characterItems={characterSheetItems} handleRemoveItem={handleRemoveItem}/>
     <Dialog actions={actions}
       modal={false}
       open={this.state.open}
       autoScrollBodyContent={true}
       onRequestClose={this.handleClose}>
       <AllItemsList title={sectionTitle} allItems={allItems} handleAddItem={handleAddItem} ItemComponent={ItemComponent}/>
     </Dialog>
     <FloatingActionButton onTouchTap={this.handleOpen}>
       <ContentAdd />
     </FloatingActionButton>
   </div>)
  }
}
